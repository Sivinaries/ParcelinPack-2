import services from "../../data/services"
import Card from "../Card";

function Layanan() {
  return (
    <div className="p-6 sm:p-10">
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
