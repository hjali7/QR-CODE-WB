let qr = document.getElementById("qrcode")
let button = document.getElementById("button")

function onGenerateQrcode (e) {

    e.preventDefault()

    clearQr()

    let url = document.getElementById("url").value
    let size = document.getElementById("size").value

    if(url == "") {
        alert("please input your url")
        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }else {
        showSpinner()

        setTimeout(() => {
            hideSpinner()
            GenerateQRcode( url  , size )

            setTimeout(() => {
                let saveImage = qr.querySelector("img").src

                saveButton (saveImage)
            }, 300);
            
        }, 1000);
    }
}

function saveButton (saveImage) {
    let aTag = document.createElement("a")
    aTag.href = saveImage
    aTag.download = "qrcodejs"
    aTag.id = "saveLink"
    aTag.innerHTML = "save your QrCode"
    aTag.classList = "bg-black  shadow-lg m-auto rounded-2xl text-white font-bold w-1/3 mt-4 py-2 px-4"
    document.getElementById("generated").append(aTag)
}

function GenerateQRcode ( url , size ) {
    let qrcode = new QRCode( qr , {
        text : url , 
        width : size , 
        height : size , 
    })
}

function clearQr () {
    qr.innerHTML  = ""

    saveBtn = document.getElementById("saveLink")
    if(saveBtn) {
        saveBtn.remove()
    }
}

function hideSpinner () {
    document.getElementById("spinner").style.display = "none"
}

function showSpinner () {
    document.getElementById("spinner").style.display = "block"
}

button.addEventListener("click" , onGenerateQrcode)