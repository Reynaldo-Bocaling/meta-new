import React from "react";
import content from "../assets/fb.jpg";
import { CiCircleChevDown } from "react-icons/ci";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-center gap-20  pb-7   w-full shadow-md shadow-gray-100">
        <div className="flex justify-center items-center mt-4 w-full md:w-[75%] order-1 md:order-2">
          <img
            className="object-contain w-full "
            src="https://z-p3-scontent.fmnl7-2.fna.fbcdn.net/v/t39.8562-6/461315506_1052665733272333_6300342498549975919_n.png?stp=dst-webp&_nc_cat=1&ccb=1-7&_nc_sid=72188a&_nc_eui2=AeH7CLsHJEUwC9i18kmRIYdYG55DvGpHjZsbnkO8akeNm0DOZS1MxBFr4yAEipl45eNV35HErsaJgLBRkz3LjjDx&_nc_ohc=E9OHJop4fgwQ7kNvgGYY48h&_nc_ht=z-p3-scontent.fmnl7-2.fna&_nc_gid=Af1PIrE7sTNgJmR_AfqLjep&oh=00_AYDEiJXNE73PjbLs26rVg-5AtOzqzg2Mg_4RUgbnELSywQ&oe=6709A046"
            alt="Facebook Community"
            id="u_0_3_JL"
          />
        </div>
        <div className="flex flex-col items-start px-4 order-2 md:order-1 w-full md:w-[25%] -mt-5">
          <h1 className="text-lg md:text-xl font-semibold text-gray-600 border-b-4 border-[#217af5] mb-3">
            TOOLS
          </h1>
          <p
            className="text-[#217af5] font-semibold md:font-medium tracking-wider text-4xl md:text-6xl mt-3 md:max-w-2xl md:leading-[6rem]"
            id="5UggbXsvJZjLQoGs1"
          >
            Facebook Content Monetization Beta
          </p>
          <p className="text-lg md:text-xl  tracking-wide mt-2">
            Simplify your earnings, monetize more content.
          </p>
          <div className="mt-1"></div>
          <div className="inline-flex mt-4 mb-8">
            <Link
              to="/validation"
              role="button"
              href="/get-started"
              className="px-6 py-2 bg-[#217af5] text-white font-bold  hover:bg-blue-700"
              id="u_0_2_0l"
            >
              I'm interested
            </Link>
          </div>
          <p className="text-lg font-medium flex items-center gap-3">
            How do I join?{" "}
            <CiCircleChevDown size={23} className="text-[#217af5]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
