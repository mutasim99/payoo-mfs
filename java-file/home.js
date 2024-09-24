document.getElementById('add-money-btn')
    .addEventListener('click' , function(event){
        event.preventDefault();
        const inputAmount = document.getElementById('input-amount').value;
        const inputPin = document.getElementById('input-pin').value;
        if (isNaN(inputAmount)) {
            alert('Please input a valid number');
            return;
        }

        if (inputPin === '1234') {
            const balance = document.getElementById('balance').innerText;
            const amountMoney = parseFloat(inputAmount);
            const balanceMoney = parseFloat(balance);
            const newBalance = amountMoney + balanceMoney;
            document.getElementById('balance').innerText = newBalance
            const div = document.createElement('div');
            div.className = "bg-white rounded-md p-3 border-l-2 border-indigo-500 mt-2"
            div.innerHTML = `
                <p class="text-gray-500 text-xs">${new Date().toLocaleString()}</p>
                <p class="text-gray-500 text-xs">Add money:${amountMoney} tk. New balance:${newBalance}</P>
            `
            document.getElementById('history-container').appendChild(div);
            
        }
        else{
            alert('pin you provide is not correct');
        }
    })