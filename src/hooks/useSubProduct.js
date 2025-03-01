import { useEffect, useState } from 'react';
import subProductService from '../api/service/subProduct.service';

const useSubProduct = () => {
  const [subProducts, setSubProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await subProductService.getSubProducts();
        setSubProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { subProducts, loading, error };
};

export default useSubProduct;
