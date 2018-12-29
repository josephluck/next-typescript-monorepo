import axios from "axios";
import { Models } from "./server";

const baseURL = "http://localhost:5000";

const instance = axios.create({
  baseURL
});

export const apiClient = {
  posts: {
    async getListing(): Promise<Models.Post[]> {
      const { data } = await instance.get("/posts");
      return data;
    }
  }
};
