import React from "react";
import Logo from "../../assets/logoSD.svg";
function HeadBar() {
  const userName = "User-Name";
  return (
    <div className="w-full h-full">
      <div className="flex h-full justify-end my-auto">
          <img src={Logo} alt="" className="w-12" />
          <div className="font-black font-bold text-lg text-center my-auto pr-12 pl-5">
            {userName}
        </div>
      </div>
    </div>
  );
}

export default HeadBar;
