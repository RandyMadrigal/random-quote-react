import PropTypes from "prop-types";


export const QuoteText = ({quote}) =>{

    
    return         <div className="flex-1 flex justify-center items-center text-center">
    <p className=" text-2xl" id="text">
      <span className="mr-2">
        <i className="fa fa-quote-left"> </i>
      </span>
      {quote}
      <span className="ml-2">
        <i className="fa fa-quote-right"> </i>
      </span>
    </p>
  </div>
}

QuoteText.propTypes = {    
      quote: PropTypes.string.isRequired,
};
  