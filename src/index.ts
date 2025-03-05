import { server } from "./server/Server.js";

let port = process.env.PORT || 3333;
server.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
