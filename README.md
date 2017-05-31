Here are the specific user stories you should implement for this project:

User Story: I can submit a FormData object that includes a file upload.

User Story: When I submit something, I will receive the file size in bytes within the JSON response

Hint: You may want to use this package: https://www.npmjs.com/package/multer

This particular microservice uploads the file to a temporary folder prior to evaluation of file size.
once file size is returned, we use fs.access() to verify that the file exists, and then fs.unlink() to
delete the file.

The live project is found on Heroku at https://fcc-file-microservice.herokuapp.com/.