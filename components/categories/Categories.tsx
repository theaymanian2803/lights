import React from "react";

function Categories() {
  return (
    <div className="  text-center mt-5">
      <h1 className=" font-bold text-orange-500 drop-shadow-2xl">
        Top Categories
      </h1>
      <div className=" grid md:grid-cols-4 p-1 gap-3 px-3 mt-7">
        <div className=" flex flex-col justify-center p-1 border-2  hover:bg-orange-100 transition rounded-lg border-orange-200 h-28 flex-1">
          <p>image goes here</p>
          <h3 className=" text-red-700">red light</h3>
        </div>
        <div className=" flex flex-col p-1 justify-center   border-2 hover:bg-orange-100 transition rounded-lg border-orange-200 h-28 flex-1">
          <p>image goes here</p>
          <h3 className=" text-orange-800">Orange light</h3>
        </div>
        <div className=" flex flex-col p-1 border-2 justify-center  hover:bg-orange-100 transition rounded-lg border-orange-200 h-28 flex-1">
          <p>image goes here</p>
          <h3 className=" text-black">white light</h3>
        </div>
        <div className=" flex flex-col p-1  border-2 justify-center  hover:bg-orange-100 transition rounded-lg border-orange-200 h-28 flex-1">
          <p>image goes here</p>
          <h3 className=" text-pink-800">Pink light</h3>
        </div>
      </div>
    </div>
  );
}

export default Categories;
