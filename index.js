#!/usr/bin/env node
var fs = require('fs');

var file = process.argv[2];
if (!file) process.exit(0);

var readStream = fs.createReadStream(file, 'utf8');

var text = "'\u202E';"; // Prepend this to the source code
readStream.on('data', function(buf){
    var str = buf.toString('utf8');
    str = str.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, ""); // replace comments and multiple spaces
    str = str.replace(/\n/g, ""); // replace line breaks
    str = str.replace(/\s+/g, " "); // replace multiple spaces with single space
    text += str;
}).on('end', function(){
    process.stdout.write(text);
});
