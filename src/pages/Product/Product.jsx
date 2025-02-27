import { useState } from "react";
import Searchbar from "../../components/Product/Searchbar";
import products from "../../data/products";
import Hero from "../../components/Product/Hero";
import Card from "../../components/Card";

export default function Product() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              img={`/images/product/${product.img}`}
              name={product.name}
              tags={product.tags}
              slug={product.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
}
