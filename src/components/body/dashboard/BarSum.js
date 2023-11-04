import React from "react";

function BarSum({ Subject, Value }) {
  return (
    <div className="flex h-full w-full bg-white ">
      <div className="m-auto font-bold text-xl">
          Total {Subject} : {Value}
      </div>
    </div>
  );
}

export default BarSum;
