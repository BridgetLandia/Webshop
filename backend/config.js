import dotenv from 'dotenv';

dotenv.config();

export default {
	PORT: process.env.PORT || 5000,
	MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/webshop',
	JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret'
};
