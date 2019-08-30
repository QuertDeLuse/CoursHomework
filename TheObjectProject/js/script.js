"use strict";

let money, time;

function start() {
    while(isNaN(money) || money == "" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?","");
    }   
    time = prompt("Введите дату в формате YYYY-MM-DD","");    
}

// start();

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,

        chooseExpenses: function() {
            for(let i = 0; i < 2; i++) {
                let property = prompt("Введите обязательную статью расходов в этом месяце", ""),
                    value = +prompt("Во сколько обойдется?","");
            
                if(typeof(property) != null && typeof(value) != null && property != '' && value!= '' && property.length < 50 ) {
                    appData.expenses[property] = value;
                } else {
                    i--;
                }
            }
        },
        detectDayBudget: function() {
            appData.moneyPerDay = +(appData.budget/30).toFixed(2);
            alert("Ежедневный бюджет: " + appData.moneyPerDay);
        },
        detectLevel: function() {
            if (appData.moneyPerDay < 100) {
                console.log("Мин. ур. достатка");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log("Сред. ур. достатка");
            } else if (appData.moneyPerDay > 2000) {
                console.log("Выс. ур. достатка");
            } else {
                console.log("Error");
            }
        },
        chechSaving: function() {
            if(appData.savings == true) {
                let save, percent;
                while(isNaN(save) || save == "" || save == null) 
                    { save = +prompt("Какова сумма накоплений?",""); }
                while(isNaN(percent) || percent == "" || percent == null) 
                    { percent = +prompt("Под какой процент?",""); }
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
            }
        },
        chooseOptExpenses: function() {
            for(let i = 0; i < 3; i++) {
                let property = prompt("Введите необязательную статью расходов в этом месяце", ""),
                    value = +prompt("Во сколько обойдется?","");
            
                if(typeof(property) != null && typeof(value) != null && property != '' && value!= '' && property.length < 50 ) {
                    appData.optionalExpenses[property] = value;
                } else {
                    i--;
                }
            }
        },
        chooseIncome: function() {
            let items;
            do {
                items = prompt("Что принесет дополнительный доход? (перечислите через запятую)","");
            } while(typeof(items) != "string" || items == "" || items == null );            
            
            appData.income = items.split(",");
            appData.income.push(prompt("Может что-то еще?",""));
            appData.income.sort();

            console.log("Способы заработка");
            appData.income.forEach((value, index) => {
                console.log(index+1 + ": " + value);
            });
        }

    };



// appData.chooseExpenses();

// appData.detectDayBudget();

// appData.detectLevel();

// appData.chechSaving();

// appData.chooseOptExpenses();

// appData.chooseIncome();

console.log("Наша программа включает в себя данные: ");
for(let key in appData) {
    console.log(key);
}




