$('#bold').on('click', function(e) {
   e.preventDefault();
   document.execCommand('bold', false, null);
});

$('#italic').on('click', function(e) {
   e.preventDefault();
   document.execCommand('italic', false, null);
});

$('#underline').on('click', function(e) {
   e.preventDefault();
   document.execCommand('underline', false, null);
});

$('#align-left').on('click', function(e) {
   e.preventDefault();
   document.execCommand('justifyLeft', false, null);
});

$('#align-center').on('click', function(e) {
   e.preventDefault();
   document.execCommand('justifyCenter', false, null);
});

$('#align-right').on('click', function(e) {
   e.preventDefault();
   document.execCommand('justifyRight', false, null);
});

$('#list-ul').on('click', function(e) {
   e.preventDefault();
   document.execCommand('insertUnorderedList', false, null);
});

$('#list-ol').on('click', function(e) {
   e.preventDefault();
   document.execCommand('insertOrderedList', false, null);
});

$('#fonts').on('change', function(e) {
   e.preventDefault();
   var font = $(this).val();
   document.execCommand('fontName', false, font);
});

$('#size').on('change', function(e) {
   e.preventDefault();
   var size = $(this).val();
   $('.editor').css('fontSize', size + 'px');
});


$('#color').spectrum({
   color: '#000',
   showPalette: true,
   showInput: true,
   showInitial: true,
   showInput: true,
   preferredFormat: "hex",
   showButtons: false,
   change: function(color) {
      color = color.toHexString();
      document.execCommand('foreColor', false, color);
   }
});

/*
$("#color_selector").spectrum({
    color: "#000"
});
*/

/* $('.editor').perfectScrollbar(); */