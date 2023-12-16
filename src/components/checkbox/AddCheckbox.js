import React, { useState, useEffect } from "react";

const AddCheckBox = ({
  lulusanPicked,
  setLulusanPicked,
  lulusanData
}) => {
  // console.log("halo", lulusanPicked)
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(lulusanPicked.some((lulusan) => lulusan.id === lulusanData.id));
  }, [lulusanPicked, lulusanData]);

  function checkboxHandler() {
    if (!isChecked) {
      setLulusanPicked((prevData) => [...prevData, lulusanData]);
    } else {
      setLulusanPicked((prevData) =>
        prevData.filter((lulusan) => lulusan.id !== lulusanData.id)
      );
    }
  }

  return (
    <>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          onChange={checkboxHandler}
          checked={isChecked}
          className="w-4 h-4 z-100 text-black border-black rounded-full focus:ring-2 focus:ring-black dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
          style={{
            accentColor: "white",
          }}
        />
      </label>
    </>
  );
};

export default AddCheckBox;
