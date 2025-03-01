import { useParams } from "react-router-dom";
import Hero from "../../components/Product/Hero";
import Card from "../../components/Card";
import useSubProduct from "../../hooks/useSubProduct";

export default function SubProduct() {
  const { slug } = useParams()
  const { subProducts, loading, error } = useSubProduct()

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!subProducts || subProducts.length === 0) {
    return <p className="text-center text-gray-500">Tidak ada sub product tersedia.</p>;
  }

  return (
    <>
      <Hero />
      <div className="p-6 sm:p-10 my-10 space-y-6">
        <h1 className="text-3xl font-bold">{subProducts.subproduct}</h1>
        <p>{subProducts.desc}</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {subProducts.map((product, index) => (
            <Card
              key={index}
              img={`/images/product/${slug}/${product.img}`}
              name={product.subproduct}
              tags={[]}
              slug={product.slug}
              minOrder={product.min}
            />
          ))}
        </div>
      </div>
    </>
  );
}
