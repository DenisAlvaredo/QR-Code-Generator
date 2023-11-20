function displayQr() {
    const qr = document.getElementById('qrdisplay');
    qr.style.display = 'flex';

    const input = document.getElementById('container-input');
    input.style.display = 'none';
}

function moveLogo() {
    const logo = document.getElementById('logo');
    logo.style.position = 'fixed';
    logo.style.width = '130px';
    logo.style.left = '7%';
    logo.style.top = '5%';
}

function getQrCode() {
    const urlInput = document.getElementById('url');

        if (urlInput.value.trim() === '') {
            alert('Please enter a URL');
            return;
        }

        if (urlInput.value.length > 976) {
            alert('URL length exceeds the maximum limit (976 characters)');
        }

        const isUrlValid = urlInput.checkValidity();

        if (isUrlValid) {
            const qrcode = new QRCode(document.getElementById("qrcode"), {
                text: urlInput.value,
                width: 128,
                height: 128
            });
            displayQr();
            moveLogo(); 
        } else {
            alert('Please enter a correct URL');
        }
}

function downloadQr() {
    const imageBase64 = document.getElementById("qrcode").getElementsByTagName("img")[0].src;

    const link = document.createElement('a');
    link.href = imageBase64;

    link.download = 'QRcode.png';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

function copyToClipboard() {
    const textToCopy = document.getElementById('url').value;

    const inputTemp = document.createElement('textarea');
    inputTemp.value = textToCopy;

    document.body.appendChild(inputTemp);

    inputTemp.select();
    document.execCommand('copy');

    document.body.removeChild(inputTemp);

    alert('¡Text copied to clipboard!');
}