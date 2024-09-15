const url = "https://reqres.in/api/users";
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data.data[1].email));
