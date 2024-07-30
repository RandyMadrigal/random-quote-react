import PropTypes from "prop-types";

export const QuoteAuthor = ({author}) =>{

    return         <div className="flex-1 flex justify-end my-5">
    <p className="font-normal text-xl" id="author">
      -{author}
    </p>
  </div>
}

QuoteAuthor.propTypes = {    
    author: PropTypes.string.isRequired,
};