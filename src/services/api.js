import axios from "axios";

// const BASE_URL = "https://api.unsplash.com/search/photos";
// const ACCESS_KEY = "Opo1OXeY11YPl_Vh5V07W2pdWLleW6w5iS2PMl8kQyE";
// axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (query, page, perPage) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=Opo1OXeY11YPl_Vh5V07W2pdWLleW6w5iS2PMl8kQyE`,
    {
      params: {
        query,
        page,
        per_page: perPage,
      },
    }
  );
  return response.data;
};
