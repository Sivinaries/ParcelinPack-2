import axiosInstance from '../axiosInstance';

const productService = {
  getProducts: () => axiosInstance.get('/products'),
  // getProductById: (id) => axiosInstance.get(`/products/${id}`),
};

export default productService;
