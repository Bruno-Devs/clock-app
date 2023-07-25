import { useState, useEffect, Fragment } from "react";
import Quote from "../atoms/Quote";
import Author from "../atoms/Author";
import RefreshButton from "../atoms/RefreshButton";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const getQuotes = async () => {
      const res = await fetch("https://api.quotable.io/quotes/random");
      const [data] = await res.json();
      setQuote(data.content);
      setAuthor(data.author);
    };
    getQuotes();
  }, []);
  return (
    <Fragment>
      <div className="text-white pl-[2rem] pt-[80px] w-[20rem] flex flex-row md:w-[33.7rem] md:pl-[4rem]">
        <div className=" flex flex-col flex-wrap">
          <Quote quote={quote} />
          <Author author={author} />
        </div>
        <div className="pl-2 md:w-[16.6px]">
          <RefreshButton />
        </div>
      </div>
    </Fragment>
  );
};

export default Quotes;
