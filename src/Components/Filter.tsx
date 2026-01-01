import React, { useEffect } from "react";
import { useState } from "react";

function Filter({ catFilter, setCatFilter }) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const productFilter = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const data = await res.json();
        setCategory(data);
      } catch (error) {
        console.log(error);
      }
    };
    productFilter();
  }, []);

  // cause bug: const checkedCategory = [...new Set(catFilter.map((c) => c.category))];

  const toggleCategory = (value) => {
    setCatFilter((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };
  return (
    <div className="flex flex-row gap-5">
      {category.map((item) => (
        <label
          key={item}
          className="flex flex-row items-center justify-center gap-3 px-3 mt-5 py-2 rounded-xl border border-gray-200 hover:border-[var(--titles)] hover:bg-[var(--titles)]/60 transition cursor-pointer"
        >
          <input
            type="checkbox"
            name=""
            value={item}
            className="h-4 w-4 rounded border-gray-300"
            checked={catFilter.includes(item)}
            onChange={() => toggleCategory(item)}
          />
          {item}
        </label>
      ))}
    </div>
  );
}

export default Filter;
