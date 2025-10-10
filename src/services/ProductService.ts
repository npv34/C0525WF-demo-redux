import axios from "axios";

class ProductService {
    static async getAllProduct() {
        return await axios.get(" http://localhost:3001/products");
    }
}

export default ProductService;