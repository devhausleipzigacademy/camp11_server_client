import "./style.css";
import axios from "axios";

axios
  .get("http://localhost:8080/todos")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
    if (err.response.status === 404) {
      document.body.innerHTML = "<h1>404 Not Found</h1>";
      return;
    }
    document.body.innerHTML = "<h1>Something went wrong</h1>";
  });

/* fetch("http://localhost:8080/todos", {
  method: "GET",
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* fetch("http://localhost:8080/todos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Learn Fetch API",
    completed: false,
  }),
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  }); */
