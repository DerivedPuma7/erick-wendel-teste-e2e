// import Server from './server.js';
import { server1 as Server1, server2 as Server2 } from './server.js';

const server = Server1.listen(3000)
.on("listening", () => console.log(`running at ${server.address().port}`));

const server2 = Server2.listen(3030)
.on("listening", () => console.log(`running at ${server2.address().port}`));