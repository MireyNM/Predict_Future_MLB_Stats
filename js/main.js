fetch('http://127.0.0.1:5000/',{
    method: "POST"
})
    .then((response) => response.json())
    .then((data) => console.log(data));