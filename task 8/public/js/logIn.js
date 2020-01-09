import {showUsers} from './module.js';


showUsers();

 function CreatUserForLogIn(email, password) {
 	this.email = email;
 	this.password = password;
 }

 function dataFromForm() {
 	let email = form.email.value;
 	let password =form.password.value;

 	let user = new CreatUserForLogIn(email, password);
 	return user;
 }

 function logIn() {
 	const urlLogin = 'http://localhost:3000/api/users/login';
 	const headers = {
 		'Content-Type': 'application/json',
 	}
 	let user = dataFromForm();

 	return fetch(urlLogin, {
 		method: "POST",
 		body: JSON.stringify(user),
 		headers: headers,
 	}).then(response => {
 		return response.json();
 	})
 }


btn_logIn.onclick = () => {
	logIn().then(data => {
		console.log(data);
	})
	.catch(err => console.log(err))
}
