// Add your code here
const submitData = (name, email) => {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(object => {
      const idElement = document.createElement('div');
      idElement.textContent = `User ID: ${object.id}`;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      const errorElement = document.createElement('div');
      errorElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElement);
    });
};