import { toProducModel } from '../models/product_model';
import BaseUrl from '../utils/BaseUrl';

const Url = BaseUrl;

const productService = {

    // geting all products from dummyjsonapi
    async getAllProducts() {
        const response = await fetch(Url);

        if (!response.ok) {
            throw new Error("Fail Fetching API");
        }

        const json = await response.text();

        return toProducModel(json);
    },

    async getProduct(id) {
        const product = await fetch(`${Url}/${id}`);

        if (!product.ok) {
            throw new Error("Failed to fetch product");
        }

        return await product.json();
    },

    async search(keyword) {
        const response = await fetch(`${Url}/search?q=${keyword}`);

        return await response.json();
    }
};

export default productService;