import React from "react";

type Props = {};

const HeaderItem = ({ Icon, title }: Props) => {
  return (
    <div className="group cursor-pointer flex flex-col items-center w-14 sm:w-16 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
