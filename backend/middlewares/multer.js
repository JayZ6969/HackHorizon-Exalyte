const multer = require('multer');

// Set up Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the uploads folder
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Use the original filename
    }
});

// Initialize multer with storage and file filter
const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        // Optional: Add file type validation here
        cb(null, true); // Accept all files
    }
});

module.exports = upload;