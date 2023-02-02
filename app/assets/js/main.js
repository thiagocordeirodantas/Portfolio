
window.sr = ScrollReveal({reset:true})

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

sr.reveal('.projeto-titulo', {
    duration: 5000
})

sr.reveal('.card',{
    duration: 5000
})

sr.reveal('.texto-apresentacao', {
    duration: 5000
})


sr.reveal('.botao', {
    duration: 5000
})


sr.reveal('.iconezinho', {
    duration: 5000
})
sr.reveal('.iconezinho2', {
    duration: 5000
})




sr.reveal('.apresentacao-imagem', {
    duration: 5000
})

sr.reveal('.navegacao-item', {
    duration: 5000
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

function Projeto1(){
    document.querySelector('.botao-projeto1').addEventListener('click', function Projeto1() {
        return window.location.href = 'https://proj-html-css-3.vercel.app/'
     }
)}

function Projeto2(){
    document.querySelector('.botao-projeto2').addEventListener('click', function Projeto2() {
        return window.location.href = 'https://projetoapeperia.vercel.app/'
     }
)}
   

function Projeto3(){
    document.querySelector('.botao-projeto3').addEventListener('click', function Projeto3() {
        return window.location.href = 'https://reconhecimento.vercel.app/'
     }
)}
   
   
       
botaoLinkedin();
botaoGitHub();
email();
curriculo();
Projeto1();
Projeto2();
Projeto3();