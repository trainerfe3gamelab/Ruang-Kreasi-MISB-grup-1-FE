$(document).ready(function(){
    //Penerapan untuk tag h1
    $("h1").css("color", "red");

    //Penerapan Event MouseEnter dan MouseLeave
    $("#myDiv").mouseenter(function() {
        $(this).text("Kursor Mouse berada di dalam");
    });

    $("#myDiv").mouseleave(function() {
        $(this).text("Kursor Mouse berada di luar");
    });

    //Penerapan event ketika tombol diklik
    $("#myButton").click(function() {
        alert("Tombol diklik!");
    });

    //Penerapan event keyboard press
    $(document).keypress(function(event) {
        var key = String.fromCharCode(event.which);
        $("#hasil_input").text("Anda Menekan Tombol " + key);
    });

    //Penerapan event Form Submit
    $("#myForm").submit(function(event) {
        event.preventDefault(); //Menghentikan submit form
        var name = $("#nameInput").val();
        var email = $("#emailInput").val();
        $("#hasil_form").text("Nama: " + name + ", email: " + email);
    });
});