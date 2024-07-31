import PropTypes from "prop-types";
import "../index.css";
import { QuoteText } from "./QuoteText";
import { QuoteAuthor } from "./QuoteAuthor";
import { QuoteActions } from "./QuoteActions";
import { QuoteFooter } from "./QuoteFooter";

export const Quote = ({ item, handleClick }) => {
  const { quote, author } = item;
  return (
    <>
      <div
        className="bg-white w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto text-wrap flex flex-col rounded-3xl shadow-xl shadow-black pt-10 px-10 md:px-10 pb-6"
        id="quote-box"
      >
        <QuoteText quote={quote} />
        <QuoteAuthor author={author} />
        <QuoteActions handleClick={handleClick} />
      </div>

      <QuoteFooter />
    </>
  );
};

Quote.propTypes = {
  item: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};
