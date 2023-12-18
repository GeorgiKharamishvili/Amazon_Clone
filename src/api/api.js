import axios from "axios";


export async function productsData() {
  const products = await axios.get(
    'https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/products'
  );
  return products;
}
