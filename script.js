const button = document.getElementById('submit');
const form = document.querySelector('.form');
let qr = document.getElementById('img');
let qrText = document.getElementById('qrtext');
let width = document.getElementById('width');
let height = document.getElementById('height');
let qrTitle = document.getElementById('title');
let codeTitle = document.getElementById('qrt');
let copyRtyDate = document.getElementById('date');


const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const today = new Date().getFullYear();
const todayMon = new Date().getMonth();

let month = months[todayMon]
copyRtyDate.innerText = `${month} ${today}`;


button.addEventListener('click', doAll);

function clearNecessary() {
    qrText.value = "";
    qrTitle.value = "";
    width.value = "100";
    height.value = "100";
}


function doAll(){

    if(qrText.value != ""){
        if(height.value == '300' | height.value == '400') {

            qr.src = `https://chart.googleapis.com/chart?cht=qr&chs=${width.value}x${height.value}&chl=${qrText.value}`;

            form.style.height = "65%";

            codeTitle.innerText = qrTitle.value;
        } else{
            qr.src = `https://chart.googleapis.com/chart?cht=qr&chs=${width.value}x${height.value}&chl=${qrText.value}`;

            form.style.height = "100%";

            codeTitle.innerText = qrTitle.value;
        }
    } else{
        console.log('Nothing to encrypt');
    }


    clearNecessary();
}

