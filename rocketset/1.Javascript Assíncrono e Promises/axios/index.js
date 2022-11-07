import axios from "axios";

axios.get("https://api.github.com/users/mardoqueu").then((res) => {
  console.log(res.data);
});
