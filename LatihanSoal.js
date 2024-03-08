$(document).ready(function() {

    $("#box").mouseenter(function() {
        $(this).css("background-color", "red");
    });

    $("#box").mouseleave(function() {
        $(this).css("background-color", "orange");
    });

    $("#myInput").keypress(function(){
        console.log("Tombol keyboard  ditekan!");
    });

    $("#loginForm").submit(function(event){
        event.preventDefault();

        var username = $("#loginUsername").val();
        var password = $("#loginPassword").val();

        //Validasi
        if (username === "") {
            alert("Tolong isi username !");
            return;
        }

        if (password === "") {
            alert("Tolong isi password !");
            return;
        }

        //Penangana login (verifikasi ke database)
        console.log("Login telah sesuai dengan username: " + username + "dan password: " + password);
    });

    $("#registrasiForm").submit(function(event){
        event.preventDefault();

        var username = $("#registrasiUsername").val();
        var password = $("#registrasiPassword").val();
        var confirmPassword = $("#registrasiConfirmPassword").val();

        //Validasi
        if (username === "") {
            alert("Tolong isi username !");
            return;
        }

        if (password === "") {
            alert("Tolong isi password !");
            return;
        }

        if (confirmPassword !== confirmPassword) {
            alert("Password Tidak Sesuai");
            return;
        }

        //Penangana login (verifikasi ke database)
        console.log("Registrasi telah sesuai dengan username: " + username + "dan password: " + password);
    )};
});