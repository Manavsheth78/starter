'use strict';

const modal = document.querySelector('.modal');
const overlay =document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    
    
}


for (let i = 0; i < btnOpenModal.length; i++){
    // console.log(btnOpenModal[i].textContent);
    // btnOpenModal[i].addEventListener('click',function()
    // {
    //     console.log('button clicked');
    //     modal.classList.remove('hidden');
    //     overlay.classList.remove('hidden');
        
    btnOpenModal[i].addEventListener('click',openModal);
}

    // });


    const closeModal = function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }


    btnClosedModal.addEventListener('click',closeModal);   // here instead of function we add directly the name of the function

        // modal.classList.add('hidden');
        // overlay.classList.add('hidden');
          

    overlay.addEventListener('click',function(){
        // modal.classList.add('hidden');
        // overlay.classList.add('hidden');
        closeModal();
    });


document.addEventListener('keydown', function(e){

    // console.log('A key was pressed');
    console.log(e.key);
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
            closeModal();
    }
    // {
    //     if(!modal.classList.contains('hidden')){
    //         closeModal();
    //     }
        
    // } 
    


});