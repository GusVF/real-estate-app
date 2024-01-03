import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'bcb0b50cd1mshc128b86cd332e16p15b495jsn36a6eff1e70c'
    }
  });
  return data;
}