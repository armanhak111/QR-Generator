let qrCode = document.querySelector("img");
let qrText = document.querySelector("textarea");
let qrButton = document.querySelector("button");

qrButton.addEventListener("click",generateQR)

function generateQR(){
    let size = "1000x1000"
    let data = qrText.value;
    let apiUrl = "http://api.qrserver.com/v1/create-qr-code/"
    let url = `${apiUrl}?data=${data}&size=${size}`
    qrCode.src = url    
}