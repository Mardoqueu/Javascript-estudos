import axios from "axios";

Promise.all([
  axios.get("https://api.github.com/users/mardoqueu"),
  axios.get("https://api.github.com/users/mardoqueu/repos")
])
  .then((respose) => {
    console.log(respose[0].data.login);
    console.log(respose[1].data.length);
  })
  .catch((err) => console.log(err.message));
