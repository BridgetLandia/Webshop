import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
function PaypalButton(props) {
	const [ sdkReady, setSdkReady ] = useState(false);
	const _isMounted = useRef(true);

	const addPaypalSdk = async () => {
		const result = await axios.get('/api/config/paypal');
		const clientID = result.data;
		const script = document.createElement('script');
		script.async = true;
		script.src = 'https://www.paypal.com/sdk/js?client-id=' + clientID;
		script.type = 'text/javascript';

		document.body.appendChild(script);
		script.onload = () => {
			setSdkReady(true);
		};
		script.onerror = () => {
			throw new Error('Paypal SDK could not be loaded.');
		};
		console.log('append script');
	};

	const createOrder = (data, actions) =>
		actions.order.create({
			purchase_units: [
				{
					amount: {
						currency_code: 'USD',
						value: props.amount
					}
				}
			]
		});

	const onApprove = (data, actions) =>
		actions.order.capture().then((details) => props.onSuccess(data, details)).catch((err) => console.log(err));

	useEffect(() => {
		if (window !== undefined && window.paypal === undefined && _isMounted.current === true) {
			addPaypalSdk();
		} else if (
			window !== undefined &&
			window.paypal !== undefined &&
			_isMounted.current === true &&
			props.onButtonReady
		) {
			props.onButtonReady();
		}
		return () => (_isMounted.current = false);
	}, []);

	if (!sdkReady && window.paypal === undefined) {
		return <div>Button Loading...</div>;
	}

	const Button = window.paypal.Buttons.driver('react', { React, ReactDOM });
	return (
		<Button
			{...props}
			createOrder={(data, actions) => createOrder(data, actions)}
			onApprove={(data, actions) => onApprove(data, actions)}
		/>
	);
}

export default PaypalButton;
