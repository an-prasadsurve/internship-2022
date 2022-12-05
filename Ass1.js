function ImageFormatting()
{
    var img=new Image();
    var button=document.getElementById('button');
    button.addEventListener('click',(_event) => {
        var imageurl = document.getElementById('url').value;
        var img = document.createElement('img');
        img.src = imageurl;
        document.body.appendChild(img);

        var height=document.getElementById('height');
      var height=img.naturalHeight;
      alert("Image Height=" +height);
      
      var width=document.getElementById('width');
      var width=img.naturalWidth;
      alert("Image Width=" +width);
      });

}
