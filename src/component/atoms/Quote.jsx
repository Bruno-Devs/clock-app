const Quote = ({ quote }) => {
  return (
    <div className="font-primaryFont text-[12px] font-normal  leading-[22px] md:text-[18px] md:leading-[28px] md:w-[560px]">
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
