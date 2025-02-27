import team1 from "../../assets/images/team/team1.png";
import team2 from "../../assets/images/team/team2.jpg";
import team3 from "../../assets/images/team/team3.png";
import team4 from "../../assets/images/team/team4.jpg";
import team5 from "../../assets/images/team/team5.jpg";

function Team() {
  return (
    <div className="flex items-center justify-center md:p-12 bg-white mx-auto w-screen-lg md:h-screen">
      <div className="flex flex-col gap-y-4 h-full">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-8">Tim Kami</h1>
        </div>
        <div className="md:hidden flex flex-col items-center justify-center px-12 gap-y-8">
          <div className="h-1/2 w-full bg-gray-200 overflow-hidden">
            <img src={team1} alt="" className="w-full rounded-lg" />
          </div>
          <div className="h-1/2">
            <p className="text-sm">
              Di Parcelinpack, kami percaya bahwa kemasan terbaik lahir dari
              kolaborasi para ahli. Tim kami terdiri dari tenaga profesional
              yang berpengalaman, kreatif, dan berdedikasi, siap membantu
              menciptakan packaging yang sesuai dengan kebutuhan bisnis Anda.
              Dari konsultasi hingga produksi, kami hadir untuk memastikan
              kualitas terbaik di setiap tahap proses.
            </p>
          </div>
        </div>
        <div className="hidden md:flex gap-2 h-full">
          <div className="w-3/4 flex flex-col gap-2">
            <div className="h-1/2 flex gap-2">
              <div className="w-2/5 h-full">
                <p className="text-2xl">
                  Di Parcelinpack, kami percaya bahwa kemasan terbaik lahir dari
                  kolaborasi para ahli. Tim kami terdiri dari tenaga profesional
                  yang berpengalaman, kreatif, dan berdedikasi, siap membantu
                  menciptakan packaging yang sesuai dengan kebutuhan bisnis
                  Anda. Dari konsultasi hingga produksi, kami hadir untuk
                  memastikan kualitas terbaik di setiap tahap proses.
                </p>
              </div>
              <div
                className="w-2/5 h-full overflow-hidden"
                style={{
                  backgroundImage: `url(${team2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="w-1/5 h-full overflow-hidden"
                style={{
                  backgroundImage: `url(${team3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="h-1/2 flex gap-2">
              <div
                className="w-2/3 h-full overflow-hidden"
                style={{
                  backgroundImage: `url(${team4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="w-1/3 h-full overflow-hidden"
                style={{
                  backgroundImage: `url(${team5})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
          <div
            className="w-1/4 h-full overflow-hidden"
            style={{
              backgroundImage: `url(${team1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Team;
