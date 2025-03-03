import { useEffect, useState } from 'react';
import productService from '../api/service/product.service';

const useProductById = (id) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await productService.getProductById(id);
        setProduct(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [id]);

  return { product, loading, error };
};

export default useProductById;
