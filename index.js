
        window.onload = document.getElementById("submit-btn").addEventListener("click", function (event) {
            event.preventDefault();
            let imgUrl = document.getElementById("image-url").value;
            let imgWidth = parseInt(document.getElementById("image-width").value);
            let imgHeight = parseInt(document.getElementById("image-height").value);

            let img = new Image();
            img.src = imgUrl;

            let canvas = document.getElementById("myCanvas");
            let ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
        });
