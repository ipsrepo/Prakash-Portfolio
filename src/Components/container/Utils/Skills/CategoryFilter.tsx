import React, { useEffect, useState } from "react";
interface CategoryFilterProps {
  category: string[];
  onSelect: (name: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (event: React.MouseEvent<HTMLParagraphElement>, index: number) => {
    setSelectedIndex(index); // Update selected index
    props?.onSelect(event.currentTarget.innerText);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIndex(0);
        props?.onSelect(props.category[0]);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [props]);

  return (
    <div className="flex flex-wrap px-2 pt-6 pb-4 relative">
      <p className="text-sec-font top-0.5 right-2 absolute scale-75">
        Press escape key to clear filter
      </p>
      {props?.category?.map((category: string, index) => (
        <p
          key={category}
          className={`rounded-bl-xl rounded-tr-xl p-2 px-4 mx-1 my-2 font-bold text-xs border cursor-pointer transition duration-300 ease-in-out text-pri-font hover:-translate-y-1 ${selectedIndex === index ? "text-white bg-accent border-accent opacity-100" : "border-line"}`}
          onClick={(event) => handleSelect(event, index)}
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default React.memo(CategoryFilter);
