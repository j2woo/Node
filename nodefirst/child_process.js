const os = require("os");
const exec = require('child_process').exec;
let position = os.type().toLowerCase().indexOf("windows");
let process;
if (position >= 0) {
    console.log("windows");
    process = exec('dir');
} else {
    console.log("windows 아님");
    process = exec('ls');
}
//console.log(os.platform());
// 프로세스가 정상적으로 수행되면
process.stdout.on('data', function (data) {
    console.log(data.toString());
});

//수행되지 않으면
process.stderr.on('data', function (data) {
    console.log(data.toString());
});
