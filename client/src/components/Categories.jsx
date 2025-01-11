const Categories = ({ onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-5 mt-5 mb-14">
      <span
        className="py-2 px-6 rounded-xl text-sm bg-[#ff7857] text-white w-fit cursor-pointer"
        onClick={() => onCategoryChange("general")}
      >
        General
      </span>
      <span
        className="py-2 px-6 rounded-xl text-sm bg-[#ffb14f] text-white w-fit cursor-pointer"
        onClick={() => onCategoryChange("web-design")}
      >
        Web Design
      </span>

      <span
        className="py-2 px-6 rounded-xl text-sm bg-[#ff7887] text-white w-fit cursor-pointer"
        onClick={() => onCategoryChange("databases")}
      >
        Databases
      </span>
      <span
        className="py-2 px-6 rounded-xl text-sm bg-[#775aec] text-white w-fit cursor-pointer"
        onClick={() => onCategoryChange("seo")}
      >
        Search Engines
      </span>
      <span
        className="py-2 px-6 rounded-xl text-sm bg-[#789cff] text-white w-fit cursor-pointer"
        onClick={() => onCategoryChange("ai")}
      >
        AI
      </span>
      <span
        className="py-2 px-6 rounded-xl text-sm bg-[#7fb881] text-white w-fit cursor-pointer"
        onClick={() => onCategoryChange("development")}
      >
        Development
      </span>
    </div>
  );
};

export default Categories;
