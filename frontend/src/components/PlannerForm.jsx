import { useState } from "react";
import { motion } from "framer-motion";

import {
  generatePlan
} from "../api/wealthApi";

export default function PlannerForm() {

  const [loading, setLoading] =
    useState(false);

  const [plan, setPlan] =
    useState(null);

  const [form, setForm] =
    useState({
      age: 26,
      country: "USA",
      savings: 50000,
      risk: "moderate",
      timeline: 10
    });

  function handleChange(e) {

    const {
      name,
      value
    } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "age" ||
        name === "timeline" ||
        name === "savings"
          ? Number(value)
          : value
    }));
  }

  async function handleGenerate() {

    setLoading(true);

    try {

      const res =
        await generatePlan(
          form
        );

      setPlan(
        res.data
      );

    } catch (err) {

      console.log(
        "Planner error:",
        err
      );

    } finally {

      setLoading(false);
    }
  }

  return (

    <section
      className="
      max-w-6xl
      mx-auto
      mt-24
      px-6
    "
    >

      <div
        className="
        bg-gradient-to-br
        from-slate-900
        to-black
        text-white
        rounded-[40px]
        p-10
        shadow-2xl
      "
      >

        <h2
          className="
          text-4xl
          font-bold
        "
        >
          Personalized Wealth Simulation
        </h2>

        <p
          className="
          text-slate-300
          mt-3
          max-w-2xl
        "
        >
          Generate a sample
          diversified allocation
          based on your risk
          profile and timeline.
        </p>

        {/* Form Grid */}
        <div
          className="
          grid
          md:grid-cols-2
          gap-5
          mt-8
        "
        >

          {/* Age */}
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
            className="
            p-4
            rounded-xl
            text-black
            border-none
            outline-none
            "
          />

          {/* Country */}
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Country"
            className="
            p-4
            rounded-xl
            text-black
            outline-none
            "
          />

          {/* Savings */}
          <input
            type="number"
            name="savings"
            value={form.savings}
            onChange={handleChange}
            placeholder="Savings Amount"
            className="
            p-4
            rounded-xl
            text-black
            outline-none
            "
          />

          {/* Timeline */}
          <input
            type="number"
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            placeholder="Investment Timeline (Years)"
            className="
            p-4
            rounded-xl
            text-black
            outline-none
            "
          />

          {/* Risk */}
          <select
            name="risk"
            value={form.risk}
            onChange={handleChange}
            className="
            p-4
            rounded-xl
            text-black
            outline-none
            "
          >
            <option value="conservative">
              Conservative
            </option>

            <option value="moderate">
              Moderate
            </option>

            <option value="aggressive">
              Aggressive
            </option>
          </select>

        </div>

        {/* Button */}
        <button
          onClick={
            handleGenerate
          }

          className="
          mt-8
          bg-white
          text-black
          px-8
          py-4
          rounded-full
          font-semibold
          hover:scale-105
          transition
        "
        >
          {
            loading
              ? "Generating..."
              : "Generate Plan"
          }
        </button>

        {/* Results */}
        {plan && (

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            className="
            mt-10
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            p-8
            rounded-3xl
          "
          >

            <h3
              className="
              text-2xl
              font-bold
            "
            >
              Suggested Allocation
            </h3>

            <div className="mt-6 space-y-4">

              {Object.entries(
                plan.allocation
              ).map(
                ([key, value]) => (

                <div
                  key={key}

                  className="
                  flex
                  justify-between
                  border-b
                  border-white/10
                  pb-3
                "
                >

                  <span>
                    {key}
                  </span>

                  <span
                    className="
                    font-semibold
                  "
                  >
                    {value}
                  </span>

                </div>
              ))}

            </div>

            {/* Reasoning */}
            <div className="mt-8">

              <h4 className="font-bold text-lg">
                Why this recommendation?
              </h4>

              <p className="text-slate-300 mt-2">
                {plan.reasoning}
              </p>

            </div>

            {/* Risks */}
            <div className="mt-6">

              <h4 className="font-bold text-lg">
                Risks to consider
              </h4>

              <ul className="
              mt-3
              space-y-2
              text-slate-300
              list-disc
              ml-5
              ">

                {
                  plan.risks?.map(
                    (
                      risk,
                      idx
                    ) => (

                    <li key={idx}>
                      {risk}
                    </li>
                  ))
                }

              </ul>

            </div>

            {/* Disclaimer */}
            <div className="
            mt-8
            text-sm
            text-slate-400
            border-t
            border-white/10
            pt-5
            ">

              {
                plan.disclaimer
              }

            </div>

          </motion.div>
        )}

      </div>

    </section>
  );
}