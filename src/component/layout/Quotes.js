import { useState, useEffect} from "react";
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
    <div>
      <div className="text-white pl-[20px] pt-[80px]  flex flex-row md:text-[18px] md:w-[33.7rem] md:pl-[4rem] lg:pl-[10rem] lg:pt-[56px]">
        <div className=" flex flex-col flex-wrap">
          <Quote quote={quote} />
          <Author author={author} />
        </div>
        <div className="pl-2 md:w-[16.6px]">
          <RefreshButton />
        </div>
      </div>
    </div>
  );
};

export default Quotes;
