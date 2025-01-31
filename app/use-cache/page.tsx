
//import { unstable_cacheLife as cacheLife } from "next/cache";
//import { unstable_cacheTag as cacheTag } from 'next/cache'
type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function JSONServerProductsPage() {
  //'use cache'
  //cacheLife('hours');
  const response = await fetch("http://localhost:3001/products");
  const products: Product[] = await response.json();
  return (
    <ul className="space-y-4 p-4">
      {products.map((product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
        </li>
      ))}
    </ul>
  );
}
