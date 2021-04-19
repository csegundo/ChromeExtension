(function(){
    var colors = document.getElementsByClassName('color'),
        action = document.getElementById('action');

    var highlight = function(){
        try{
            var selection = window.getSelection && window.getSelection();//.getRangeAt(0);
            if(selection && selection.rangeCount > 0){
                changeElement(selection);
            } else{
                alert('Selection <= 0: ' + selection);
            }
        } catch(ignoreThis){alert(ignoreThis)}
    }

    function changeElement(selection) {
        var highlighter = document.createElement("span");
        highlighter.setAttribute("style", "background-color: #FFF49C;");
        selection.surroundContents(highlighter);
    }

    // probando
    action.onclick = highlight;

    //////////////////////////////////

    // action.onclick = function(){
    //     var color = '#FFF49C';
    //     chrome.storage.sync.get(['_hl_color'], function(data){
    //         console.log('Recovered color: '.concat(data));
    //         alert(data._hl_color);
    //     });
    // };

    var f = function(color){
        // alert('c l i c k' + color);
        chrome.storage.sync.set({ _hl_color : color }, function() {
            console.log("You have selected the color: ".concat(color));
        });
    }

    for(var i = 0; i < colors.length; i++){
        var btn = colors[i], color = btn.name;
        btn.onclick = function(){
            chrome.storage.sync.set({ _hl_color : color }, function() {
                console.log("You have selected the color: ".concat(color));
            });
        };
    }
})();