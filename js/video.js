document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector("#v");
    var canvas = document.querySelector("#c");
    var context = canvas.getContext("2d");

    video.addEventListener("loadedmetadata", function() { //quando os metadados estiverem carregados
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    });

    var cont = 0.0;
    var proxImage = 0.0;
    var draw = function() { //desenhar no canvas - a imagem que esta sendo retornada pelo video
        if (video.paused || video.ended) return;
        var x = 0;
        var y = 0;
        context.drawImage(video, x, y, canvas.width, canvas.height); //captura o frame do video
        var imageData = context.getImageData(x, y, canvas.width, canvas.height);
        var data = imageData.data;
        context.putImageData(imageData, x, y);
        var image = new Image();
        image.src = canvas.toDataURL("image/png");
        image.width = 120;
        if (cont++ % 40.0 == 0) {
            var imgs = document.querySelector("#imgs");
            imgs.appendChild(image);
        }
        for (var i = 0.0; i < data.length; i++) {
            proxImage += imageData.data[i];
        }
        if (proxImage > 5000000) {
            requestAnimationFrame(draw);
        }
        proxImage = 0.0;
    }

    video.addEventListener("play", function() { //adicionar quando executar
        if (video.paused || video.ended) {
            return;
        }
        draw();
    });
});