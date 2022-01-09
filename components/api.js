const express = require("express");

const fatAPI = new require("fatsecret")(
  "21d1868aded646c4abb659642ad75f81",
  "60e12648f8174d7dab01bcb2d4762b36"
);
const app = express();

app.get("/foods/search", async (req, res, next) => {
  try {
    const results = await fatAPI.method("foods.search", {
      search_expression: req.query.expression,
      page_number: req.query.page,
      max_results: 30,
    });
    res.json(results);
  } catch (err) {
    next(err);
  }
});

app.listen(1337, () => {
  console.log("listening on 1337");
});
