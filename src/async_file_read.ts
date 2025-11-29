const fs = require('fs');

console.log("start file read.........");

fs.readFile("./asset/test.txt", "utf-8", (err: any, data: string) => {
    if (err) {
        console.log("file read error");
        console.error(err.message);
        return;
    }
    console.log("file read success");
    console.log(data);
});

console.log("file read end...........");