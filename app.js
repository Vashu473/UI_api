const express = require("express");
const app = express();
const PORT = process.env.PORT || 80;
const axios = require("axios");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
});
app.post("/otp", async (req, res) => {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:3000/api/v1/users/getotp",
      data: req.body,
      withCredentials: true,
    });
    return res.send(response?.data);
  } catch (error) {
    res.send("err", error);
  }
});
app.post("/signup", async (req, res) => {
  const response = await axios({
    method: "post",
    url: "http://localhost:3000/api/v1/users/signup",
    data: req.body,
    withCredentials: true,
  });
  return res.send(response?.data);
});
app.listen(PORT, () => {
  console.log("start");
});
