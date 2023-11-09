import Image from "next/image";

function Banner() {
  return (
    <div className=" flex flex-col md:flex md:flex-row justify-center items-center  ">
      <div className=" order-2 w-full h-3/4 flex flex-col justify-center space-y-9 items-center text-start md:order-1">
        <h1 className="text-orange-700 font-bold md:text-3xl capitalize drop-shadow-lg">
          crystal lights made from nature
        </h1>
        <p className=" w-1/2 line-clamp-3 p-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          dolores asperiores vero molestias ipsa perspiciatis aspernatur illum,
          totam deleniti ad.
        </p>
        <button
          className=" bg-orange-500 p-5 rounded shadow-lg mt-4"
          type="button">
          BUY NOW
        </button>
      </div>
      <div className="  w-full h-3/4 flex justify-center items-center">
        <Image
          className=" w-full h-full object-contain"
          src="/banner.png"
          alt="lights"
          width={700}
          height={300}
        />
      </div>
    </div>
  );
}

export default Banner;
