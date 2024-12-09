// Bring in node file system module
import fs from "fs";

//setup path/file name to store log info
const ERROR_FILE = "./Logs/error-log.txt";

// Log info to a file
const logToFileHelper = {};

// Write error info to log file
logToFileHelper.error = function (data, resolve, reject) {
	let toWrite = `
    ${"*".repeat(80)}
    Date/Time: ${new Date().toJSON()}
    Exception Info: ${JSON.stringify(data)}
    ${"*".repeat(80)}`;
	// Write error to log file
	fs.appendFile(ERROR_FILE, toWrite, function (err) {
		if (err) {
			// Error: Invoke reject() callback
			reject(err);
		} else {
			// Success: Invoke resolve() callback
			resolve(true);
		}
	});
};

export default logToFileHelper;
