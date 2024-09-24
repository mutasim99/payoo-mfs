document.getElementById('btn-show-cash-out')
    .addEventListener('click', function () {
        document.getElementById('cash-out-form').classList.remove('hidden');
        document.getElementById('add-money-form').classList.add('hidden');
        document.getElementById('history-container').classList.add('hidden');
        document.getElementById('btn-show-cash-out').classList.add('bg-gradient-to-r',
            'from-cyan-500',
            'to-blue-500',
            'text-gray-600');
        document.getElementById('btn-show-add-money').classList.remove('bg-gradient-to-r',
            'from-cyan-500',
            'to-blue-500', 'text-gray-600');
        document.getElementById('btn-show-history').classList.remove('bg-gradient-to-r',
            'from-cyan-500',
            'to-blue-500',
            'text-gray-600');
    })


document.getElementById('btn-show-add-money')
    .addEventListener('click', function () {
        document.getElementById('cash-out-form').classList.add('hidden');
        document.getElementById('add-money-form').classList.remove('hidden');
        document.getElementById('history-container').classList.add('hidden');
        document.getElementById('btn-show-cash-out').classList.remove('bg-gradient-to-r',
            'from-cyan-500',
            'to-blue-500',
            'text-gray-600');
        document.getElementById('btn-show-add-money').classList.add('bg-gradient-to-r',
            'from-cyan-500',
            'to-blue-500',
            'text-gray-600')
        document.getElementById('btn-show-history').classList.remove('bg-gradient-to-r',
            'from-cyan-500',
            'to-blue-500',
            'text-gray-600');
    })
document.getElementById('btn-show-history')
    .addEventListener('click', function () {
        document.getElementById('cash-out-form').classList.add('hidden');
        document.getElementById('add-money-form').classList.add('hidden');
        document.getElementById('history-container').classList.remove('hidden');
        document.getElementById('history-section').classList.remove('hidden')
        document.getElementById('btn-show-history').classList.add('bg-gradient-to-r',
            'from-cyan-500',
            'to-blue-500',
            'text-gray-600');
        document.getElementById('btn-show-cash-out').classList.remove('bg-gradient-to-r',
            'from-cyan-500',
            'to-blue-500',
            'text-gray-600');
        document.getElementById('btn-show-add-money').classList.remove('bg-gradient-to-r',
            'from-cyan-500',
            'to-blue-500', 'text-gray-600');
    })    