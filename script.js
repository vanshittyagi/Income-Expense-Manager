let balanceamount = document.getElementById('balance');
let Amountadd = document.getElementById('amountinput');
let textinput = document.getElementById('textinput');
let submitbtn = document.getElementById('submitbtn');
let incomeplus = document.getElementById('incomeplus');
let expenseminus = document.getElementById('expenseminus')
let historylist = document.querySelector('.history ul');
let amount;
let totalexpense = 0;
let totalincome = 0;

submitbtn.addEventListener('click', (event) => {
    event.preventDefault();
    amount = +Amountadd.value;


    if (Amountadd.value == 0 || Amountadd.value == "") {
        alert("Enter a valid amount")
    }
    else if (textinput.value == "" || textinput.value == " ") {
        alert("Enter a valid text")
    }
    else if (textinput.value.toLowerCase() == "income") {
        let currentbalance = +balanceamount.innerText.replace('$', '')
        let updatedbalance = currentbalance + amount;
        balanceamount.textContent = `$${updatedbalance}`;
        totalincome += amount;
        incomeplus.textContent = `$${totalincome}`;
        let newhistory = document.createElement('li');
        newhistory.innerHTML = ` <button class="cuthistory">X</button>
        <span class="text">${textinput.value}</span>
        <span class="green">$${amount}</span>`
        historylist.appendChild(newhistory);

        let removehistory = newhistory.querySelector('.cuthistory');
        removehistory.addEventListener('click', ()=>{
            let value = +newhistory.querySelector('.green').innerText.replace('$', '');
            balanceamount.textContent = `$${(+balanceamount.innerText.replace('$', '') - value)}`;
            totalincome -= value;
            incomeplus.innerText = `$${totalincome}`;
            incomeplus.innerText = `$${totalincome}`;
            newhistory.remove();
        })

        Amountadd.value = '';
        textinput.value = '';
    }
    else {
        let currentbalance = +balanceamount.innerText.replace('$', '');
        let updatedbalance = currentbalance - amount;
        balanceamount.textContent = `$${updatedbalance}`;
        totalexpense += amount;
        expenseminus.innerText = `$${totalexpense}`;
        let newhistory = document.createElement('li');
        newhistory.innerHTML = ` <button class="cuthistory">X</button>
        <span class="text" >${textinput.value}</span>
        <span class="red" >$${amount}</span>`
        historylist.appendChild(newhistory);
        let removehistory = newhistory.querySelector('.cuthistory');
        removehistory.addEventListener('click', ()=>{
            let value = +newhistory.querySelector('.red').innerText.replace('$', '');
            balanceamount.textContent = `$${(+balanceamount.innerText.replace('$', '') + value)}`;
            totalexpense -= value;
            expenseminus.innerText = `$${totalexpense}`;
            newhistory.remove();
        })
        Amountadd.value = '';
        textinput.value = '';


    }
})
