const $select = document.querySelector('#type');
const $etc1 = document.querySelector('#etc1');
const $etc2 = document.querySelector('#etc2');
const $divService = document.querySelector('#div-service');

const $confirmReserve = document.querySelector('#confirm-reserve');
const $step01 = document.querySelector('#step01');
const $step02 = document.querySelector('#step02');

$select.addEventListener('change', function (e) {
    if(e.target.value === 'jim-keep'){
        $etc1.classList.remove('hidden');
        $etc2.classList.add('hidden');

        $divService.classList.remove('h-20');
        $divService.classList.add('h-100');
    }
    else if(e.target.value === 'jim-move'){
        $etc1.classList.add('hidden');
        $etc2.classList.remove('hidden');

        $divService.classList.remove('h-20');
        $divService.classList.add('h-100');
    }
    else {
        $etc1.classList.add('hidden');
        $etc2.classList.add('hidden');

        $divService.classList.remove('h-100');
        $divService.classList.add('h-20');
    }
});

$confirmReserve.addEventListener('click', function (e) {
    $step01.classList.add('hidden');
    $step02.classList.remove('hidden');
});