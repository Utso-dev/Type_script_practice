

const fs = require('fs');
const path = require('path');

console.log("start file read.........");
try {
    const data = fs.readFileSync( './asset/test.txt', 'utf-8');
    console.log("file read success");
    console.log(data);
    
} catch (error: any) {
    console.log("file read error");
    console.error(error.message);
}



console.log("file read end...........");
