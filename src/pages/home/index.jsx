import ProductList from "../../components/product-list";

import { Img1, Img2, Img3, Img4, Img6, Img5 } from "../../index.js";

const products = [
  { id: 1, name: "Jacket", price: 8000, image: Img1, quantity: 1 },
  { id: 2, name: "Flowered Skirt", price: 8098, image: Img2, quantity: 1 },
  { id: 3, name: "Maxi Dress", price: 3300, image: Img3, quantity: 1 },
  { id: 4, name: "T-shirt", price: 5400, image: Img4, quantity: 1 },
  { id: 5, name: "Chinos trouser", price: 4300, image: Img5, quantity: 1 },
  { id: 6, name: "Denim trouser", price: 5075, image: Img6, quantity: 1 },
];

const Home = () => {
  return (
    <main className="">
      <div className="container mx-auto px-4 py-16">
        <ProductList products={products} />
      </div>

      <footer className="text-gray-600 text-center p-4">
        &copy; 2024 Your Website. All rights reserved.
      </footer>
    </main>
  );
};

export default Home;
