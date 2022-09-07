var choose = document.querySelectorAll('.login .switch_login span');
var messageLogin = document.querySelector('.login .message-login');
var passwordLogin = document.querySelector('.login .password-login');
var codeLogin = document.querySelector('.login .code_login');


// 短信登陆
choose[0].addEventListener('click', function(){
    choose[1].className = 'right';
    choose[0].className = 'left selected';
    messageLogin.className = 'message-login';
    passwordLogin.className = 'password-login hidden';
    codeLogin.className = 'code_login hidden';
})

//密码登录
choose[1].addEventListener('click', function(){
    choose[0].className = 'left';
    choose[1].className = 'right selected';
    messageLogin.className = 'message-login hidden';
    passwordLogin.className = 'password-login';
    codeLogin.className = 'code_login hidden';
})

// 扫码登陆
var switchLogin = document.querySelector('.login .switch_login');
var logoCode = document.querySelector('.login .logo-code img');
var logoTip = document.querySelector('.login .logo-code .logo-tip span');
logoCode.addEventListener('click', function(){
    if(codeLogin.className === 'code_login hidden'){
        switchLogin.className = 'switch_login clearfix hidden'; 
        messageLogin.className = 'message-login hidden';
        passwordLogin.className = 'password-login hidden';
        codeLogin.className = 'code_login';
        logoCode.src = './img/qr_login2.png';
        logoTip.innerHTML = '短信登陆/注册';
    }else{
        switchLogin.className = 'switch_login clearfix'; 
        messageLogin.className = 'message-login';
        passwordLogin.className = 'password-login hidden';
        codeLogin.className = 'code_login hidden';
        logoCode.src = './img/qr_login.png'
        logoTip.innerHTML = '扫码登陆';
    }
})

// 选择区号
var numSelect = document.querySelector('.login .message-login .form-item .number-select>span');
var numChoose = document.querySelector('.login .message-login .form-item .number-select>.choose');
var chooseItem = document.querySelectorAll('.login .message-login .form-item .number-select .choose .item');
var num = document.querySelectorAll('.login .message-login .form-item .number-select .choose .item .num');

numSelect.addEventListener('click', function(){
    numChoose.className = 'choose';
})
for(var i = 0; i < chooseItem.length; i++){
    chooseItem[i].addEventListener('click', function(){
        for(var j = 0; j < chooseItem.length; j++){
            chooseItem[j].className = 'item clearfix';
        }
        this.className = 'item clearfix selected';
        numSelect.innerHTML = this.children[1].innerHTML;
        numChoose.className = 'choose hidden';
    })
}

// 获取验证码
var passwordTip = document.querySelector('.login .message-login .form-item .password-tip');
var time = 59;
passwordTip.addEventListener('click', function(){
    var timer = setInterval(function(){
        if(time <= 0){
            time = 59;
            passwordTip.innerHTML = '获取验证码';
            clearInterval(timer);
            passwordTip.style.color = '#41AC52';
        }
        else{
            passwordTip.style.color = '#ccc';
            passwordTip.innerHTML = time + 's 后重新发送';
            time--;
        }
    }, 1000)

})

// 登陆按钮
// var phoneNumber = document.querySelector('.login .message-login .form-item .phone-number');
// var passwordPw = document.querySelector('.login .message-login .form-item .password-pw');
// var loginBt = document.querySelector('.login .message-login .form-item .login-bt');
// loginBt.addEventListener('mousemove', function(){
//     if(phoneNumber.value !== '' && passwordPw.value !== ''){
//         loginBt.style.cursor = 'pointer';
//         loginBt.disabled = false;
//     }else{
//         loginBt.style.cursor = 'default';
//         loginBt.disabled = true;
//     }

// });

