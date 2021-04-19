(function(buttonColors){
    var page = document.querySelector('#buttonDiv');
    for (var item of buttonColors) {
        var button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function() {
            chrome.storage.sync.set({color: item}, function() {
                console.log('color is ' + item);
            })
        });
        page.appendChild(button);
    }
})(['#3aa757', '#e8453c', '#f9bb2d', '#4688f1']);