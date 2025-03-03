import { useEffect, useState } from 'react';
import subProductService from '../api/service/subProduct.service';

const useSubProductById = (id) => {
  const [subProduct, setSubProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await subProductService.getSubProductById(id);
        setSubProduct(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [id]);

  return { subProduct, loading, error };
};

export default useSubProductById;
