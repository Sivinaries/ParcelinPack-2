import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 relative overflow-hidden">
      <div
        className="absolute w-full h-full md:-left-10 md:-bottom-20 bg-no-repeat opacity-50 pointer-events-none"
        style={{
          backgroundImage: "url(/images/logo.png)",
          backgroundPosition: "bottom left",
          backgroundSize: "contain",
        }}
      />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 md:justify-items-center ps-6 md:ps-0 my-2 gap-y-6">
        <div className="col-span-1 md:col-span-4 space-y-4">
          <h6 className="font-bold">Parcelin Company</h6>
          <p className="text-sm">
            ©️ 2025 Parcelin Company. All rights reserved
          </p>
        </div>
        <div className="col-span-1 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6">
          <div className="col-span-1 space-y-4">
            <h6 className="font-bold">Perusahaan</h6>
            <ul className="text-sm space-y-2 text-slate-400">
              <li>
                <Link to={"/"}>
                  Beranda
                </Link>
              </li>
              <li>
                <Link to={"/about"}>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to={"/product"}>
                  Produk
                </Link>
              </li>
              <li>
                <Link to={"/portfolio"}>
                  Portofolio
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 space-y-4">
            <h6 className="font-bold">Layanan</h6>
            <ul className="text-sm space-y-2 text-slate-400">
              <li>
                <Link to={"/product"}>
                  Kemasan Produk
                </Link>
              </li>
              <li>
                <Link to={"/product"}>
                  Hampers & Corporate gift
                </Link>
              </li>
              <li>
                <Link to={"/product"}>
                  Merchandise
                </Link>
              </li>
              <li>
                <Link to={"/product"}>
                  PR Packaging
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 space-y-4">
            <h6 className="font-bold">Bantuan</h6>
            <ul className="text-sm space-y-2 text-slate-400">
              <li>Help Center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="col-span-1 space-y-4">
            <h6 className="font-bold">Ikuti Kami</h6>
            <ul className="text-sm space-y-2 text-slate-400">
              <li>
                <Link to={"https://warotator.parcelinpack.id/organik-fanpage-fb"}>
                  Facebook
                </Link>
              </li>
              <li>
                <Link to={"https://warotator.parcelinpack.id/organik-instagram"}>
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;