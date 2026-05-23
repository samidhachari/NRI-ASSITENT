import {
  motion
} from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">

      <motion.h1
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="
        text-6xl
        font-bold
        max-w-4xl
        leading-tight"
      >
        Smarter Wealth
        Decisions for
        NRIs
      </motion.h1>

      <p className="
      text-gray-600
      mt-6
      text-xl
      max-w-2xl">
        Explore USD → INR
        investing,
        mutual funds,
        taxation and
        personalized
        wealth guidance
        using AI.
      </p>

      <div className="mt-8 flex gap-4">

        <button
          className="
          bg-black
          text-white
          px-6
          py-4
          rounded-full"

          onClick={() =>
            document
            .getElementById(
            "chat-section"
            )
            ?.scrollIntoView({
            behavior:
            "smooth"
            })
            }
        >
          Start Exploring
        </button>

        <button
          className="
          border
          px-6
          py-4
          rounded-full"

          onClick={() =>
            document
            .getElementById(
            "compare-section"
            )
            ?.scrollIntoView({
            behavior:
            "smooth"
            })
            }
        >
          Compare Investments
        </button>

      </div>
    </section>
  );
}