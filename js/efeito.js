var btnGrey = document.getElementById("btnGrey");
var btnSepia = document.getElementById("btnSepia");
var btnSaturate = document.getElementById("btnSaturate");
var key = 0;
var video = document.getElementById("v");

btnGrey.onclick = function() {
    if (key == 0) {
        video.style.cssText = "-webkit-filter: grayscale(100%);";
        btnGrey.style.cssText = "color: #ffffff;box-shadow: 0 0 0 1px #bdbdbd inset, 0 0 0 2px rgba(255, 255, 255, 0.10) inset, 0 8px 0 0 rgb(255, 255, 255), 0 8px 8px 1px rgba(0, 0, 0, .2);background-color: #5f5f5f;";
        key = 1;
    } else {
        video.style.cssText = "-webkit-filter: grayscale(0%);";
        key = 0;
        btnGrey.style.cssText = "color: #666666;box-shadow: 0 0 0 1px #ebebeb inset, 0 0 0 2px rgba(255, 255, 255, 0.10) inset, 0 8px 0 0 #BEBEBE, 0 8px 8px 1px rgba(0, 0, 0, .2);background-color: #f9f9f9;";
    }
}
btnSepia.onclick = function() {
    if (key == 0) {
        video.style.cssText = "-webkit-filter: sepia(100%);";
        btnSepia.style.cssText = "color: #ffffff;box-shadow: 0 0 0 1px #bdbdbd inset, 0 0 0 2px rgba(255, 255, 255, 0.10) inset, 0 8px 0 0 rgb(255, 255, 255), 0 8px 8px 1px rgba(0, 0, 0, .2);background-color: #5f5f5f;";
        key = 1;
    } else {
        video.style.cssText = "-webkit-filter: sepia(0%);";
        key = 0;
        btnSepia.style.cssText = "color: #666666;box-shadow: 0 0 0 1px #ebebeb inset, 0 0 0 2px rgba(255, 255, 255, 0.10) inset, 0 8px 0 0 #BEBEBE, 0 8px 8px 1px rgba(0, 0, 0, .2);background-color: #f9f9f9;";
    }
}

btnSaturate.onclick = function() {
    if (key == 0) {
        video.style.cssText = "-webkit-filter: invert(0.8);";
        btnSaturate.style.cssText = "color: #ffffff;box-shadow: 0 0 0 1px #bdbdbd inset, 0 0 0 2px rgba(255, 255, 255, 0.10) inset, 0 8px 0 0 rgb(255, 255, 255), 0 8px 8px 1px rgba(0, 0, 0, .2);background-color: #5f5f5f;";
        key = 1;
    } else {
        video.style.cssText = "-webkit-filter: invert(0%);";
        key = 0;
        btnSaturate.style.cssText = "color: #666666;box-shadow: 0 0 0 1px #ebebeb inset, 0 0 0 2px rgba(255, 255, 255, 0.10) inset, 0 8px 0 0 #BEBEBE, 0 8px 8px 1px rgba(0, 0, 0, .2);background-color: #f9f9f9;";
    }
}