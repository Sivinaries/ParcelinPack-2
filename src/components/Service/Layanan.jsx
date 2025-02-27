import services from "../../data/services"
import Card from "../Card";

function Layanan() {
  return (
    <div className="p-6 sm:p-10 my-10">
      <h1 className="text-3xl font-bold text-center mb-6">Layanan Kami</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {services.map((service, index) => (
          <Card key={index}
            img={`/images/service/${service.img}`}
            name={service.text}
            tags={service.tags}
            slug={service.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Layanan;
