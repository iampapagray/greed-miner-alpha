import React from "react";
import { Mine, Refinery, Marketplace, Profile, Rank } from "@/assets/images";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
  let navigate = useNavigate();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const items: {
    icon: string;
    title: string;
    path: string;
  }[] = [
    { icon: Mine, title: "Enter Mine", path: "/" },
    { icon: Refinery, title: "Refinery", path: "refinery" },
    { icon: Marketplace, title: "Marketplace", path: "market" },
    { icon: Rank, title: "Rank", path: "rank" },
    { icon: Profile, title: "Profile", path: "profile" },
  ];

  const handleClick = (index: number) => {
    navigate(items[index].path);
    setActiveIndex(index);
  };

  return (
    <div className="pb-10 flex w-full px-[14px] z-50">
      <div className="flex bg-[#1D1001] w-full p-2 justify-between items-center rounded-md">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              index == activeIndex ? "rounded-[4px] bg-menuBg " : ""
            } flex flex-col flex-1 items-center justify-center gap-[2px] self-stretch py-2`}
            onClick={() => handleClick(index)}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-[30px] h-[30px] mx-auto"
            />
            <p
              className={`${
                index == activeIndex ? "" : "opacity-60"
              } text-white text-center text-xs font-medium font-inter`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavigationBar;
