let myBtns = document.querySelectorAll('.btn');
let inPutPage = document.querySelector('.screen');
let sumBtn = document.querySelector('.btn-equal');
let dltBtn = document.querySelector('.btn-clear');

for(let i = 0; i<myBtns.length; i++){
    myBtns[i].addEventListener('click', function(){ 
    let number = myBtns[i].getAttribute('data-num')
    inPutPage.value += number;
    })
}

sumBtn.addEventListener('click', function(){
    if(inPutPage.value === ''){
    alert('please type in a value');
    }
    else{ 
    let value = eval(inPutPage.value)
    inPutPage.value = value;
}
})

dltBtn.addEventListener('click', function(){
inPutPage.value = '';

});