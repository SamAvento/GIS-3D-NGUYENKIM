let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");
let btn4 = document.querySelector("#btn-4");
let btn5 = document.querySelector("#btn-5");
let title = document.querySelector(".title");
let para = document.querySelector(".para");

btn1.addEventListener('click',() =>{
   document.getElementById("slider").style.backgroundImage = "url('../images/1.jpg')"
    title.innerText = 'Đà Lạt'
    para.innerText = 'Thành phố mộng'
});

btn2.addEventListener('click',() =>{
   document.getElementById("slider").style.backgroundImage = "url('../images/2.webhp')"
    title.innerText = 'Hội An'
    para.innerText = 'Phố cổ lâu đời'
});

btn3.addEventListener('click',() =>{
   document.getElementById("slider").style.backgroundImage = "url('../images/3.webhp')"
    title.innerText = 'Vũng Tàu'
    para.innerText = 'Thành phố biển'
});

btn4.addEventListener('click',() =>{
   document.getElementById("slider").style.backgroundImage = "url('../img/4.webhp')"
    title.innerText = 'Phú Quốc'
    para.innerText = 'Thành phố biển'
});

btn5.addEventListener('click',() =>{
   document.getElementById("slider").style.backgroundImage = "url('../img/5.jpeg')"
    title.innerText = 'Sapa'
    para.innerText = 'Thành phố trên cao'
});

