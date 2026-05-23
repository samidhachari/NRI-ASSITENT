import {
  useEffect,
  useState
} from "react";

import {
  fetchFaqs
} from "../api/wealthApi";

export default function FAQSection() {

  const [faqs,
    setFaqs] =
    useState([]);

  useEffect(()=>{

    async function load() {

      const res =
        await fetchFaqs();

      setFaqs(
        res.data
      );
    }

    load();

  },[]);

  return (

    <section className="
    max-w-6xl
    mx-auto
    mt-24
    mb-32">

      <h2 className="
      text-4xl
      font-bold">
        Wealth FAQs
      </h2>

      <div className="
      grid
      md:grid-cols-3
      gap-5
      mt-10">

        {
          faqs.map(
            (
              faq,
              idx
            ) => (

            <div
              key={idx}

              className="
              bg-white/70 backdrop-blur-xl
              rounded-3xl
              shadow-md
              p-6"
            >

              <h3 className="
              font-bold
              text-lg">
                {
                  faq.question
                }
              </h3>

              <p className="
              text-slate-500
              mt-3">
                {
                  faq.answer
                }
              </p>

            </div>
          ))
        }

      </div>

    </section>
  );
}