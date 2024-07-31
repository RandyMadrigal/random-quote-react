import { useState } from "react";
import { QuoteContainer } from "./components/QuoteContainer";
import { AnimateContext } from "./context/AnimateContext";

export const App = () => {
  const [animation, setAnimation] = useState(false);

  return (
    <AnimateContext.Provider value={{ animation, setAnimation }}>
      <QuoteContainer />;
    </AnimateContext.Provider>
  );
};
