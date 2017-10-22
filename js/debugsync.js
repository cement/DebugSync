

  var port = chrome.runtime.connect({name: 'debugsync'});
  
 
  // port.onDisconnect.addListener(function(msg) {
  //      alert('-----debug-----Disconnect------------'+JSON.stringify(msg));
  //     port.onMessage.removeEventListener(type: DOMString, callback: EventListener, capture?: boolean)
  // }
  port.onMessage.addListener(function(msg) {
    //alert('debug 收到长连接消息：'+msg.fromws);
    // if(msg.answer && msg.answer.startsWith('我是'))
    // {
    //   //port.postMessage({question: '哦，原来是你啊！'});
    // }
  });

  // chrome.devtools.inspectedWindow.onResourceAdded.addListener(function(resource) {
  //  alert(JSON.stringify(resource));
  // });

/**
 * 资源修改事件
 * @param  {[type]} resource [description]
 * @return {[type]}          [description]
 */
  chrome.devtools.inspectedWindow.onResourceContentCommitted.addListener(function(resource, content) {
      
      alert(resource.url);
      // alert(resource.url);
       //alert(content);
      port.postMessage({url: resource.url,content:content});
  });
  /**
   * 为列表添加点击事件
   * @type {[type]}
   */
  var lis = document.getElementsByClassName('li-item');
  for (var i = 0; i < lis.length; i++) {
      lis[i].addEventListener('click', function() {
          alert(this.innerText);
          alert(this.value());
      });
  }