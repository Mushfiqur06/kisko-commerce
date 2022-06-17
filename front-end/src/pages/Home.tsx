import { useCategories } from "../hooks/useCategories";
import Category from "../module/categories/categoy";

export default function Home() {
  const { categories, loading } = useCategories();

  return (
    <div>
      <div className="container mx-auto p-4">
        {loading ? (
          <div>Loading</div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {categories?.map((category: string, index: number) => (
              <Category key={index} category={category} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
