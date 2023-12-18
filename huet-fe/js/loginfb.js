// Hàm được gọi khi nút "Login" được nhấn
function login() {
    // Lấy giá trị của tên người dùng và mật khẩu từ các trường input
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == 'admin@gmail.com' && password == '123'){
        document.write('Login success')
    }else{
        document.write('Login failed')
    }
}

let btn = document.getElementById('btn')
btn.addEventListener('click', login)