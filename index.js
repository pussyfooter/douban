const qrCode = document.querySelector('.qr_code');
const getCode = document.querySelector('.get-code');
getCode.addEventListener('mouseenter', function(){
    qrCode.style.display = 'block';
    qrCode.style.zIndex = 1;
})

getCode.addEventListener('mouseleave', function(){
    qrCode.style.display = 'none';
})

qrCode.addEventListener('mouseenter', function(){
    qrCode.style.display = 'block';
    qrCode.style.zIndex = 1;
})
qrCode.addEventListener('mouseleave', function(){
    qrCode.style.display = 'none';
})