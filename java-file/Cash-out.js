document.getElementById('cash-out-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const inputCashOut = document.getElementById('cash-out-input').value;
        const cashoutPin = document.getElementById('cash-out-pin').value;

        if (cashoutPin === '1234') {
            const currentBalance = document.getElementById('balance').innerText;
            const cashOutMoney = parseFloat(inputCashOut);
            const currentBalanceMoney = parseFloat(currentBalance);
            const totalBalance = currentBalanceMoney - cashOutMoney;
            document.getElementById('balance').innerText = totalBalance;
        }
        else{
            alert('pin you provide is  not correct');
        }
    })