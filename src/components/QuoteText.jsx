import PropTypes from "prop-types";
import { useContext } from "react";
import { AnimateContext } from "../context/AnimateContext";

export const QuoteText = ({ quote }) => {
  const { animation } = useContext(AnimateContext);

  return (
    <div className="flex-1 flex justify-center items-center text-center">
      <p className={`text-2xl ${animation ? "animate-pulse" : ""} `} id="text">
        <span className="mr-2">
          <i className="fa fa-quote-left"> </i>
        </span>
        {quote}
        <span className="ml-2">
          <i className="fa fa-quote-right"> </i>
        </span>
      </p>
    </div>
  );
};

QuoteText.propTypes = {
  quote: PropTypes.string.isRequired,
};
