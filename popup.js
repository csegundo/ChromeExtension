var colors = document.getElementsByClassName('color'),
    action = document.getElementById('action');

function _setColor(color){
    chrome.storage.sync.set({ '_hl_color' : color }, function() {
        console.log("You have selected the color: ".concat(color));
    });
}

action.onclick = function(){
    var color = '#FFF49C';
    chrome.storage.sync.get(['_hl_color'], function(data){
        console.log('Recovered color: '.concat(data));
        // color = data;
        alert(data._hl_color);
    });
    // alert(color);
};

for(var i = 0; i < colors.length; i++){
    var btn = colors[i], color = btn.value;
    btn.onclick = function(){
        _setColor(color);
    };
}