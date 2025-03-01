import { useState } from "react";
import Searchbar from "../../components/Product/Searchbar";
import Hero from "../../components/Product/Hero";
import Card from "../../components/Card";
import useProduct from "../../hooks/useProduct";

export default function Product() {
  const [searchTerm, setSearchTerm] = useState("");
  const { products, error, loading } = useProduct()

  const filteredProducts = products?.filter((product) =>
    product.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500">Tidak ada product tersedia.</p>;
  }

  return (
    <>
      <Hero />
      <div className="flex flex-col justify-center items-center p-6 sm:p-10 my-10 space-y-6">
        <div className="w-full md:w-1/2">
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {filteredProducts.map((product, index) => (
            <Card
              key={index}
              img={`/images/${product.img}`}
              name={product.product}
              tags={[]}
              slug={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
