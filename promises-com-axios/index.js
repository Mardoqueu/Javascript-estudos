import axios from "axios";

axios
  .get("https://api.github.com/users/mardoqueu")
  .then((respose) => axios.get(respose.data.repos_url))
  .then((repos) => console.log(repos.data))
  .catch((error) => console.log(error));
