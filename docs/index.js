var selectedTip = document.querySelectorAll('.tipOption');
var tipOptionEdit = document.querySelector('.tipOptionEdit');
var peopleNumber = document.getElementById('peopleNumber');
var billAmmount = document.getElementsByClassName('billAmmount')[0];
var activeItem = document.getElementsByClassName('active');
var personTip = document.getElementById('personTip');
var totalBill = document.getElementById('total');
var reset = document.getElementById('reset');

selectedTip.forEach((item) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < selectedTip.length; i++) {
            selectedTip[i].classList.remove('active');
        }
        tipOptionEdit.classList.remove('active');
        item.classList.add('active');
        calculateBill();
    });
});

function calculateBill() {
    var tipPercentage;
    if (activeItem.length !== 0) {
        if (activeItem[0].classList.contains('tipOption')) {
            tipPercentage = activeItem[0].getAttribute('value');
        } else if (activeItem[0].classList.contains('tipOptionEdit')) {
            tipPercentage = activeItem[0].value;
        }
    } else {
        tipPercentage = 0;
    }
    var tip = (billAmmount.value * (tipPercentage / 100)) / peopleNumber.value;
    var total = billAmmount.value / peopleNumber.value;
    if (billAmmount.value == 0) {
        personTip.innerText = '$ ' + 0;
        totalBill.innerText = '$ ' + 0;
    } else {
        personTip.innerText = '$ ' + tip.toFixed(2);
        totalBill.innerText = '$ ' + total.toFixed(2);
    }
}

billAmmount.oninput = () => {
    calculateBill();
}

peopleNumber.oninput = () => {
    if (peopleNumber.value <= 0) {
        peopleNumber.value = 1;
    }
    calculateBill();
}

tipOptionEdit.onclick = () => {
    selectedTip.forEach((item) => {
        item.classList.remove('active');
    });
    tipOptionEdit.classList.add('active');
};

tipOptionEdit.oninput = () => {
    calculateBill();
};

reset.onclick = () => {
    billAmmount.value = 0;
    peopleNumber.value = 1;
    personTip.innerText = '$ ' + 0;
    totalBill.innerText = '$ ' + 0;
    selectedTip.forEach((item) => {
        for (let i = 0; i < selectedTip.length; i++) {
            item.classList.remove('active');
        }
        tipOptionEdit.classList.remove('active');
        tipOptionEdit.value = "";
    });
};