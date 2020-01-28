function prevImage (event) {
    var id, str;

    id  = event.target.parentNode.parentNode.getElementsByTagName('img')[0].id;

    str = imagePos[id].path;

    imagePos[id].currIndex -= 1;

    if (imagePos[id].currIndex <= 0) {
        imagePos[id].currIndex = imagePos[id].maxCount;
    }

    document.getElementById(id).src = str + imagePos[id].currIndex + ".png";
}

function nextImage (event) {
    var id, str;

    id  = event.target.parentNode.parentNode.getElementsByTagName('img')[0].id;

    str = imagePos[id].path;

    imagePos[id].currIndex += 1;

    console.log(id);

    if (imagePos[id].currIndex > imagePos[id].maxCount) {
        imagePos[id].currIndex = 1;
    }

    document.getElementById(id).src = str + imagePos[id].currIndex + ".png";
}

var imagePos = {
    jsProject1: {
        currIndex: 1,
        maxCount: 3,
        path: "./myresources/img/Projects/Stock%20Manager/"
    },

    jsProject2: {
        currIndex: 1,
        maxCount: 4,
        path: "./myresources/img/Projects/Tamsins/"
    },

    jsProject3: {
        currIndex: 1,
        maxCount: 3
    }
}

var prev = document.querySelectorAll('.prev');
for (var i = 0; i < prev.length; i++) {
    prev[i].addEventListener('click', prevImage)
}

var next = document.querySelectorAll('.next');
for (var i = 0; i < next.length; i++) {
    next[i].addEventListener('click', nextImage)
}