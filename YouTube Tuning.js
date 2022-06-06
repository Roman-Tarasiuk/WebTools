// Tune YouTube
// After running the script from a bookmark link, select player e.g. rigth mouse key.
// Press Shift+1, Shift+2 or Shift+3 to toggle description (in full-scree mode),
// progress bar and player controls accordingly.
// In the latest versions of YouTube it may not work, so replace
// var el = document.getElementById(idOrClass);
// to
// var el = document;
javascript:(function () {
    function toggleDisplayNone (className){
        var elements = document.getElementsByClassName(className);
        if (elements[0].style.display != undefined && elements[0].style.display == '') {
            elements[0].style.display = 'none';
        }
        else {
            elements[0].style.display = '';
        }
    }

    function shortcuts(idOrClass) {
        var el = document.getElementById(idOrClass);
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
        });
    }
    
    shortcuts ('player-container');
})();
