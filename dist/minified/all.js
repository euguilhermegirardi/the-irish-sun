const icon=document.querySelectorAll(".navbar__li"),dropdown=document.querySelectorAll(".dropdown");icon.forEach(e=>{e.addEventListener("click",o=>{o.preventDefault(),dropdown.forEach(e=>{e.classList.remove("opened")});let s=document.getElementById(e.dataset.targetId);s.classList.toggle("opened"),s===classList.includes("opened")&&console.log("wasda")})});const sliders=document.querySelectorAll(".most-read__slider");function slider(){tns({controls:!1,container:".slider",slideBy:"page",items:6,mouseDrag:!0,swipeAngle:!1,speed:400,preventScrollOnTouch:"force",gutter:30,autoWidth:!0})}sliders.forEach(e=>{tns({controls:!1,container:e,slideBy:"page",items:2,mouseDrag:!0,swipeAngle:!1,speed:300,preventScrollOnTouch:"force",responsive:{500:{controls:!0,controlsText:["<",">"]}}})}),slider();