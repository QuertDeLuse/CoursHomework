document.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let info = document.querySelector('.info-header'),
        tabs = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');
        
    function hideTabContent(tabIndex) {
        for(let i = tabIndex; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(tabIndex) {
        if(tabContent[tabIndex].classList.contains('hide')) {
            tabContent[tabIndex].classList.remove('hide');
            tabContent[tabIndex].classList.add('show');
        }
    }

    info.addEventListener('click', (e) => {
        let target = e.target;

        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tabs.length; i++) {
                if(tabs[i] == target) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // timer

    let deadline = '2018-09-01';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/1000/60/60));

        if (t <= 0) {
            return {
                'total': 0,
                'hours': 0,
                'minutes': 0,
                'seconds': 0
            };
        }
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);

            hours.textContent = addZero(t.hours);           
            minutes.textContent = addZero(t.minutes);        
            seconds.textContent = addZero(t.seconds);        
        

            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    function addZero(time) {
        if (time < 10) {
            return '0' + time;
        } 
        return time;
    }

    setClock('timer', deadline);



    // modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


    // tabs popup

    let descriptionBtn = document.querySelectorAll('.description-btn');

    descriptionBtn.forEach((item) => {
        item.addEventListener('click',() => {
            overlay.style.display = 'block';
            item.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });


    // Второе задание

    // let age = document.getElementById('age');    
    // function showUser(surname, name) {
    //          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    // }    
    // showUser.apply(age, ["Горький","Максим"]);


    class Option {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize + 'px';
            this.textAlign = textAlign;
        }

        createDiv(whereToInsert) {
            let div = document.createElement('div');

            let mainBlockDescr = document.querySelector('.'+whereToInsert);
            mainBlockDescr.appendChild(div);
            
            // document.body.appendChild(div);

            let param = `height:${this.height}px; 
                        width:${this.width}px; 
                        background-color:${this.bg}; 
                        font-size:${this.fontSize}px; 
                        text-align:${this.textAlign}`;
            div.style.cssText = param;    
        }
    }

    let obj = new Option(100,100,'red',32,'center');
    obj.createDiv('main-block-descr');


    
 });