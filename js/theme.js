(function(){
 const saved=localStorage.getItem("saras-theme")||"light";
 document.body.dataset.theme=saved;
 const btn=document.getElementById("themeToggle");
 if(btn)btn.addEventListener("click",()=>{
  const next=document.body.dataset.theme==="dark"?"light":"dark";
  document.body.dataset.theme=next;localStorage.setItem("saras-theme",next);
  btn.querySelector("span").textContent=next==="dark"?"Light theme":"Dark theme";
 });
})();
