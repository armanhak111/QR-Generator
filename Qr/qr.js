let qrCode = document.querySelector("img");
let qrText = document.querySelector("textarea");
let qrButton = document.querySelector("button");
let loader = document.querySelector("#loader")

qrButton.addEventListener("click",generateQR)

async function generateQR(){
    let size = "1000x1000"
    let data = qrText.value;
    let apiUrl = "http://api.qrserver.com/v1/create-qr-code/";
    let url = `${apiUrl}?data=${data}&size=${size}`
    loader.style.display = "block";
    setTimeout(()=>{loader.style.display = "none", qrCode.src = url },4200)      
}