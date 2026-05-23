import {
  useState
} from "react";

import {
  compareInvestment
} from "../api/wealthApi";

import {
  motion
} from "framer-motion";

export default function CompareCard() {

  const [amount,
    setAmount] =
    useState(50000);

  const [risk,
    setRisk] =
    useState("Moderate");

  const [timeline,
    setTimeline] =
    useState(10);

  const [data,
    setData] =
    useState(null);

  async function handleCompare() {

    const res =
      await compareInvestment({
        amount,
        risk,
        timeline,
        country: "USA"
      });

    setData(res.data);
  }

  return (
    <section id="compare-section" className="max-w-6xl mx-auto mt-24">

      <div className="
      bg-white/70 backdrop-blur-xl
      rounded-[32px]
      p-8
      shadow-lg">

        <h2 className="
        text-4xl
        font-bold">
          Compare Investment Paths
        </h2>

        <p className="
        text-slate-500
        mt-2">
          Explore how your money could grow.
        </p>

        <div className="
        grid
        md:grid-cols-3
        gap-4
        mt-8">

          <input
            type="number"
            value={amount}
            onChange={(e)=>
              setAmount(
                e.target.value
              )
            }
            placeholder="Amount"
            className="
            p-4
            rounded-xl
            border"
          />

          <select
            className="
            p-4
            border
            rounded-xl"

            onChange={(e)=>
              setRisk(
                e.target.value
              )
            }
          >
            <option>
              Conservative
            </option>

            <option>
              Moderate
            </option>

            <option>
              Aggressive
            </option>
          </select>

          <input
            type="number"
            value={timeline}
            onChange={(e)=>
              setTimeline(
                e.target.value
              )
            }
            className="
            p-4
            rounded-xl
            border"
          />
        </div>

        <button
          onClick={
            handleCompare
          }

          className="
          mt-6
          bg-black
          text-white
          px-6
          py-3
          rounded-full"
        >
          Compare
        </button>

        {data && (

          <motion.div
            initial={{
              opacity:0,
              y:20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            className="
            grid
            md:grid-cols-3
            gap-5
            mt-10"
          >

            {
              data.scenarios
                .map(
                  (
                    item,
                    index
                  ) => (

                <div
                  key={index}

                  className="
                  bg-slate-50
                  p-6
                  rounded-3xl
                  border"
                >

                  <h3 className="
                  text-2xl
                  font-bold">
                    {
                      item.strategy
                    }
                  </h3>

                  <p className="
                  mt-3
                  text-green-600
                  font-semibold">
                    {
                      item.expected_return
                    }
                  </p>

                </div>
              ))
            }

          </motion.div>
        )}

      </div>
    </section>
  );
}