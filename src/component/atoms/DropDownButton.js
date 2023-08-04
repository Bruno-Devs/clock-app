const DropDownButton = ({ visible, onClick }) => {
  return (
    <div className="bg-white rounded-[28px] mt-16 md:mt-24  h-[2.3rem] w-28 lg:mt-[45px] lg:ml-[727px]">
      <button onClick={onClick} className="pl-1 pt-1 flex justify-between">
        <p className="font-primaryFont text-[16px] font-bold leading-[28px] uppercase text-[#000] pl-2  self-center">
          {visible ? "less" : "more"}
        </p>
        <div className="px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="#303030" />
            <path d="M14 17L20 23L26 17" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default DropDownButton;
