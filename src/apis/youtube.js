import axios from "axios";

const KEY = "AIzaSyBVN4uNnL7YcnW9psYn2KG-f6xs6gYz-6Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
