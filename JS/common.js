let budgetInput = document.getElementById('budget-input');
let button = document.getElementById('budget-btn');
let dayInput = document.getElementById('day-input');
let i;

button.addEventListener('click', button_click);

function button_click(){
    let budget = budgetInput.value;
    let days = dayInput.value;

    days = +days;
    if (isNaN(budget)) {
        alert('В поле бюджета введено не число!')
    }
    if (isNaN(days)) {
        alert('В поле дней введено не число!')
    }
    daysBudget = Math.floor(budget / days);
    document.getElementById('days').removeChild;
    addDays(days, daysBudget);

    let input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('id', 'budget-spent');
        input.className = "budget-input";
        input.innerHTML = "Введите потраченый бюджет";
    document.getElementById("days").after(input);

    let button_spent = document.createElement('button');
        button_spent.setAttribute('id', 'button-spent');
        button_spent.className = "btn";
        button_spent.innerHTML = "Рассчитать";
        button_spent.addEventListener('click', button_spent_click);
    document.getElementById("budget-spent").after(button_spent);
}

function button_spent_click(){
    let value = document.getElementById("budget-spent").value;
    let days = dayInput.value;
    let daysBudget = 0;
    for (var i = 0; i < document.getElementById('days').children.length; i++) {
        if((document.getElementById('days').children[i].getAttribute('value') - value) > 0){
            daysBudget = document.getElementById('days').children[i].getAttribute('value') - value;
        }

        let div = document.createElement('div');
        div.className = "day";
        div.setAttribute('value', daysBudget);
        div.innerHTML = "День № " + (i+1) + " бюджет - " + daysBudget;
        // console.log(document.getElementById("days").children[i]);
        // console.log(div);
        if((value - document.getElementById('days').children[i].getAttribute('value')) < 0){
            value = 0;
        }else{
            value = value - document.getElementById('days').children[i].getAttribute('value');
        }
        document.getElementById("days").children[i].replaceWith(div);
    }
}

function addDays(days, daysBudget){
    if(document.getElementById("days").children.length > 0){
        var myNode = document.getElementById("days");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        document.getElementById("budget-spent").remove();
        document.getElementById("button-spent").remove();
    }

    for (i = 1; i < days + 1; i++) {
        let div = document.createElement('div');
        div.className = "day";
        div.setAttribute('value', daysBudget);
        div.innerHTML = "День № " + i + " бюджет - " + daysBudget;
        document.getElementById("days").appendChild(div);
    }
}
