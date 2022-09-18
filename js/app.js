let menu = document.querySelector(".menu");
let sidebar = document.getElementById("sidebar");
let cl = document.getElementById("close");
let interactive = document.getElementById("first");

menu.addEventListener('click', function(){
    if(!(sidebar.classList.contains("active"))){
      sidebar.classList.add('active');
       }
})

cl.onclick = function (){
    if(sidebar.classList.contains("active")){
        sidebar.classList.remove('active');
         }
}


