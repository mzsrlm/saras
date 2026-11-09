
function csvToRows(text){
 const rows=[];let row=[],cell="",quoted=false;
 for(let i=0;i<text.length;i++){
  const c=text[i],n=text[i+1];
  if(c==='"'&&quoted&&n==='"'){cell+='"';i++;}
  else if(c==='"'){quoted=!quoted;}
  else if(c===','&&!quoted){row.push(cell);cell="";}
  else if((c==='\n'||c==='\r')&&!quoted){
   if(c==='\r'&&n==='\n')i++;
   row.push(cell);if(row.some(v=>v.trim()!==""))rows.push(row);
   row=[];cell="";
  }else cell+=c;
 }
 if(cell.length||row.length){row.push(cell);rows.push(row);}
 return rows;
}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function getSheetUrl(key){
 const cfg=window.SARAS_CONFIG||{},id=cfg.SPREADSHEET_ID,gid=cfg.GIDS?.[key];
 if(!id||id.startsWith("PASTE_")||!gid||gid.startsWith("PASTE_"))return null;
 return `https://docs.google.com/spreadsheets/d/${encodeURIComponent(id)}/gviz/tq?tqx=out:csv&gid=${encodeURIComponent(gid)}`;
}
async function loadSheetTable(key,tableId,statusId,searchId){
 const table=document.getElementById(tableId),status=document.getElementById(statusId);
 const url=getSheetUrl(key);
 if(!url){
  status.textContent="Information for this section will be available soon.";
  status.classList.add("under-construction");
  const controls=table.closest(".panel")?.querySelector(".controls"); if(controls) controls.hidden=true;
  const wrap=table.closest(".table-wrap"); if(wrap) wrap.hidden=true;
  const note=table.closest(".panel")?.querySelector("p.muted"); if(note) note.hidden=true;
  return;
 }
 status.textContent="Connecting to Google Sheets…";
 try{
  const res=await fetch(url);if(!res.ok)throw new Error("Google Sheets returned HTTP "+res.status);
  const csv=await res.text();if(csv.trim().startsWith("<"))throw new Error("The sheet is not publicly readable as CSV. Check its sharing or publishing settings.");
  const rows=csvToRows(csv);
  if(rows.length<2 || !rows.slice(1).some(r=>r.some(x=>x.trim()!==""))){
   status.textContent="Information for this section will be available soon.";
   status.classList.add("under-construction");
   const controls=table.closest(".panel")?.querySelector(".controls"); if(controls) controls.hidden=true;
   const wrap=table.closest(".table-wrap"); if(wrap) wrap.hidden=true;
   const note=table.closest(".panel")?.querySelector("p.muted"); if(note) note.hidden=true;
   return;
  }
  const headers=rows[0].map((h,i)=>h.trim()||`Column ${i+1}`);
  const data=rows.slice(1).filter(r=>r.some(x=>x.trim()!==""));
  const thead=table.querySelector("thead"),tbody=table.querySelector("tbody");
  thead.innerHTML="<tr>"+headers.map((h,i)=>`<th data-col="${i}">${esc(h)} ↕</th>`).join("")+"</tr>";
  function render(q=""){
   const filtered=data.filter(row=>row.join(" ").toLowerCase().includes(q));
   tbody.innerHTML=filtered.map(row=>"<tr>"+headers.map((_,i)=>`<td>${esc(row[i]||"")}</td>`).join("")+"</tr>").join("")||`<tr><td colspan="${headers.length}" class="empty">No matching records.</td></tr>`;
   status.textContent=`Connected · ${filtered.length} of ${data.length} records · ${headers.length} columns`;
  }
  render();
  document.getElementById(searchId).addEventListener("input",e=>render(e.target.value.toLowerCase()));
  thead.querySelectorAll("th").forEach(th=>th.addEventListener("click",()=>{
   const col=Number(th.dataset.col);data.sort((a,b)=>(a[col]||"").localeCompare(b[col]||"",undefined,{numeric:true,sensitivity:"base"}));
   if(th.dataset.direction==="asc"){data.reverse();th.dataset.direction="desc";}else th.dataset.direction="asc";
   render(document.getElementById(searchId).value.toLowerCase());
  }));
 }catch(err){status.textContent="Could not load sheet: "+err.message;status.classList.add("error");}
}
