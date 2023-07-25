import Quotes from "./component/layout/Quotes";
import WorldClock from "./component/layout/WorldClock";

const App = () => {
  return (
    <div className="bg-body bg-center bg-cover h-screen w-screen fixed">
      <div className="bg-[rgba(0,0,0,0.33)]  h-screen w-screen ">
        <Quotes />
        <div className=" w-full">
          <div>
            <WorldClock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
