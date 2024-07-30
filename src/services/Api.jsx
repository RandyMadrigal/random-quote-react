const URL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

export const getQuotes = async (numero) => {
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error("res isn´t ok");
    }

    const data = await res.json();

    return data.quotes[numero];
  } catch (err) {
    console.log(err);
    throw err;
  }
};