function readadirectory () {

	// Import the file system functionality
	var fs = require("fs")
	var foldertoread = process.argv [2]

	if (foldertoread == undefined ) {
		console.log ("Please specify a folder")
		return
	}

	// Read the directory function
	fs.readdir(foldertoread, function (error, files) {
		if (error) {
			console.log ("Oh no, ERROR: " + error)
			throw error
		}

		// Loop through the file array
		files.forEach (function (file) {

			// Reads one array element, utf8 outputs a string
			fs.readFile(foldertoread + "/" + file, 'utf8', function (error, filecontents) {
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