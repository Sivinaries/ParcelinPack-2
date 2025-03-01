import useCategory from "../../hooks/useCategory";
import Card from "../Card";

function Layanan() {
  const { categories, error, loading } = useCategory()

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!categories || categories.length === 0) {
    return <p className="text-center text-gray-500">Tidak ada layanan tersedia.</p>;
  }

  console.log(categories)

  return (
    <div className="p-6 sm:p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {categories.map((category, index) => (
          <Card key={index}
            img={`/images/${category.img}`}
            name={category.kategori}
            tags={[]}
            slug={category.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Layanan;