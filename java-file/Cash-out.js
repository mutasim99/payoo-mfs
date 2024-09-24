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
            const div = document.createElement('div');
            div.className = "bg-white rounded-md p-3 border-l-2 border-indigo-500 mt-2"
            div.innerHTML = `
                <p class="text-gray-500 text-xs">${new Date().toLocaleString()}</p>
                <p class="text-gray-500 text-xs">Cash out money:${cashOutMoney} tk. New balance:${totalBalance}</P>
            `
            document.getElementById('history-container').appendChild(div);
        }
        else{
            alert('pin you provide is  not correct');
        }
    })