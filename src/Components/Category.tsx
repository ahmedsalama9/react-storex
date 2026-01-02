import Man from "../assets/man.png";
import Women from "../assets/women.png";
import Kids from "../assets/kids.png";
import { Link } from "react-router-dom";
import { JSX } from "react";

function Category(): JSX.Element {
  const brands: string[] = [
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/uniqlo.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dior.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/puma.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  ];

  return (
    <section>
      <div>
        <h3 className="text-center mt-20 mb-15 text-[var(--theme-color)] text-2xl font-semibold">
          Top Brands
        </h3>
        <div className="grid xl:grid-cols-10 lg:grid-cols-10 grid-cols-3 gap-6 gap-y-10 items-center w-[70%] mx-auto ">
          {brands.map((item: string, idex: number) => (
            <div key={idex}>
              <Link to="#">
                <img src={item} className="w-20" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col w-[80%] mx-auto mt-20 mb-10 gap-5 overflow-hidden ">
        <div className="w-[550px] h-[370px] hover:scale-102 transition-transform duration-500 ease-in-out ">
          <Link to="#">
            <img
              src={Man}
              alt="category for man"
              className="w-[500px] h-[350px] object-cover object-top rounded-lg "
            />
          </Link>
        </div>

        <div className="w-[550px] h-[370px] hover:scale-102 transition-transform duration-500 ease-in-out ">
          <a href="#">
            <img
              src={Women}
              alt="category for women"
              className="w-[500px] h-[350px] object-cover rounded-lg"
            />
          </a>
        </div>

        <div className="w-[550px] h-[370px] hover:scale-102 transition-transform duration-500 ease-in-out ">
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
