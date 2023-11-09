import { Flex, Stack, Box } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Search from "@/components/search/Search";
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

function DeskNav() {
  return (
    <div className=" hidden w-full  md:flex justify-between p-5 items-center border-b-2 border-orange-100">
      <div className=" flex justify-center items-center p-5">
        <div className=" ml-6">
          <h3 className=" text-orange-600 font-bold tracking-widest  drop-shadow-md">
            LIGHTS FUTURE
          </h3>
        </div>
        <div className=" font-bold">
          {navItem.map((item: any) => (
            <Link className=" px-3" key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className=" flex flex-1  justify-center text-center items-center ml-11">
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

export default DeskNav;
