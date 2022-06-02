import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com", 
    headers: {
    Authorization: "Client-ID c8Z5MfA4ZCB71XZFsHrDZrR1WXqJGxQ7buH2MMINpXo",
  },
});
