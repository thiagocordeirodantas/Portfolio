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
       return window.location.href = 'https://doc-00-18-docs.googleusercontent.com/docs/securesc/ndv8enqq2rhgf1h8l64nbm5g64btiml3/le465nsae41dqtj3a82ts7i2rftfsq3h/1675371525000/00795112751166814111/00795112751166814111/1yU7XIqPHZF09dPc4mNtG_aS8GIZ4Gwmu?e=download&ax=AB85Z1A37XhQdyfqDGtjzBBLX_Emefw01RSk5OBOOATruS8ZsjHGuJo8-sh9mDifrTFm3bT6I3qt4zKE1fCnfZlJD1jpbLsylh4DwfloWzBtrunRXREA7UvHtn1fkd5sz6jx4m915Ol_hb7bgQ8gMFLxTAHLaJYWi9kyC5L2cA4NZJ3nJ_LPLI9LrDtJQ7qTZIAOzmVwGk2QZ4QURSSY3YJw5GMowRxLCbPqtghlmNQIHbIq7fmMF-9PeZMDCm95Ozh49DXpBdjKi6zzaWbcPyvDTb30EVurHn6g5iM47eR1OFb2gizhbASkmdZpiDCaffQBAifKe8qYeO9V-YJGl5w99YPfqeUed9Knt-xhtIMPGCxFGqgMT5x9HGQYBUi0r0KNZbqWGNNXKG5EAXN_CaK4ol5N2zoXN49_a4kbA7HHLFrZTC2sI9lipygWyqdw4bsf4mN4cDI0PgjS65u622rFGXgnYBEVLVR39Cx3oXvDog6M0k9bpI-93bQbG_U75Zfi3n4wl9dKPaxByEvw-p23YbBc1XEJbDIB-Y5-z1Vk63GJuKXXGnRPzFQrXGlXJY3jaVvUvZrp-GlZZZU3OPY2VDZb8b59EpgSmsT08sWC-81wWMgaZY-THN2ZndVSDRWIft6iiodXwPM4h1zssW5XJVbOmgU4pASUESJCLwFBW-DJC_hbr4IMFJ-8edR80YTkJFKt6i-B-CfLJj3Zrtd9w1H4yYnERyYFhM50wS9fyFSqp7KiPVzMvo3IKugT9jl9X0ctsN_WfTKq6F2luFt4mE_EziLo3GSBVp4gbGPSJZntAX66PYD1sj98eLnD7y0yglEv7jd5yRwDrXnYU1l-vaj99RWJnfs2SFyD3BenrzEi0Biy8pZg6yLiBqP_j7lQmpfEduQgf6p9rKeLRvhjeYlBr3oKbWttMhw&uuid=92adef7a-961b-4be8-a6f0-5da6cc42e0f2&authuser=0&nonce=lqmf5uq5nnlcc&user=00795112751166814111&hash=h9q5rdu2c45v8t4d8t08kpc3383nqqt0'
    }
)}
   
       
botaoLinkedin();
botaoGitHub();
email();
curriculo();