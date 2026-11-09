
const tasks=[{"no": 1, "name": "Publicity", "desc": "Promotional video, publicity, photography/video coverage and hoarding design", "people": ["Raymond Lalsangzuala", "Irene Hmangaihtluangi", "Lalengzami"], "count": 3}, {"no": 2, "name": "Stall Construction, Venue & Sound", "desc": "Stall construction/allotment, storage, sound system and stall layout map", "people": ["Dr. F. Laldinthara", "Raymond Lalsangzuala", "F. Lalbiakthara", "Joseph Malsawmsanga"], "count": 4}, {"no": 3, "name": "Security", "desc": "Private security, night-duty request and gate arrangements", "people": ["Lalvensanga", "Joseph Malsawmsanga", "Fimthangvunga"], "count": 3}, {"no": 4, "name": "Water & Sanitation", "desc": "Daily cleaning, waste collection and waste-disposal vehicle", "people": ["H. Lalfakzuala", "Lalrinfela", "Saingurpuia Sailo", "Vanlalhruaitluanga", "R. Lalchhanchuaha"], "count": 5}, {"no": 5, "name": "Theme Design & Branding", "desc": "Apply Ministry SARAS Aajeevika Brand Manual 2.0", "people": ["Irene Hmangaihtluangi", "F. Lalbiakthara"], "count": 2}, {"no": 6, "name": "Invitation", "desc": "Invitation card, invitee list and dispatch of invitations", "people": ["Dr. Zomuankima", "Lalvensanga", "Hannah Laldinpuii", "Laldinzuali Sailo", "Lallianmawii"], "count": 5}, {"no": 7, "name": "Artists / Entertainment", "desc": "Artists for inauguration, closing and evening programmes", "people": ["Nancy Lalsawmliani", "Lalnunmawii P", "Vanlalhruaitluanga", "Lalruatfela"], "count": 4}, {"no": 8, "name": "Registration", "desc": "Registration, unloading duty staff list, arrival and vehicle reporting", "people": ["Zothansanga", "H. Lalfakzuala", "Lalengzami", "Lalthathangi", "Lalremruati", "C. Lalhlimpuii"], "count": 6}, {"no": 9, "name": "MIS Nomination & Daily Sales Record", "desc": "Participant nomination through LokOS - SARAS MELA mobile application and daily sales record collection", "people": ["Irene Hmangaihtluangi", "Joseph Malsawmsanga", "Lalrinfela", "James Lalromawia", "Lalruatfela"], "count": 5}, {"no": 10, "name": "Reception Duty", "desc": "Prepare SMMU staff duty roster", "people": ["Lalramthangi", "Julie Zairemmawii", "Lalnunmawii P"], "count": 3}, {"no": 11, "name": "VIP Visitor", "desc": "Receive and attend to VIP visitors", "people": ["Lalramthangi", "Lalengzami", "Ngurthansanga"], "count": 3}, {"no": 12, "name": "DDU-GKY Stall", "desc": "Display DDU-GKY success stories, videos and pictures", "people": [], "count": 0}, {"no": 13, "name": "Traffic Duty", "desc": "Arrange traffic duty", "people": ["Vanlalhmangaiha", "Zoliansanga", "Fimthangvunga", "Lalruatfela"], "count": 4}, {"no": 14, "name": "Bouquet & Gift for Special Guest", "desc": "Bouquet and gifts for Chief Guest and SMD", "people": ["Zorengpuii Sailo", "Lalthathangi", "Lucy Lalthlengliani", "Laldinzuali Sailo"], "count": 4}, {"no": 15, "name": "Badge Preparation", "desc": "Badges for SHG participants and duty staff", "people": ["Irene Hmangaihtluangi", "Lalrinfela", "James Lalromawia"], "count": 3}, {"no": 16, "name": "Documentation & Press Note", "desc": "Fair documentation, press note and SHG product story cards/photos", "people": ["Dr. Zomuankima", "H. Lalfakzuala", "Marianne Zothanpuii"], "count": 3}, {"no": 17, "name": "Finance", "desc": "Accounts and financial arrangements during preparation and fair", "people": ["Zorengpuii Sailo", "Prudence Zorinpuii", "C. Zosangkimi", "Lalremruati", "Ngurthansanga"], "count": 5}, {"no": 18, "name": "Hiring of Workers", "desc": "Workers for shifting goods, cleaning and other requirements", "people": ["Zothansanga", "Raymond Lalsangzuala", "Saingurpuia Sailo"], "count": 3}, {"no": 19, "name": "Refreshment", "desc": "Refreshments for inaugural function", "people": ["Lalramthangi", "Zorengpuii Sailo", "H. Lalfakzuala", "Hannah Laldinpuii", "Fimthangvunga", "C. Lalhlimpuii", "Lallianmawii"], "count": 7}, {"no": 20, "name": "Lodging", "desc": "Accommodation for SHG members, staff and visiting NE SRLMs", "people": ["Vanlalhmangaiha", "Julie Zairemmawii", "Hannah Laldinpuii", "Ngurthansanga"], "count": 4}, {"no": 21, "name": "SELHEL Stall", "desc": "Prepare SELHEL brand stall and arrange products for sale", "people": ["F. Lalbiakthara", "Irene Hmangaihtluangi", "Marianne Zothanpuii", "Joseph Malsawmsanga", "David Lalsangzuala"], "count": 5}, {"no": 22, "name": "Amusement", "desc": "Children's play area, entertainment and budget estimate", "people": ["Nancy Lalsawmliani", "Lalvensanga", "Prudence Zorinpuii", "Lucy Lalthlengliani", "Zoliansanga"], "count": 5}, {"no": 23, "name": "Block Award", "desc": "Plan thematic awards, product/sales awards and Best Performing State Award", "people": ["Dr. Zomuankima", "Dr. F. Laldinthara", "Irene Hmangaihtluangi"], "count": 3}];
const people=[{"name": "Irene Hmangaihtluangi", "count": 6, "tasks": ["1. Publicity", "5. Theme Design & Branding", "9. MIS Nomination & Daily Sales Record", "15. Badge Preparation", "21. SELHEL Stall", "23. Block Award"], "designation": "SMM (MIS)"}, {"name": "H. Lalfakzuala", "count": 4, "tasks": ["4. Water & Sanitation", "8. Registration", "16. Documentation & Press Note", "19. Refreshment"], "designation": "SMM (Skills)"}, {"name": "Joseph Malsawmsanga", "count": 4, "tasks": ["2. Stall Construction, Venue & Sound", "3. Security", "9. MIS Nomination & Daily Sales Record", "21. SELHEL Stall"], "designation": "PM (NF)"}, {"name": "Dr. Zomuankima", "count": 3, "tasks": ["6. Invitation", "16. Documentation & Press Note", "23. Block Award"], "designation": "COO / COO (NRLM)"}, {"name": "F. Lalbiakthara", "count": 3, "tasks": ["2. Stall Construction, Venue & Sound", "5. Theme Design & Branding", "21. SELHEL Stall"], "designation": "SMM (NF)"}, {"name": "Fimthangvunga", "count": 3, "tasks": ["3. Security", "13. Traffic Duty", "19. Refreshment"], "designation": "MA"}, {"name": "Hannah Laldinpuii", "count": 3, "tasks": ["6. Invitation", "19. Refreshment", "20. Lodging"], "designation": "PM (IBCB)"}, {"name": "Lalengzami", "count": 3, "tasks": ["1. Publicity", "8. Registration", "11. VIP Visitor"], "designation": "PM (Skills)"}, {"name": "Lalramthangi", "count": 3, "tasks": ["10. Reception Duty", "11. VIP Visitor", "19. Refreshment"], "designation": "COO (Skills)"}, {"name": "Lalrinfela", "count": 3, "tasks": ["4. Water & Sanitation", "9. MIS Nomination & Daily Sales Record", "15. Badge Preparation"], "designation": "APM (MIS)"}, {"name": "Lalruatfela", "count": 3, "tasks": ["7. Artists / Entertainment", "9. MIS Nomination & Daily Sales Record", "13. Traffic Duty"], "designation": "MA"}, {"name": "Lalvensanga", "count": 3, "tasks": ["3. Security", "6. Invitation", "22. Amusement"], "designation": "SMM (Skills)"}, {"name": "Ngurthansanga", "count": 3, "tasks": ["11. VIP Visitor", "17. Finance", "20. Lodging"], "designation": "MA"}, {"name": "Raymond Lalsangzuala", "count": 3, "tasks": ["1. Publicity", "2. Stall Construction, Venue & Sound", "18. Hiring of Workers"], "designation": "SMM (SISD)"}, {"name": "Zorengpuii Sailo", "count": 3, "tasks": ["14. Bouquet & Gift for Special Guest", "17. Finance", "19. Refreshment"], "designation": "CFO"}, {"name": "C. Lalhlimpuii", "count": 2, "tasks": ["8. Registration", "19. Refreshment"], "designation": "MA"}, {"name": "Dr. F. Laldinthara", "count": 2, "tasks": ["2. Stall Construction, Venue & Sound", "23. Block Award"], "designation": "SMM (IB/CB; IBCB in item 23)"}, {"name": "James Lalromawia", "count": 2, "tasks": ["9. MIS Nomination & Daily Sales Record", "15. Badge Preparation"], "designation": "DMIS"}, {"name": "Julie Zairemmawii", "count": 2, "tasks": ["10. Reception Duty", "20. Lodging"], "designation": "PM (CLF; SI&SD in item 20)"}, {"name": "Laldinzuali Sailo", "count": 2, "tasks": ["6. Invitation", "14. Bouquet & Gift for Special Guest"], "designation": "MA"}, {"name": "Lallianmawii", "count": 2, "tasks": ["6. Invitation", "19. Refreshment"], "designation": "MA"}, {"name": "Lalnunmawii P", "count": 2, "tasks": ["7. Artists / Entertainment", "10. Reception Duty"], "designation": "PM (DF)"}, {"name": "Lalremruati", "count": 2, "tasks": ["8. Registration", "17. Finance"], "designation": "MA"}, {"name": "Lalthathangi", "count": 2, "tasks": ["8. Registration", "14. Bouquet & Gift for Special Guest"], "designation": "PM (MIS)"}, {"name": "Lucy Lalthlengliani", "count": 2, "tasks": ["14. Bouquet & Gift for Special Guest", "22. Amusement"], "designation": "APM (HR)"}, {"name": "Marianne Zothanpuii", "count": 2, "tasks": ["16. Documentation & Press Note", "21. SELHEL Stall"], "designation": "PM (KMC)"}, {"name": "Nancy Lalsawmliani", "count": 2, "tasks": ["7. Artists / Entertainment", "22. Amusement"], "designation": "SMM (Skills)"}, {"name": "Prudence Zorinpuii", "count": 2, "tasks": ["17. Finance", "22. Amusement"], "designation": "PM (F)"}, {"name": "Saingurpuia Sailo", "count": 2, "tasks": ["4. Water & Sanitation", "18. Hiring of Workers"], "designation": "MA"}, {"name": "Vanlalhmangaiha", "count": 2, "tasks": ["13. Traffic Duty", "20. Lodging"], "designation": "SMM (F)"}, {"name": "Vanlalhruaitluanga", "count": 2, "tasks": ["4. Water & Sanitation", "7. Artists / Entertainment"], "designation": "MA (DDU-GKY)"}, {"name": "Zoliansanga", "count": 2, "tasks": ["13. Traffic Duty", "22. Amusement"], "designation": "MA"}, {"name": "Zothansanga", "count": 2, "tasks": ["8. Registration", "18. Hiring of Workers"], "designation": "SMM (FI)"}, {"name": "C. Zosangkimi", "count": 1, "tasks": ["17. Finance"], "designation": "Accountant"}, {"name": "David Lalsangzuala", "count": 1, "tasks": ["21. SELHEL Stall"], "designation": "LC (NF)"}, {"name": "R. Lalchhanchuaha", "count": 1, "tasks": ["4. Water & Sanitation"], "designation": "SDS"}];
let staffSort={key:"name",direction:1};
function renderPeople(){
 const sorted=[...people].sort((a,b)=>{
  const av=staffSort.key==="sl"?people.indexOf(a)+1:a[staffSort.key];
  const bv=staffSort.key==="sl"?people.indexOf(b)+1:b[staffSort.key];
  if(typeof av==="number"&&typeof bv==="number")return(av-bv)*staffSort.direction;
  return String(av).localeCompare(String(bv),undefined,{sensitivity:"base"})*staffSort.direction;
 });
 document.getElementById("peopleBody").innerHTML=sorted.map((p,i)=>`<tr><td>${i+1}</td><td><b>${p.name}</b></td><td>${p.designation}</td><td><span class="pill">${p.count}</span></td><td><div class="task-list">${p.tasks.map(x=>`<span class="task-tag">${x}</span>`).join("")}</div></td></tr>`).join("");
}
const mizoDescriptions={
 1:"Promotional video leh publicity hi bawhzui hmasak a neih hmasak ni se. Photography leh Video Coverage ti tur pawh anni hian a tul angin an lo dap ang. Hoarding tar chungchang leh a design thlengin an kutah a awm ang.",
 2:"Stall satu tur thlan fel a nih hunah, incharge te hian an enpui a nga, a hun tak a Stall te peih fel hman a nih theih nan hma an lak pui ang. Stall bakah hian SHG te bungrua lo dah lailawk na tur store room ngaihtuah pawh an kutah a awm ang. Hei bakah hian Fair chhungin Sound System a tul angin arrangement an lo siam ang. Stall allotment a zawh hunah gate luh hlimah Stall layout map tar bawk tur a ni.",
 3:"Fair chhung hian stall te leh hmunhma te veng turin Private Security te rawih nise. Hei bakah hian SP hnenah zan duty tur dilna lehkha siam bawk ni se. Incharge hian gate duty, gate hawn leh khar, thildang pawimawh ah ruahmanna an siam ang.",
 4:"Fiar neih chhung a bawlhhlawh tlingkhawmte hi nitin thianfai turin hlawhfa rawih ni se. Bawlhhlawh paih tur motor pawh in-charge ten an buaipui ang.",
 5:"12th Regional SARAS Fair, 2026 ah hian Ministry in Saras Aajeevika Brand Manual 2.0 (SABM 2.0) a lo tihchhuah tawh chu a theih ang angin zawm ni se.",
 6:"SARAS Fair inauguration atan hian invitation card siam leh nise, sawm tur list buatsaihin a hma lampang a sawmna hi pek chhuah ni se.",
 7:"SARAS Fair chhung hian mipui tam zawk hipkhawm an nih theih nan inauguration leh closing bakah, zan lam a zai turin zaithiam sawm thin nise.",
 8:"SARAS Fair thlenkimni a registration leh bungraw unloading lo buaipui a duty turte staff list siam nise. An ni hian, Block hrang hrang an rawn kal dan tur, Aizawl an rawn thlen hun tur leh motor an rawn kal man kimchang report an lakhawm bawk ang.",
 9:"A vawikhatna a tan LoKOS kaltlangin SHG Participants te nomination tih tur a ni dawn a, hemi kaltlang tho hian Sales record pawh lakkhawm thin tur a ni ang. Tun SARAS Fair ah hian SHG member nilo stall hawng tur an awm avanig, in-charge ten a tul angin Sales Record hi manual emaw a hranpa in lak bawk ni se.",
 10:"SARAS Fair a duty tur hian SMMU Staff Duty Roster buatsaih nise. Staff duty lo te chu Office ah hna pangai thawk tur a beisei an ni.",
 11:"SHG Fair chhungin VIP visitors te an awm changin in-charge ten an mahni lo buaipui a, lo ngaihventu inruat nise.",
 12:"DDUGKY Stall ah hian TV Screen a chhuah tur Success Story leh DDU-GKY chungchang video/picture play theih a siam nise.",
 13:"SARAS Fair chhung hian Traffic Duty inruat ni se.",
 14:"Inauguration ah hian Chief Guest leh SMD te Bouquet leh Gift pek nise.",
 15:"SHG participants te leh Staff duty te tan badge siam ni se.",
 16:"Tun tum SARAS Fair hi documentation felfai leh tha tak a tih ni se. Press Note pawh a tul ang a siam ni se. SHG product hrang hrang te pawh story card a siam turin thlalak felfai tak a neih ni se.",
 17:"Fair inbuatsaihna leh a hunchhungin, account khawihtu bik inruat ni se.",
 18:"Fair chhung a bungrua thiarkual turte, bawlhlawh thianfai turte leh a tul a piang a chhawr tur hlawhfa lak ni se.",
 19:"Inaugural Function ah hian refreshment buatsaih nise, heng hi a tul angin incharge ten lo buaipui nise.",
 20:"Fair chhung a SHG member leh Staff thlenna tur neilo te tan thlenna tur incharge ten hmun ramchang lo ngaihtuah nise. Tin, kumin SARAS Fair ah hian North East SRLM te sawm ve an ni a, an thlenna tur hi a tul ang a lo buaipui tur a ni ang.",
 21:"Fair chhung hian SELHEL Brand bik zawrhchhuahna tur Stall buatsaih tur a ni a, he stall a zawrh tur lakkhawm leh buatsaih turin incharge ruat an ni.",
 22:"He Fair hi mipui tam zawkin an tlawh theih nan, mipui hip khawmna turin Children’s Play Area leh intihhlimna thenkhat dah nise tih a ni a. Incharge ten a tul angin hma lo la a, budget estimate lo siam nise.",
 23:"Tun tum SARAS Fair hian Thematic hrang hrang a ti tha leh SARAS Fair chhung a Product nei tha, Sales nei the leh NE SRLM sawm te zingah Best Performing State Award siam nise. In-charge ten a tul angin ruahmanna lo siam nise."
};
let activityLanguage="en";
let overviewLanguage="en";
function renderActivities(){
 document.getElementById("activitiesBody").innerHTML=tasks.map(t=>`<tr><td>${t.no}</td><td><b>${t.name}</b><div class="muted activity-description" style="margin-top:4px">${activityLanguage==="mz"?(mizoDescriptions[t.no]||t.desc):t.desc}</div></td><td><strong class="person-count">${t.people.length||"—"}</strong></td><td>${t.people.length?t.people.join(", "):"<i>All DDU-GKY Staff (not individually named)</i>"}</td></tr>`).join("");
}
function escapeHTML(value){return String(value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
const dutyVisualIcons={
1:`<path d="M3 10v4h4l11 5V5L7 10H3Z"/><path d="M7 14l2 6h4l-2-8"/>`,
2:`<path d="M3 10h18l-2-6H5l-2 6Z"/><path d="M4 10v10h16V10M9 20v-6h6v6"/>`,
3:`<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>`,
4:`<path d="M12 22s7-7.2 7-13a7 7 0 0 0-14 0c0 5.8 7 13 7 13Z"/>`,
5:`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/>`,
6:`<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 9h8M8 13l2 2 4-4M8 18h5"/>`,
7:`<ellipse cx="9" cy="7" rx="5" ry="3"/><path d="M4 7v5c0 2 10 2 10 0V7M14 10h5c2 0 2 4 0 4h-5"/>`,
8:`<path d="M3 10h18l-2-5H5l-2 5Z"/><path d="M5 10v10h14V10M9 20v-5h6v5"/>`,
9:`<circle cx="12" cy="10" r="7"/><circle cx="12" cy="10" r="2"/><path d="M12 3v14M5 10h14"/>`,
10:`<rect x="5" y="8" width="14" height="13" rx="2"/><path d="M8 3h8v5H8zM9 12h6M9 16h6"/>`,
11:`<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 16V8l4 4 4-4v8"/>`,
12:`<path d="M3 20V8l9-5 9 5v12H3Z"/><path d="M8 20v-7h8v7"/>`,
13:`<rect x="3" y="4" width="18" height="15" rx="1"/><path d="M7 15v-3l3-3 3 2 4-5M7 21h10"/>`,
14:`<path d="M4 20h16M6 20v-7h12v7M9 13V8a3 3 0 0 1 6 0v5"/>`,
15:`<circle cx="12" cy="6" r="3"/><path d="M5 21v-3a7 7 0 0 1 14 0v3M9 13l3 3 3-3"/>`,
16:`<circle cx="12" cy="8" r="3"/><circle cx="5" cy="10" r="2"/><circle cx="19" cy="10" r="2"/><path d="M6 21v-3a6 6 0 0 1 12 0v3"/>`,
17:`<path d="M12 3v18M5 7h14l-2 5H7L5 7ZM8 12l-3 8h14l-3-8"/>`,
18:`<path d="M4 7h16v14H4zM8 7V4h8v3M9 12h6M9 16h6"/>`,
19:`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M8 5V3h8v2M8 10h8M8 14h5"/>`,
20:`<path d="M3 11h18v9H3zM5 11V6h14v5M7 6V4h10v2"/>`,
21:`<path d="M3 10h18l-2-6H5l-2 6Z"/><path d="M4 10v10h16V10M8 14h8v6H8z"/>`,
22:`<path d="M12 2v20M6 22h12M5 5l14 14M19 5 5 19M2 12h20"/>`,
23:`<path d="M7 3h10v5H7zM5 8h14v13H5zM8 12h8M8 16h8"/>`
};
const dutyPeopleByName=Object.fromEntries(people.map(person=>[person.name,person]));
function renderDutyVisuals(){
 const host=document.getElementById("dutyVisualGrid"); if(!host)return;
 host.innerHTML=tasks.map(t=>{
  const description=overviewLanguage==="mz"?(mizoDescriptions[t.no]||t.desc):t.desc;
  return `<article class="duty-visual-card">
    <div class="duty-visual-icon-wrap"><svg class="duty-minimal-icon" viewBox="0 0 24 24" aria-hidden="true">${dutyVisualIcons[t.no]||dutyVisualIcons[1]}</svg></div>
    <div class="duty-visual-body"><h3>${t.name}</h3><p>${description}</p>
    <button type="button" class="duty-visual-members" data-task="${t.no}" aria-label="Show team members for ${t.name}" title="View names and designations">
      <span><span class="members-symbol" aria-hidden="true">●</span> No. of Members</span><strong>${t.count||"—"}</strong>
    </button></div></article>`;
 }).join("");
}
function showDutyTeam(taskNo){
 const task=tasks.find(t=>t.no===Number(taskNo)); if(!task)return;
 const members=task.people.map(name=>dutyPeopleByName[name]||{name,designation:"Designation not specified"});
 const rows=members.length?members.map((p,i)=>`<tr><td>${i+1}</td><td>${escapeHTML(p.name)}</td><td>${escapeHTML(p.designation||"Designation not specified")}</td></tr>`).join(""):`<tr><td colspan="3">${task.no===12?"All DDU-GKY Staff (not individually named)":"No individually named members listed."}</td></tr>`;
 let modal=document.getElementById("dutyTeamModal");
 if(!modal){
  modal=document.createElement("div");modal.id="dutyTeamModal";modal.className="duty-team-modal";
  modal.innerHTML=`<div class="duty-team-backdrop"></div><section class="duty-team-dialog" role="dialog" aria-modal="true" aria-labelledby="dutyTeamTitle"><header><h3 id="dutyTeamTitle"></h3><button type="button" class="duty-team-close" aria-label="Close">×</button></header><div class="duty-team-table-wrap"><table><thead><tr><th>Sl.</th><th>Name</th><th>Designation</th></tr></thead><tbody id="dutyTeamRows"></tbody></table></div></section>`;
  document.body.append(modal);
  modal.querySelector(".duty-team-close").addEventListener("click",()=>modal.classList.remove("open"));
  modal.querySelector(".duty-team-backdrop").addEventListener("click",()=>modal.classList.remove("open"));
  document.addEventListener("keydown",e=>{if(e.key==="Escape")modal.classList.remove("open")});
 }
 modal.querySelector("#dutyTeamTitle").textContent=task.name+" – Team Members";
 modal.querySelector("#dutyTeamRows").innerHTML=rows; modal.classList.add("open");
}
document.getElementById("dutyVisualGrid")?.addEventListener("click",event=>{
 const button=event.target.closest(".duty-visual-members"); if(button)showDutyTeam(button.dataset.task);
});

document.querySelectorAll(".activity-details .language-option").forEach(button=>button.addEventListener("click",()=>{
 activityLanguage=button.dataset.language;
 document.querySelectorAll(".activity-details .language-option").forEach(option=>{const active=option===button;option.classList.toggle("active",active);option.setAttribute("aria-pressed",String(active));});
 renderActivities();
}));
const activityDetails=document.querySelector(".activity-details");
const activityExpandLabel=activityDetails?.querySelector(".toggle-label");
if(activityDetails&&activityExpandLabel){
 activityDetails.addEventListener("toggle",()=>{activityExpandLabel.textContent=activityDetails.open?"Collapse":"Expand";});
 activityDetails.querySelectorAll(".language-option").forEach(button=>button.addEventListener("click",event=>event.stopPropagation()));
}
const dutyDetails=document.getElementById("dutyDetails");
const expandLabel=document.querySelector(".details-toggle .toggle-label");
if(dutyDetails&&expandLabel)dutyDetails.addEventListener("toggle",()=>{expandLabel.textContent=dutyDetails.open?"Collapse":"Expand";});
document.querySelectorAll("th[data-sort]").forEach(th=>th.addEventListener("click",()=>{
 const key=th.dataset.sort;
 if(staffSort.key===key)staffSort.direction*=-1;else{staffSort.key=key;staffSort.direction=1;}
 renderPeople();
}));
document.querySelectorAll(".overview-language-option").forEach(button=>button.addEventListener("click",()=>{
 overviewLanguage=button.dataset.overviewLanguage;
 document.querySelectorAll(".overview-language-option").forEach(option=>{const active=option===button;option.classList.toggle("active",active);option.setAttribute("aria-pressed",String(active));});
 renderDutyVisuals();
}));
renderPeople();renderActivities();renderDutyVisuals();

document.getElementById("activitySearch").addEventListener("input",e=>{
 const q=e.target.value.toLowerCase();
 document.querySelectorAll("#activitiesBody tr").forEach(row=>row.hidden=!row.textContent.toLowerCase().includes(q));
});
