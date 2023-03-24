// ** Tune YouTube **
//
// Press Shift+1, Shift+2 or Shift+3 to toggle description (in full-scree mode),
// progress bar and player controls accordingly.
// Press Shift+4 to toggle banners (usually at the end of a video, links to other videos).
//
// After running the script from a bookmark link, select player e.g. rigth mouse key.
//
// In the latest versions of YouTube it may not work, so comment the line
//   var el = document.getElementById(idOrClass);
// and uncomment the line
//   var el = document;

javascript: (function () {

    function toggleDisplayNone (className){
        var elements = document.getElementsByClassName(className);

        for (var i = 0; i < elements.length; i++) {
            if (elements[i].style.display != undefined && elements[i].style.display == '') {
                elements[i].style.display = 'none';
            }
            else {
                elements[i].style.display = '';
            }
        }
    }

    function shortcuts(idOrClass) {
        var el = document.getElementById(idOrClass);
        // var el = document;

        el.addEventListener('keydown', function(e) {
            if (e.code == 'Digit1' && e.shiftKey) {
                toggleDisplayNone('ytp-chrome-top');
                toggleDisplayNone('ytp-gradient-top');
            }
            else if (e.code == 'Digit2' && e.shiftKey) {
                toggleDisplayNone('ytp-progress-bar-container');
            }
            else if (e.code == 'Digit3' && e.shiftKey) {
                toggleDisplayNone('ytp-chrome-controls');
                toggleDisplayNone('ytp-gradient-bottom');
            }
            else if (e.code == 'Digit4' && e.shiftKey) {
                toggleDisplayNone('ytp-ce-element');
            }
        });
    }
    
    shortcuts ('player-container');
})();
