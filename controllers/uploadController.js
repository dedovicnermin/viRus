

module.exports = (app, router, upload, appPath) => {
    
    router.use((req, res, next) => {
        console.log('/' + req.method);
        next();
    });

    const fs = require('fs');
    const uploadFolder = appPath + '/uploads/';
    const File = require('../models/File');
    
    

    
    
    

    app.get('/uploads', async (req, res) => {
        try {
            const files = await File.find({}).sort({file_date: 'desc'});
            await addProjFilesToStorage(files);
            res.render('uploadPage', {files: files});
        } catch (error) {
            console.log(error);
            res.render('error');
        }
        
    });

    app.post('/uploads',  upload.single('uploadfile'), (req, res) => {
        
        File.create({
            file_name: req.file.filename,
            doc: fs.readFileSync(uploadFolder + req.file.filename),
            file_description: req.body.desc,
            file_date: new Date()
        }, (err, newFile) => {
            if (err) {
                console.log(error);
                res.send('Unable to post this file.');
            }
            res.send({file_name: newFile.file_name, desc: newFile.file_description});
        });
    });


    
    app.get('/api/files/download/:filename', (req, res) => {
        res.download(uploadFolder + req.params.filename);
    });
    
    const addProjFilesToStorage = async (filelist) => {
        const uploadFolder = appPath + '/uploads/';
        if (filelist) {
            filelist.forEach(ele => {
                const outputFilepath = uploadFolder + '/' + ele.file_name;
                fs.createWriteStream(outputFilepath).write(ele.doc);
            });
        }
    }

    



    
    
    
    
}