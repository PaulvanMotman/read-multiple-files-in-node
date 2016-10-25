// Create a function that can read entire directories and whatver files are in their

function readadirectory ( foldername ) {

	// Require file system functionality
	var fs = require("fs")

	// If folder is empty, quit the function.
	if (foldername == undefined ) {
		console.log ("Please specify a folder")
		return
	}

	// Read the directory function
	fs.readdir(foldername, function (error, files) {

		// Check for errors
		if (error) {
			console.log ("Oh no, ERROR: " + error)
			throw error
		}

		// Loop through the file array
		files.forEach (function (file) {

			// Reads one array element, utf8 outputs a string
			fs.readFile(foldername + "/" + file, 'utf8', function (error, filecontents) {
				// Watch for errors
				if (error) {
					console.log ("Oh no, ERROR: " + error)
					throw error
				}
				// store the parsed content in a variable
				var array = JSON.parse(filecontents)
				// Console logs the contents of the array
				array.forEach (function (filecontent) {
					console.log(filecontent.hello)
				})
			})
		})
	})
}

// Export the readadirectory function
module.exports.readadirectory = readadirectory















