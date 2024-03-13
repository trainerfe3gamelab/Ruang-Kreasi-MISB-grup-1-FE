$(document).ready (function(){
    $('#CheckButton').click(function(){

        //Menggunakan method chainning
        $('#myDiv').addClass('highlight').removeClass('bold');

        var hasHighlightClass = $('#myDiv').hasClass('highlight'); 
        console.log('Apakah #myDiv memiliki class "highlight"?', hasHighlightClass);

        //Menggunakan method chainning attr() dan removeattr()
        $('#myDiv').attr('title', 'Ini adalah div').removeAttr('id');

        //Menggunakan  method chainning text() dan html()
        $('#myDiv').text('Teks yang diubah').html('<p>Teks HTML yang diubah</p>');

        //Menggunakan method apped() dan prepend()
        $('#myDiv').append('<p>Teks yang ditambahkan  di akhir</p>').prepend('<p>Teks yang ditambahkan di awal</p>');

        //menggunakan method chaining dengan remove()
        $('#myDiv').find('p').remove();
    });
}); 
    
