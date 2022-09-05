import express from "express";

const app = express();

app.use("/", (request, response) => {
  return response.json({
    message: "Hello World!",
  });
});

app.listen(3000, () => console.log("Server is running at port 3000"));
