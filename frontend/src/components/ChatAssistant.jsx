import {
  useState
} from "react";

import {
  askQuestion
} from "../api/wealthApi";

export default function ChatAssistant() {

  const [question,
    setQuestion] =
    useState("");

  const [answer,
    setAnswer] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  async function handleAsk() {

    setLoading(true);

    try {

      const res =
        await askQuestion(
          question
        );

      setAnswer(
        res.data.response
      );

    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  return (
    <section id="chat-section" className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-lg mt-20">

      <h2 className="
      text-3xl
      font-bold">
        Ask AI Wealth Assistant
      </h2>

      <textarea
        value={question}
        onChange={(e) =>
          setQuestion(
            e.target.value
          )
        }

        placeholder="
Should I invest USD
in India?"
        className="
        w-full
        mt-5
        p-4
        border
        rounded-xl
        min-h-[120px]"
      />

      <button
        onClick={
          handleAsk
        }
        className="
        mt-5
        bg-black
        text-white
        px-5
        py-3
        rounded-full"
      >
        {
          loading
            ? "Analyzing Portfolio..."
            : "Ask"
        }
      </button>

      {answer && (
        <div className="
        mt-8
        p-5
        bg-slate-100
        rounded-xl">

          <div className="
            whitespace-pre-line
            leading-8
            text-slate-700
            ">
            {answer}
            </div>

        </div>
      )}
    </section>
  );
}