ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.sobre');

function botaoLinkedin() {
    document.querySelector('.botao-1').addEventListener('click',function botaoGIT(){
        return  window.location.href = 'https://www.linkedin.com/in/thiagocordeirodantas/'
    })
}



 function botaoGitHub() {
    document.querySelector('.botao-2').addEventListener('click',function botaoGIT(){
        return  window.location.href = 'https://github.com/Melieny'
    })
}


function BaixarCurriculo(){
    
}

function email (){
    document.querySelector('.botao-email').addEventListener('click',function Emaiel(){
        return  window.location.href = 'https://mail.google.com/mail/u/0/#sent?compose=CllgCJqSvnbrGWVLDnnMtbHnCkSJhKjzZhtkrNtKRHmmvndklvtwScZtqRQvQmJdFwshpdxGCqB'
})}
   
       
botaoLinkedin();
botaoGitHub();
email();