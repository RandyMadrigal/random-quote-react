import { useState, useEffect } from "react";
import { Quote } from "../components/Quote";
import { getQuotes } from "../services/Api";
import { NextQuote } from "../helpers/NextQuote";
import "../index.css";

export const QuoteContainer = () => {
  const [data, setData] = useState(null);
  const [next, setNext] = useState(0);
  const [totalQuotes,setTotalQuotes] = useState(0);

  const handleClick = () => {
    setNext(NextQuote(totalQuotes));
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getQuotes(next);
        setData(res.Quote);
        setTotalQuotes(res.totalQuotes)
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
