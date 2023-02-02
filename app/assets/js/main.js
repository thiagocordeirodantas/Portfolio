var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};
window.sr = ScrollReveal({reset:true})
ScrollReveal().reveal('.headline',slideUp);
sr.reveal('.titulo-sobre',{ duration : 5000});
sr.reveal('.texto-sobre', {
    duration: 5000
});
sr.reveal('.imagem-sobre', {
    duration: 5000
})
sr.reveal('.imagem-sobre', {
    duration: 5000
})

sr.reveal('.botaoo ', {
    duration: 10000
})



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


function curriculo(){
    document.querySelector('.botao-curriculo').addEventListener('click', function BaixarCurriculo() {
       return window.location.href = 'https://drive.google.com/file/d/1yU7XIqPHZF09dPc4mNtG_aS8GIZ4Gwmu/view?usp=sharing'
    }
)}
   
       
botaoLinkedin();
botaoGitHub();
email();
curriculo();