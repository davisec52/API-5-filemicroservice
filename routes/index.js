const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const upload = multer({"dest": path.join(__dirname + "/uploads")});
const router = express.Router();

router.get("/", (req, res, next) => {
    res.sendFile("/index.html");
});

router.post("/upload", upload.single("uploadFile"), (req, res, next) => {
    
    //Helpful info on deleting uploaded file at https://stackoverflow.com/questions/5315138/node-js-remove-file
    
    if(req.file){
        let fileObj = req.file;
        let fileSize = fileObj.size;
        res.status(200).json({fileSize});
        fileObj.path = "";
        
    //fs.access() checks to be sure file exists prior to manipulation
        fs.access(path.join(__dirname + "/uploads/" + req.file.filename), fs.constants.R_OK | fs.constants.W_OK, (err) => {
            console.log(err ? "unable to access file!" : 'File readable and/or writable');
        });
        
    //Once file determined to exist, we delete the file by the fs.unlink() method
        fs.unlink(path.join(__dirname + "/uploads/" + req.file.filename), (err) => {
            console.log(err ? err : "File deleted successfully.");
        });
        res.end();
    }else{
        res.end("Missing file. Please provide valid file.");
    }
    
});

module.exports = router;