import express from 'express';

const app = express();

const port = process.env.PORT || 3001;

//middlewares
app.use(express.json())

//settings
(async function main() {
  await app.listen(port, () => console.log("Server listen in port:", port))
  await connect()
})();

//Routes
app.use(router)
// function createServer() {
//   throw new Error('implementar!')
// }
