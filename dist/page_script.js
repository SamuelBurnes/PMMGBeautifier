// This document gets injected straight into the page (DOM).

// prevent repeating ourselves & causing a cascade of websocket overrides.
if (window.PMMG_COLLECTOR_HAS_RUN === true)
{
    console.debug("Already injected websocket rebinding");
}
else
{
    window.PMMG_COLLECTOR_HAS_RUN = true;

    let OrigWebSocket = window.WebSocket;
    let callWebSocket = OrigWebSocket.apply.bind(OrigWebSocket);
    let wsAddListener = OrigWebSocket.prototype.addEventListener;
    wsAddListener = wsAddListener.call.bind(wsAddListener);
    window.WebSocket = function WebSocket(url, protocols)
    {
        let ws;
        if (!(this instanceof WebSocket))
        {
            // Called without 'new' (browsers will throw an error).
            ws = callWebSocket(this, arguments);
        }
        else if (arguments.length === 1)
        {
            ws = new OrigWebSocket(url);
        }
        else if (arguments.length >= 2)
        {
            ws = new OrigWebSocket(url, protocols);
        }
        else
        { // No arguments (browsers will throw an error)
            ws = new OrigWebSocket();
        }
    
        wsAddListener(ws, 'message', function(event)
        {
            //console.debug("Websocket message occurred");
            window.postMessage(
                { 
                    message: "pmmg_websocket_update",
                    payload: event.data,
                }
            );
        });
        return ws;
    }.bind();
    
    window.WebSocket.prototype = OrigWebSocket.prototype;
    window.WebSocket.prototype.constructor = window.WebSocket;
    
    /*
    // Override send, if needed.
    let wsSend = OrigWebSocket.prototype.send;
    wsSend = wsSend.apply.bind(wsSend);
    OrigWebSocket.prototype.send = function(data)
    {
        // console.log("Sent message");
        return wsSend(this, arguments);
    };
    */
    
}
