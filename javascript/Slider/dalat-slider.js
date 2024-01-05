let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");
let btn4 = document.querySelector("#btn-4");

btn1.addEventListener('click',() =>{
    document.getElementById("slider").style.backgroundImage = " url(/images/DaLat1.jpg)"
});

btn2.addEventListener('click',() =>{
    document.getElementById("slider").style.backgroundImage = " url(/images/DaLat2.jpg)"
});

btn3.addEventListener('click',() =>{
    document.getElementById("slider").style.backgroundImage = " url(/images/DaLat3.jpg)"
});

btn4.addEventListener('click',() =>{
    document.getElementById("slider").style.backgroundImage = " url(/images/DaLat4.jpg)"
});

