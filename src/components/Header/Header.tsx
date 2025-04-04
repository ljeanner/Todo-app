import React from "react";

export const Header = (): JSX.Element => {
  return (
    <header className="w-full h-[200px] bg-gray-700 flex items-center justify-center">
      <div className="flex items-center gap-2">
        <div className="w-[22px] h-9 bg-[url(/layer-1-1.png)] bg-[100%_100%]" />
        <h1 className="font-black text-[40px]">
          <span className="text-blue">to</span>
          <span className="text-purple">do</span>
        </h1>
      </div>
    </header>
  );
};