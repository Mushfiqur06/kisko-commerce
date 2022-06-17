export default function Category({category}: {category: string}) {
  return (
    <div className="text-center shadow uppercase text-sm py-6 cursor-pointer">
      <h1>{category}</h1>
    </div>
  );
}
