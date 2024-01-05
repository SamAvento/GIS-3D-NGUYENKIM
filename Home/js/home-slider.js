let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");
let btn4 = document.querySelector("#btn-4");
let title = document.querySelector(".title");
let para = document.querySelector(".para");

btn1.addEventListener('click',() =>{
   document.getElementById("slider").style.backgroundImage = "url('./img/imgSlider/1.webp')"
    title.innerText = 'Đà Lạt'
    para.innerText = 'Thành phố mộng mơ'
});

btn2.addEventListener('click',() =>{
   document.getElementById("slider").style.backgroundImage = "url('./img/imgSlider/2.webp')"
    title.innerText = 'Hội An'
    para.innerText = 'Phố cổ lâu đời'
});

btn3.addEventListener('click',() =>{
   document.getElementById("slider").style.backgroundImage = "url('./img/imgSlider/3.webp')"
    title.innerText = 'Vũng Tàu'
    para.innerText = 'Thành phố biển'
});

btn4.addEventListener('click',() =>{
   document.getElementById("slider").style.backgroundImage = "url('./img/imgSlider/4.webp')"
    title.innerText = 'Phú Quốc'
    para.innerText = 'Thành phố biển'
});

