import dotenv from 'dotenv';

dotenv.config();

export default {
	PORT: process.env.PORT || 5000,
	MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/webshop',
	JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
	PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
	CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
	CLOUDINARY_API_NAME: process.env.CLOUDINARY_API_NAME,
	CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
};
