const { Schema, model } = require("mongoose");
const newsSchema = new Schema({
  title: String,
  subtitle: String,
  field_credits: String,
  field_category: String,
  emotion: String,
  field_img_primary: String,
});

module.exports = News = model("News", newsSchema);
