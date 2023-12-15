import axios from "axios";

const BASE_URL = "https://developer-lostark.game.onstove.com";
const headers = {
  Accept: "application/json",
  Authorization: `bearer ${import.meta.env.VITE_LOSTARK_API_KEY}`,
};

export const getNewsEvents = async () => {
  return (
    await axios.get(`${BASE_URL}/news/events`, { method: "GET", headers })
  ).data;
};
