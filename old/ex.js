// var par = document.querySelector("p");
// var btn1 = document.querySelector(".plus");
// var btn2 = document.querySelector(".minus");
// var btn3 = document.querySelector(".reset");
// var c = 0;


// btn1.addEventListener("click", plus);

// function plus() {
//     c++;
//     par.innerHTML = c;
//     par.style.fontSize = fontSize + "px";
// }
// btn2.addEventListener("click", minus);

// function minus() {
//     c--;
//     par.innerHTML = c;
//     par.style.fontSize = fontSize - "px";
// }
// btn3.addEventListener("click", function () {
//     var c = 0;
//     par.innerHTML = c;
//     par.style.fontSize = "16px";
// });

$(function () {
    var par = $('p');
    let c = 0;
    let siize = 16;
    $('.plus').click(function () {
        c++;
        par.text(c);
        par.css("fontSize", siize++ + 'px');

    });

    $('.minus').click(function () {
        c--;
        par.text(c);
        par.css("fontSize", siize++ + 'px');
    });

    $('.reset').click(function () {
        var c = 0;
        par.text(c);
        par.css("fontSize", siize);

    });


});
