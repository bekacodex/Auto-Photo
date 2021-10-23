//
var cunter = 1;
setInterval(function () {
    document.getElementById('radio' + cunter).checked = true;
    cunter++;
    if (cunter > 4) {
        cunter = 1;
    }
}, 5000);