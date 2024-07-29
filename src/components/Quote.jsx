import PropTypes from "prop-types";

const Quote = (props) => {
  const { quote, author } = props;
  return <> </>;
};

Quote.propTypes = {
  props: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Quote;
