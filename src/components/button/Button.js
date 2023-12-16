import React from "react";

function Button({color, text, className="w-32", hoverBg= "", handleButton=""}) {
  return (
    <button className={`${className} h-10 bg-[${color}] text-center text-white font-bold font-['Segoe UI'] hover:bg-${hoverBg}`} onClick={handleButton}>
      {text}
    </button>
  );
}

export default Button;
