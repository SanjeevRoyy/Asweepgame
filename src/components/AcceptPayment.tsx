import { FaTelegramPlane } from "react-icons/fa";
import { IoIosCall, IoIosInformation } from "react-icons/io";

const img = [
  "payment/chime.png",
  "payment/apple.png",
  "payment/venmo.png",
  "payment/bitcoin.png",
  "payment/dollar.png",
  "payment/paypal.png",
];

const AcceptPayment = () => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-[720px] mx-auto">
      {/* Title */}
      <p className="text-center text-gradient text-secondary text-[18px] sm:text-[22px] font-extrabold">
        WE ACCEPT
      </p>

      {/* Payment Icons */}
      <div className="flex flex-wrap justify-center items-center gap-4 px-2 sm:px-4 mt-4">
        {img.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Payment Method"
            className="w-10 sm:w-14 md:w-16 object-contain"
          />
        ))}
      </div>

      {/* Connect with us title */}
      <p className="text-secondary text-[18px] sm:text-[20px] font-semibold text-center mt-6">
        CONNECT WITH US
      </p>

      {/* Social Icons */}
      <div className="flex gap-4 justify-center mt-4">
        <div className="circle-button w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
          <FaTelegramPlane size={20} className="text-black" />
        </div>
        <div className="circle-button w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
          <IoIosCall size={20} className="text-black" />
        </div>
        <div className="circle-button w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
          <IoIosInformation size={32} className="text-black" />
        </div>
      </div>

      {/* Copyright */}
      <p className="text-secondary text-[14px] sm:text-[16px] mt-4 text-center font-regular">
        © Copyright 2025, All Rights Reserved by{" "}
        <strong>Acesweeps.com</strong>
      </p>
    </div>
  );
};

export default AcceptPayment;
