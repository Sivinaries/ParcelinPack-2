import { useParams } from "react-router-dom";
import MainSection from "../../components/Product/detail/MainSection";
import products from "../../data/products.json";
import Advantage from "../../components/Product/detail/Advantage";
import Card from "../../components/Card";

export default function Detail() {
  const { subSlug, slug } = useParams();
  const subProduct = products.find((product) => product.slug === slug);
  const product = subProduct["sub-products"].find(
    (product) => product.slug === subSlug
  );

  const path = `/images/product/${slug}/${subSlug}/`;

  return (
    <div className="flex flex-col gap-y-10 px-4 md:px-20">
      <MainSection
        name={product.name}
        price={product.price}
        desc={product.desc}
        minOrder={product.minOrder}
        tags={product.tags}
        images={product.detailImg}
        path={path}
      />

      {product.advantages.map((advantage, idx) => (
        <Advantage
          key={idx}
          image={product.detailImg[idx]}
          title={advantage.title}
          desc={advantage.desc}
          path={path}
          idx={idx}
        />
      ))}

      <div className="flex flex-col justify-center items-center gap-y-10 bg-gray-200 py-8">
        <h1 className="text-xl md:text-2xl">Temukan inspirasi dari kami</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              className="w-24 h-24 md:w-40 md:h-40 object-cover"
              src={`/images/product/inspired/inspired${i}.png`}
              alt={`inspired${i}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-y-10 py-4">
        <h1 className="text-xl md:text-2xl">Packaging lain</h1>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {products.slice(0, 4).map((p, idx) => (
            <Card
              key={idx}
              img={`/images/product/${p.img}`}
              name={p.name}
              slug={p.slug}
              tags={p.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}