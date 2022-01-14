const act = document.getElementById('act');
const plus = document.querySelector('.plus');
act.addEventListener('click', (e)=> {

    console.log(e.target.checked)
    if(e.target.checked){
        plus.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
    }else{
        plus.style.clipPath = 'polygon(0 75%, 100% 75%, 100% 100%, 0% 100%)';

    }

})