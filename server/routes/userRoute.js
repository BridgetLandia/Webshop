import express from 'express';
import User from '../models/userModel';
import { getToken } from '../utils/utils';

const router = express.Router();

router.post('/signin', async (req, res) => {
	const signInUser = await User.findOne({
		email: req.body.email,
		password: req.body.password
	});
	if (signInUser) {
		res.send({
			_id: signInUser.id,
			_name: signInUser.name,
			_email: signInUser.email,
			_isAdmin: signInUser.isAdmin,
			token: getToken(signInUser)
		});
	} else {
		res.status(401).send({ msg: 'Invalid Email or Password.' });
	}
});

router.post('/register', async (req, res) => {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});
	const newUser = await user.save();
	if (newUser) {
		res.send({
			_id: newUser.id,
			name: newUser.name,
			email: newUser.email,
			isAdmin: newUser.isAdmin,
			token: getToken(newUser)
		});
	} else {
		res.status(401).send({ msg: 'Invalid User Data.' });
	}
});

router.get('/createadmin', async (req, res) => {
	try {
		const user = new User({
			name: 'Bridget',
			email: 'brigitta.tth@gmail.com',
			password: '1234',
			isAdmin: true
		});
		const newUser = await user.save();
		res.send(newUser);
	} catch (error) {
		res.send({ msg: error.message });
	}
});

export default router;
