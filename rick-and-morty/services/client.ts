import axios from "axios";

const client = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default client;
