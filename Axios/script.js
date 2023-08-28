const axios = require("axios");
axios
  .get("https://example-endpoint.com/api")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
