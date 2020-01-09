function showUsers() {
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
}

export {showUsers};