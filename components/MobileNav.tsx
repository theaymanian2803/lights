import Link from "next/link";
import React from "react";
import Search from "./search/Search";

export type NavPros = {
  label: string;
  href: string;
};
const navItem: NavPros[] = [
  {
    label: "All Product",
    href: "/products",
  },
  {
    label: "Categories",
    href: "/categories",
  },
];

function MobileNav() {
  return (
    <div className=" w-full md:hidden flex flex-col justify-center p-5 items-center border-b-2 border-orange-100">
      <div className=" flex flex-col justify-center items-center p-5">
        <div className=" ml-6">
          <h3 className=" text-orange-600 font-bold tracking-widest mt-3 mb-3  drop-shadow-md">
            LIGHTS FUTURE
          </h3>
        </div>
        <div className=" font-bold flex flex-col space-y-4 justify-center items-center">
          {navItem.map((item: any) => (
            <Link className=" px-3" key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className=" flex w-full  justify-center text-center items-center mt-6">
          <Search />
        </div>
      </div>
      <div className=" flex space-x-3 font-bold cursor-pointer">
        <div>wishlist</div>
        <div>Cart</div>
      </div>
    </div>
  );
}
export default MobileNav;
