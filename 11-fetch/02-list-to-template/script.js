
        document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);
    
        function fetchUserData(){
            fetch('https://jsonplaceholder.typicode.com/users/+ '/' + id')
                .then(response => response.json())
                .then(users => {
                    let output = '<h2>Lists of Users</h2>';
                    output += '<ul>';
                    users.forEach(function(user) {
                        output += `
                            <li>
                                ${user.name}
                            </li>
                        `;
                    });
                    output += '</ul>'
                    document.getElementById("response").innerHTML = output;
                });
        }
