import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams(); 

  useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        let result = data.products;
        if (category) {
          result = result.filter((p) => p.category === category);
        }
        setProducts(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar productos", err);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <p>Cargando productos...</p>;

  return <ItemList products={products} />;
};

export default ItemListContainer;
