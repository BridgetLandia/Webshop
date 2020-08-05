import express from 'express';
import path from 'path';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute';

const mongodbUrl = config.MONGODB_URL;
mongoose
	.connect(mongodbUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.use(express.static(path.join(__dirname, '/../client/build')));
app.get('*', (req, res) => {
	res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
});

// app.get('/api/products/:id', (req, res) => {
// 	const productId = req.params.id;
// 	const product = data.products.find((x) => x._id === productId);
// 	if (product) res.send(product);
// 	else res.status(404).send({ msg: 'Product Not Found.' });
// });

// app.get('/api/products', (req, res) => {
// 	res.send(data.products);
// });

app.listen(config.PORT, () => {
	console.log('Server strated');
});
