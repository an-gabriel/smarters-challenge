const app = require("./commons/app");
const config = require("./commons/environment");

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
