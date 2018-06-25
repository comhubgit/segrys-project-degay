
let budgetInput = document.getElementById('budget-input');
let button = document.getElementById('budget-btn');
let dayInput = document.getElementById('day-input');
let i;
button.addEventListener('click', function() {
let budget = budgetInput.value;
let dayz = dayInput.value;
dayz = +dayz;
if (isNaN(budget)) {
alert('В поле бюджета введено не число!')
}
if (isNaN(dayz)) {
alert('В поле дней введено не число!')
}
dayzBudget = Math.floor(budget / dayz);
for (i = 1; i < dayz + 1; i++) {

let div = document.createElement('div');
div.className = "day";
div.innerHTML = "День № " + i + " бюджет - " + dayzBudget;
document.body.appendChild(div);
}

});
