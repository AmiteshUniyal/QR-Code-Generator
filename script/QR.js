        const inpt =  document.getElementById("inpt");
        const Image =  document.getElementById("Image");
        
        function getqr() {
            Image.src =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` + inpt.value;
        }