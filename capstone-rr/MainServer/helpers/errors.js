// Load the log to file module
import logToFileHelper  from "../helpers/logToFile.js"



// Error helper
const errorHelper = {};

// Build error  object for internal logging
errorHelper.buildError = function (err, req) {
	return {
		status: 500,
		statusText: "InterNal Server Error",
		message: err.msg,
		stack: err.stack ?? "n/a",
		originalError: err,
		requestInfo: {
			hostname: req.hostname ?? "Unknown",
			path: req.path ?? "Unknown",
		},
	};
};

// Log error info to console
errorHelper.errorToConsole = function (err, req, res, next) {
	//build error object for logging
	let errObject = errorHelper.buildError(err, req);
	// Log error info to console
	console.error(`Log Entry: ${JSON.stringify(errObject)}`);
	console.error("*".repeat(80));
	// Pass error along to middleware
	next(err);
};

// Log error info to a file
errorHelper.errorToFile = function (err, req, res, next) {
	// Build Error object for logging
	let errObject = errorHelper.buildError(err, req);
	// Write error information to a file
	logToFileHelper.error(
		errObject,
		function (data) {
			// Success: info was written
			console.log(data);
		},
		function (err) {
			// Error: Write error to console
			console.error(err);
		}
	);
	//Error: pass error along to
	// the 'next' middleware
	next(err);
};

//Last function in error middleware chain
// sends out the error object appropriate for
// consumers of web api calls
errorHelper.errorFinal = function (err, req, res, next) {
	res.status(500).send({
		status: 500,
		statusText: "InterNal Server Error",
		message: "An Error Occured Contact System Admin",
	});
};


export default errorHelper;
