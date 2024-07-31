import PropTypes from "prop-types";
import { useContext } from "react";
import { AnimateContext } from "../context/AnimateContext";

export const QuoteAuthor = ({ author }) => {
  const { animation } = useContext(AnimateContext);
  return (
    <div className="flex-1 flex justify-end my-5">
      <p
        className={`font-normal text-xl ${animation ? "animate-pulse" : ""} `}
        id="author"
      >
        -{author}
      </p>
    </div>
  );
};

QuoteAuthor.propTypes = {
  author: PropTypes.string.isRequired,
};
