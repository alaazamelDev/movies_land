import { API_URL } from "../configs/constatns";

export const getMovie = async (title) => {
  const res = await fetch(`${API_URL}&s=${title}`);
  const data = await res.json();

  return data;
};
