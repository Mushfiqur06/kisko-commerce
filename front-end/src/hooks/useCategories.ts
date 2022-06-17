import React from "react";
import { getCategories } from "../request/categories";

export const useCategories = () => {
  const [categories, setCategories] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await getCategories("categories");
      setCategories(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return {
    categories,
    loading,
  };
};
