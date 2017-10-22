





    var ws = new WebSocket("ws://localhost:8181",'debugsync');
    ws.onopen = function(){
         console.log('**********  connected  ************');
      //ws.send(Date.now());
    }
  
    ws.onclose =  function (messageEvent) {
         console.log('========= disconnected =========='+messageEvent.data);
    }
    
   
    
    ws.onmessage = function (messageEvent) {
      console.log(messageEvent.data);
      alert('------this is webserver rplay msg------'+messageEvent.data);
     // displayDiv.innerText += '\n'+messageEvent.data;
      
    
    }

    ws.onerror = function (messageEvent) {
      console.log(messageEvent.data);


    }

      ws.sendMessage = function(message) {
        //var message = getElementById('message').value;
       // var message = chatform.message.value;
        if(message){

          console.log(message);
          ws.send(message);
          //chatform.message.value='';
        }
    }

// 监听长连接
chrome.runtime.onConnect.addListener(function(port) {
	//alert(ws);
	    ws.send('------  debugsync han connected to wesocket client!  ------');
		port.onMessage.addListener(function(msg) {
			if(port.name === 'debugsync') {
				// alert('websocket 收到长连接消息：url->', msg.url);
				// alert('websocket 收到长连接消息：content->', msg.content);
				ws.sendMessage(JSON.stringify(msg));
				port.postMessage({fromws: '我是websocket！收到的消息是：\n'+msg.fromdebug});
		    }
		});
	
});