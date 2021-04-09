import { createClient } from "contentful";

//const contentful = require("contentful");

export default createClient({
  space: REACT_APP_API_SPACE,
  REACT_APP_ACCESS_TOKEN:
    "61dda3b65d92ab91decdcde3f89f5d268746742a792e27b9981a33a1a76c8c7f",
});
