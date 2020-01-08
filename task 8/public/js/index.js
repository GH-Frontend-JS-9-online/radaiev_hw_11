'use strict';

// let url = 'http://localhost:3000/api/users';

// function sendRequest(method, url, body = null) {
// 	const headers = {
// 		'Content-Type': 'application/json',
// 	}

// 	return fetch(url, {
// 		method: method,
// 		body: JSON.stringify(body),
// 		headers: headers
// 	}).then(response => {
// 		return response.json();
// 	});
// }

// const body = {
// 	email: 'fffff@gekHub.com',
// 	name: 'pavel',
// 	password: '26444444',
// };	


// sendRequest('GET', url)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));

// sendRequest('POST', url, body)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));


fetch('http://localhost:3000/db')
	.then(response => response.json())
	.then(data => data.users)
	.then(users => {
		let table = document.querySelector('.table');

		for(let item of users){
		let tr = document.createElement('tr');
		tr.innerHTML = `<td>${item.name}</td><td>${item.email}</td>`;
		table.append(tr);	
			//console.log(item);
		}
	})


function CreateNewUser(name, email, password) {
	this.name = name;
	this.email = email;
	this.password = password;
}

function getData() {
	let name = form.name.value;
	let email = form.email.value;
	let password =form.password.value;
	
	let user = new CreateNewUser(name, email, password);
	return user;
}



let url = 'http://localhost:3000/api/users';

 function sendRequest(method, url) {
	const headers = {
		'Content-Type': 'application/json',
	}

	let user = getData();


	//if(user.name != "") {
		return fetch(url, {
			method: method,
			body: JSON.stringify(user),
			headers: headers
		}).then(response => {
			return response.json();
		});
	// } else {
	// 	return false;
	// }
}


	
 btn.onclick = () => {
 	sendRequest("POST", url)
	.then(data => console.log(data))
 }