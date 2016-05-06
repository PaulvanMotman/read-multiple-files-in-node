function readadirectory ( foldername ) {

	// Import the file system functionality
	var fs = require("fs")

	if (foldername == undefined ) {
		console.log ("Please specify a folder")
		return
	}

	// Read the directory function
	fs.readdir(foldername, function (error, files) {
		if (error) {
			console.log ("Oh no, ERROR: " + error)
			throw error
		}

		// Loop through the file array
		files.forEach (function (file) {

			// Reads one array element, utf8 outputs a string
			fs.readFile(foldername + "/" + file, 'utf8', function (error, filecontents) {
				// Cath the error
				if (error) {
					console.log ("Oh no, ERROR: " + error)
					throw error
				}
				// Console logs the contents
				console.log(JSON.parse(filecontents))
			})
		})
	})
}

module.exports.readadirectory= readadirectory