import React from "react";
import { Mine, Refinery, Marketplace, Profile, Rank } from "@/assets/images";

function NavigationBar() {
  const items: { icon: string; title: string; isActive: Boolean }[] = [
    { icon: Mine, title: "Enter Mine", isActive: true },
    { icon: Refinery, title: "Refinery", isActive: false },
    { icon: Marketplace, title: "Marketplace", isActive: false },
    { icon: Rank, title: "Rank", isActive: false },
    { icon: Profile, title: "Profile", isActive: false },
  ];
  return (
    <div className="fixed bottom-4 flex w-full px-[14px] z-50">
      <div className="flex bg-menuBg w-full p-2 justify-between items-center rounded-md">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col flex-1 items-center justify-center gap-[2px] self-stretch py-2"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-[30px] h-[30px] mx-auto"
            />
            <p
              className={`${
                item.isActive ? "" : "opacity-60"
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
