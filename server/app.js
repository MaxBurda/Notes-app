import express from 'express';

const app = express();

const server = app.listen(8080, () =>{
  console.log(`server is up and running on port 8080`);
});
