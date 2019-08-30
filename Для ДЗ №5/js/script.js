let menu = document.getElementsByClassName('menu'),
    menuItems = document.getElementsByClassName('menu-item');    

menu[0].insertBefore(menuItems[2], menuItems[1]);

let li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu[0].appendChild(li);

document.body.style.backgroundImage = "url('../img/apple_true.jpg')";

let adv = document.getElementsByClassName('adv'),
    column = document.getElementsByClassName('column');
column[1].removeChild(adv[0]);

let title = document.getElementById('title');
title.textContent = "Мы продаем только подлинную технику Apple";


let promptDiv = document.getElementById('prompt'),
    text = prompt("Ваше отношение к технике Apple","");

// console.log(promptDiv);
promptDiv.textContent = text;


