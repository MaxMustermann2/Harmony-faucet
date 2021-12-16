import app from "./server.js";
import { port } from "./constants.js";

// To catch the unhandledRejection in app
process.on('unhandledRejection', (err) => {
  console.error("UnhandleRejection", err.message);
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
