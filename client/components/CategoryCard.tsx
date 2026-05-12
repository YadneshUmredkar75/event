import { Category } from "@/data/categoriesData";

interface CategoryCardProps {
  category: Category;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function CategoryCard({
  category,
  isSelected,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 cursor-pointer ${
        isSelected
          ? "ring-2 ring-purple-500 bg-gradient-to-br from-purple-900/40 to-blue-900/40"
          : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50"
      }`}
    >
      <div className="relative z-10">
        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>
        <h3 className="text-white font-bold text-lg mb-1">{category.name}</h3>
        <p className="text-gray-400 text-sm">{category.description}</p>
      </div>

      {isSelected && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
    </button>
  );
}
