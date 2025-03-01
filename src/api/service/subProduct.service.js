import axiosInstance from '../axiosInstance';

const subProductService = {
  getSubProducts: () => axiosInstance.get('/subproducts'),
  // getSubProductById: (id) => axiosInstance.get(`/subproducts/${id}`),
};

export default subProductService;
