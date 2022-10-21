//Change font type and font style.
function changeFont(font) {
    document.getElementById('content').style.fontFamily=font.value;
}
//buttons for bold ,underline and italic
function bold() {
    var bol=document.getElementById('content').style.fontWeight;
    if(bol !=='normal'){
        document.getElementById('content').style.fontWeight='normal';
    }
    else{
        document.getElementById('content').style.fontWeight='bold';
    }
  }

  function italic() {
    var bol=document.getElementById('content').style.fontStyle;
    if(bol !=='normal'){
        document.getElementById('content').style.fontStyle='normal';
    }
    else{
        document.getElementById('content').style.fontStyle='Italic';
    }
  }

  function underline() {
    var bol=document.getElementById('content').style.textDecoration;
    if(bol !=='underline'){
        document.getElementById('content').style.textDecoration='underline';
    }
    else{
        document.getElementById('content').style.textDecoration='none';
    }
  }
