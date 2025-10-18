import axios from "axios";

export default async function getImagesByQuery(q, page) {
  
  const params = new URLSearchParams({
    key: '52741134-5926d2746c8ce75ed1523309f',
    q,
    image_type: "photo",
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  });
  
  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  
  return response.data;

}