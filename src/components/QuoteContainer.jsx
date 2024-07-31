import { useState, useEffect, useContext } from "react";
import { Quote } from "../components/Quote";
import { getQuotes } from "../services/Api";
import { NextQuote } from "../helpers/NextQuote";
import { AnimateContext } from "../context/AnimateContext";
import "../index.css";

export const QuoteContainer = () => {
  const [data, setData] = useState(null);
  const [next, setNext] = useState(0);
  const [totalQuotes, setTotalQuotes] = useState(0);

  const { setAnimation } = useContext(AnimateContext);

  const handleClick = () => {
    setAnimation(true);
    setTimeout(() => {
      setNext(NextQuote(totalQuotes));
      setAnimation(false);
    }, 1200);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getQuotes(next);

        if (res.Quote) {
          setData(res.Quote);
        }

        if (setTotalQuotes !== undefined || null) {
          setTotalQuotes(res.totalQuotes);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [next]);

  return (
    <div className="bg-gray-700 flex flex-col items-center justify-center min-h-screen p-4">
      {data && <Quote item={data} handleClick={handleClick} />}
    </div>
  );
};
