import PropTypes from "prop-types";

export const Quote = ({ item, handleClick }) => {
  const { quote, author } = item;
  return (
    <>
      <div className="bg-white w-6/12 h-auto text-wrap flex flex-col rounded-3xl shadow-xl shadow-black pt-10 px-10 pb-6">
        <div className="flex-1 flex justify-center items-center text-center ">
          <p className="font-bold text-2xl">
            {quote}
            <span>&quot;</span>
          </p>
        </div>

        <div className="flex-1 flex justify-end my-5">
          <p className="font-normal text-xl"> -{author} </p>
        </div>

        <div className="flex-1 flex justify-end">
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white capitalize font-bold py-2 px-4 border border-blue-700 rounded"
          >
            next
          </button>
        </div>
      </div>
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
