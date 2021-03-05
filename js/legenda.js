window.onload = function() {
    var video = document.querySelector("#v");
    var track = document.querySelectorAll("track"); //retorna uma lista de itens
    var divtrack = document.querySelector("#tracks");

    for (var i = 0; i < track.length; i++) {
        var corrent = track[i];
        var label = "<li> label =" + corrent.label + "</li>";
        var kind = "<li> kind =" + corrent.kind + "</li>";
        var lang = "<li> srclang =" + corrent.srclang + "</li>";
        var status = "<li> status =" + corrent.readyState + "</li>";
        var trackid = "<li><b>" + (i + 1) + "</b></li>";
        divtrack.innerHTML += trackid + "<ul>" + label + kind + lang + status + "</ul>";
    }
}
