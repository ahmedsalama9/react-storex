import React from "react";
import Man from "../assets/man.png";
import Women from "../assets/women.png";
import Kids from "../assets/kids.png";
function Category() {
  return (
    <section>
      <div className="flex flex-row w-[80%] mx-auto mt-20 mb-10 gap-5 overflow-hidden ">

        <div className="w-[550px] h-[370px] hover:scale-102 transition-transform duration-500 ease-in-out " >
        <a href="#">
          <img
            src={Man}
            alt="category for man"
            className="w-[500px] h-[350px] object-cover object-top rounded-lg "
          />
        </a>
        </div>

        <div className="w-[550px] h-[370px] hover:scale-102 transition-transform duration-500 ease-in-out " >
        <a href="#">
          <img
            src={Women}
            alt="category for women"
            className="w-[500px] h-[350px] object-cover rounded-lg"
          />
        </a>
        </div>

        <div className="w-[550px] h-[370px] hover:scale-102 transition-transform duration-500 ease-in-out " >
        <a href="#">
          <img
            src={Kids}
            alt="category for kids"
            className="w-[500px] h-[350px] object-cover object-top rounded-lg"
          />
        </a>
        </div>
        </div>
    </section>
  );
}

export default Category;
