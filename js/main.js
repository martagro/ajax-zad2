$(document).ready(function () {
    getData();


});


function getData() {

    $('button').click(function () {
        $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function (data) {
            console.log(data);

            $('body').append($('<p>').text(data.userId));
            $('body').append($('<p>').text(data.userName));
            $('body').append($('<p>').text(data.userURL));
        });
    });
}
