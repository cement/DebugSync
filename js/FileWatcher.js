const fs = require('fs')
const { URL } = require('url');
const url = new URL('file:///L:/FileWatchTest/');

fs.watch('/', {persistent:true,recursive:true,encoding:'utf8'}, function(eventType,fileName){
    console.log(eventType);
    console.log(fileName);
    var res = fs.readFileSync(fileName, {encoding:'utf8'})
    console.log(res);
})

// fs.watchFile('./test.html', (curr, prev) => {
//   console.log(`the current mtime is: ${curr.mtime}`);
//   console.log(`the previous mtime was: ${prev.mtime}`);
// });

