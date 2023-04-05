let UserName = prompt ("what's your name?") ;
let UserSurname = prompt ("and your Surname?") ;
let UserAge = prompt ("your age?") ;
let UserColor = prompt ("What's your favourite colour?") ;

let CurrentYear = 2023 ;
let psw = UserName + UserSurname + UserAge + UserColor + CurrentYear ;

let pasword = document.createElement ("h1") ;

document.body.innerHTML = psw ;