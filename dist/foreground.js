// Listen for window.postMessage events from the webpage,
// pass them on to the extension's service worker.
// This can't go direct from webpage to service worker, hence
// the addition of this intermediary.
if(typeof browser === "undefined") {
    var browser = chrome;
}

window.addEventListener("message", function(event) {
    if (event.source != window)
        return;

    if(typeof browser === "undefined") {
        var browser = chrome;
    }
    if (event.data.message && event.data.message === "websocket_update") {
        browser.runtime.sendMessage({
            message: "websocket_update",
            payload: event.data.payload
        });
    }
    if (event.data.message && event.data.message === "prep_registration") {
        browser.runtime.sendMessage(event.data);
    }
});
