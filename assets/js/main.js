let element = document.querySelector(".btn") ;
let div = document.querySelector(".border") ;

element.addEventListener("click", generatePasword,) ;


function generatePasword () {
    let UserName = prompt ("what's your name?") ;
    let UserSurname = prompt ("and your Surname?") ;
    let UserAge = prompt ("your age?") ;
    let UserColor = prompt ("What's your favourite colour?") ;
    let CurrentYear = new Date().getFullYear();
    let pswGen = UserName + UserSurname + UserAge + UserColor + CurrentYear ;
    let result = document.createElement ("h3") ;
    
    div.append(result);
    
    result.innerHTML = pswGen;
}
