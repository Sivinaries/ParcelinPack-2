import { useParams } from "react-router-dom";
import products from "../../data/products";
import Hero from "../../components/Product/Hero";
import Card from "../../components/Card";

export default function SubProduct() {
  const { slug } = useParams()
  const product = products.find((product) => product.slug === slug)

  return (
    <>
      <Hero />
      <div className="p-6 sm:p-10 my-10 space-y-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p>{product.desc}</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {product['sub-products'].map((p, index) => (
            <Card
              key={index}
              img={`/images/product/${slug}/${p.img}`}
              name={p.name}
              tags={p.tags}
              slug={p.slug}
              minOrder={p.minOrder}
            />
          ))}
        </div>
      </div>
    </>
  );
}
