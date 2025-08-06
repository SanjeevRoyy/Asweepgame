import { motion, easeOut } from "framer-motion";

const Home = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: easeOut,
      },
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: easeOut,
      },
    },
  };

  // Fade + slide up for other items
  const fadeSlideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <div className="border border-gray-300 rounded-xl backdrop-blur-sm p-4 sm:p-8 md:p-12">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 min-w-0">
        {/* Left Content */}
        <motion.div
          className="md:flex-1 max-w-full md:max-w-[750px] min-w-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-secondary font-bold text-4xl sm:text-5xl md:text-[60px] whitespace-nowrap m-0 leading-tight"
            variants={slideFromLeft}
          >
            Spin With
          </motion.p>

          <motion.p
            className="
              text-[40px] sm:text-5xl md:text-[72px] 
              font-black 
              bg-gradient-to-r from-[#6d68f7] to-[#b84f99] 
              bg-clip-text text-transparent 
              mt-2 leading-tight
              max-w-full
              md:whitespace-nowrap
            "
            variants={slideFromRight}
          >
            A ONE TIME CODE
          </motion.p>

          <motion.ul
            className="list-disc pl-5 space-y-2 text-primary text-base sm:text-lg mt-6 max-w-full md:max-w-[450px]"
            variants={fadeSlideUp}
          >
            <li>Enter the code to unlock your spin on the prize wheel.</li>
            <li>Each code grants 1 spin — spin the wheel and try your luck!</li>
            <li>
              Non-deposit players can request a code every 2 hours for 24 hours.
            </li>
            <li>
              Deposit players can request a code every 2 hours for 3 days.
            </li>
            <li>
              <strong>Contact us via WhatsApp</strong> using the icon below to
              get your unique 5-digit spin code.
            </li>
          </motion.ul>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex flex-col items-center md:items-center gap-6 md:flex-[0.5] min-w-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="png/wheel.png"
            alt="wheel"
            className="w-[180px] sm:w-[220px] md:w-[280px] object-contain"
            variants={fadeSlideUp}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: easeOut }}
          />

          <motion.p
            className="font-bold text-secondary text-custom text-sm sm:text-base md:text-[16px] text-center"
            variants={fadeSlideUp}
          >
            PLACE THE 5 DIGIT CODE HERE
          </motion.p>

          <motion.div className="flex gap-2" variants={fadeSlideUp}>
            {[0, 1, 2, 3, 4].map((i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg sm:text-xl font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d68f7] text-secondary"
                onChange={(e) => {
                  const next = document.getElementById(`pin-${i + 1}`);
                  if (e.target.value && next) next.focus();
                }}
                id={`pin-${i}`}
              />
            ))}
          </motion.div>

          <button className="button-primary w-full max-w-[240px]">
            <span className="button-content text-base sm:text-lg">
              SPIN WHEEL
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
