

const fs = require('fs');

console.log(" start file write.........");

const content = "This is output file content.";

fs.writeFileSync("./asset/output.txt", content, "utf-8");


// Remove previous backup file if exists
if (fs.existsSync("./asset/output.txt")) {
    fs.unlinkSync("./asset/output.txt");
    console.log(" previous backup file deleted=======");
}
console.log(" file write success");

console.log(" file write end...........");


// async version

console.log(" start async file write.........");
const  asyncContent = "This is async output file content.";

fs.writeFile("./asset/async_output.txt", asyncContent, "utf-8", (err: any) => {
    if (err) {
        console.log("async file write error");
        console.error(err.message);
        return;
    }
    console.log("async file write success");
});


console.log(" async file write end..........."); 


// append file sync version
const logEntry = `\n Log entry at ${new Date().toISOString()}\n`;

fs.appendFileSync("./asset/async_output.txt", logEntry, "utf-8", )

console.log(" async file append success");