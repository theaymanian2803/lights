"use client";
import { SearchIcon } from "@chakra-ui/icons";
function Search() {
  return (
    <div>
      <div className=" w-full md:w-[400px]   relative text-center items-center md:ml-8">
        <input
          className=" text-start flex justify-end p-2 relative w-full text-pink-900 outline-none focus:border-orange-400 focus:border-b-2 focus:p-2 transition"
          type="text"
          placeholder="search..."
        />
        <SearchIcon className=" absolute top-3 right-5 " />
      </div>
    </div>
  );
}

export default Search;
