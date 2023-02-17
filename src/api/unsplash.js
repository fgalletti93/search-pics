import axios from "axios";

export const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID c8Z5MfA4ZCB71XZFsHrDZrR1WXqJGxQ7buH2MMINpXo",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
