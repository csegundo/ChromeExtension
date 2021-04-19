chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ _hl_color : '#FFF49C'}, function() {
        console.log("Default color: #FFF49C");
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                // pageUrl: {hostEquals: 'developer.chrome.com'}, // para paginas en concreto
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});