$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "生日快乐" && pwd == "123") {
        $('#h').text("母亲生日快乐！");
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "BirthdayCake.html";
        }, 4000);
    } else {
        alert("用户名或密码不正确！");
    }
});
