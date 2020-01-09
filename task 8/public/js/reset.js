
import {showUsers} from './module.js';


showUsers();

const urlReset = 'http://localhost:3000/api/users/reset_password';

function CreateUserForConfirmPass(email, password, confirmationPassword) {
	this.email = email;
	this.password = password;
	this.confirmationPassword = confirmationPassword;
}

function dataFromForm() {
	let email = form.email.value;
	let password = form.password.value;
	let confirmationPassword = form.confirmPassword.value;

	let user = new CreateUserForConfirmPass(email, password, confirmationPassword);
	return user;
}

function sendRequest() {
	const headers = {
		'Content-Type': 'application/json',
	}

	let body = dataFromForm();

	return fetch(urlReset, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: headers,
	}).then(response => {
		return response.json();
	})
}

btn_reset.onclick = () => {
	sendRequest().then(data => console.log(data));
}
