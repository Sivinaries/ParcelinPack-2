import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import background from "../../assets/images/campaign/background.png";

export default function Campaign() {
  const [timeRemaining, setTimeRemaining] = useState(24 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = seconds % 60;

    return `${days.toString().padStart(2, "0")}:${hours
      .toString()
      .padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="h-2/4 md:h-screen w-full p-2 md:px-16 md:py-24">
      <div
        className="grid place-items-center h-full w-full bg-cover bg-center rounded-xl relative"
        style={{
          backgroundImage: `url('${background}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 rounded-xl"></div>
        <div className="py-8 md:py-0 text-white text-center text-xl md:text-4xl z-10 space-y-6">
          <div className="">
            <p>Promo khusus hari ini</p>
            <u>GRATIS ONGKIR</u>
            <p>Keseluruh Indonesia!</p>
          </div>
          <ClockDisplay time={formatTime(timeRemaining)} />
          <button className="text-xl bg-red-500 rounded-full px-4 py-2">
            Langsung hubungi kami!
          </button>
        </div>
      </div>
    </div>
  );
}

TimeDisplay.propTypes = {
  time: PropTypes.string.isRequired,
};

function TimeDisplay({ time }) {
  return (
    <div className="flex items-center text-white space-x-1 md:space-x-2 text-2xl md:text-6xl font-bold">
      <div className="backdrop-blur border rounded-xl p-2 md:p-4">{time[0]}</div>
      <div className="backdrop-blur border rounded-xl p-2 md:p-4">{time[1]}</div>
    </div>
  );
}

function TimeDot() {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <div className="rounded-full p-1 md:p-2 border"></div>
      <div className="rounded-full p-1 md:p-2 border"></div>
    </div>
  );
}

ClockDisplay.propTypes = {
  time: PropTypes.string.isRequired,
};

function ClockDisplay({ time }) {
  const times = time.split(":");

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex space-x-1 md:space-x-4 text-xl md:text-3xl font-normal">
        <div className="flex flex-col items-center">
          <TimeDisplay time={times[0]} />
          <div>Hari</div>
        </div>
        <TimeDot />
        <div className="flex flex-col items-center">
          <TimeDisplay time={times[1]} />
          <div>Jam</div>
        </div>
        <TimeDot />
        <div className="flex flex-col items-center">
          <TimeDisplay time={times[2]} />
          <div>Menit</div>
        </div>
        <TimeDot />
        <div className="flex flex-col items-center">
          <TimeDisplay time={times[3]} />
          <div>Detik</div>
        </div>
      </div>
    </div>
  );
}
