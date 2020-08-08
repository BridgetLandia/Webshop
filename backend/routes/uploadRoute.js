const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const express = require('express');
const multer = require('multer');

const router = express.Router();

const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: 'webshop',
		format: async (req, file) => 'jpg', // supports promises as well
		public_id: (req, file) => 'computed-filename-using-request'
	}
});

const parser = multer({ storage: storage });

router.post('/upload', parser.single('image'), function(req, res) {
	res.json(req.file);
});

export default router;
