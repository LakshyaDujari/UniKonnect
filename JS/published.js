// Overlay referencess
const option_pane = document.querySelector(".option_pane");
const right_sidebar = document.querySelector(".right_sidebar");
const search_bar = document.querySelector(".row1");

//HTML Element references
const nav_tab = document.querySelectorAll(".tab");

// Button Declaration
const collapse_btn = document.getElementById("collapse_btn");

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