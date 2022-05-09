(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

// document.onwheel = function (event) {
//     if (event.deltaY > 0) {
//         document.querySelector('')
//     }
// }

let left = 0;
document.getElementById('test').onwheel = function (event) {
    let line = event.deltaY;
    left = left + line;
    document.getElementById('test2').style.left = left + 'px';
    // if (left === 0) {
    //     overflow-x: hidden;
    // }
    return false;
}

document.getElementById('stepOn').onwheel = function (event) {
    let line = event.deltaY;
    left = left + line;
    document.getElementById('stepTo').style.left = left + 'px';
    // if (left === 0) {
    //     overflow-x: hidden;
    // }
    return false;
}