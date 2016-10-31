#!/usr/bin/env node
var fs = require('fs');

var file = process.argv[2];
if (!file) process.exit(0);

var readStream = fs.createReadStream(file, 'utf8');

// Prepend this to the source code (note: _rav will be a global variable)
var text = "var _rav = '\u202E'; _rav = ";
readStream.on('data', function(buf){
    var str = buf.toString('utf8');
    str = str.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)|(\s\s)/gm, ""); // replace comments
    str = str.replace(/\n/g, ""); // replace line breaks
    text += str;
}).on('end', function(){
    process.stdout.write(text);
});
