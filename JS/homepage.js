// Overlay referencess
const login_req = document.querySelector(".login_req");
const sign_req = document.querySelector(".sign_req");
const option_pane = document.querySelector(".option_pane");
const right_sidebar = document.querySelector(".right_sidebar");
const search_bar = document.querySelector(".row1");
const login_error = document.querySelector(".error");
const login_msg = document.querySelector(".message");

//HTML Element references
const nav_tab = document.querySelectorAll(".tab");

// Button Declaration
const login_btn = document.getElementById("lbtn");
const sign_btn = document.getElementById("sbtn");
const collapse_btn = document.getElementById("collapse_btn");
const svg = document.getElementById('Triangles')

//Login Button Click Handel
login_btn.addEventListener('click',() =>{
    sign_req.classList.remove('open');
    login_req.classList.add('open');
    search_bar.classList.add("pop");
});
//login modal close handel
login_req.addEventListener('click',(e) =>{
    if(e.target.classList.contains('login_req')){
        login_req.classList.remove('open');
        search_bar.classList.remove("pop");
    }
});

if( login_error != null ){
    sign_req.classList.remove('open');
    login_req.classList.add('open');
    search_bar.classList.add("pop");
}
if( login_msg !=null ){
    sign_req.classList.remove('open');
    login_req.classList.add('open');
    search_bar.classList.add("pop");
}

//Sign in Button Handel
sign_btn.addEventListener('click',() =>{
    login_req.classList.remove('open');
    sign_req.classList.add('open');
    search_bar.classList.add("pop");
});
//Signin modal close handel
sign_req.addEventListener('click',(e) =>{
   if(e.target.classList.contains('sign_req')){
       sign_req.classList.remove('open');
       search_bar.classList.remove("pop");
   }
});

//collapse Button handel
collapse_btn.addEventListener('click',() =>{
    if(option_pane.classList.contains('close')){
        option_pane.classList.remove('close');
        if(right_sidebar.classList.contains('open')){
            right_sidebar.classList.remove('open');
        } else {
            right_sidebar.classList.remove('open');
        }
    } else {
        option_pane.classList.add('close');
        if(!right_sidebar.classList.contains('open')){
            right_sidebar.classList.add('open');
        }
    }
});

//Tab navigation Handel
nav_tab.forEach(element =>{
   element.addEventListener('click',(e) =>{
       console.log(e.target.outerText);
       var subchildH2Text = e.target.outerText;
       switch(subchildH2Text){
           case 'Home':
               window.location.href = "Homepage.php";
               break;
           case 'Published Events':
               window.location.href = "Published.html";
               break;
            case 'Projects':
               window.location.href = "Published.html";
               break;
           case 'Blogs':
               window.location.href = "blog.html";
               break;
            case 'Settings':
               break;
           case 'Policies':
               break;
            case 'About Us':
               break;
       }
   });
});