import { addProductToDatabase } from "@/actions/serverActions";
import { Product } from "@/typings";
import AddProductButton from "@/components/AddProductButton";


export default async function Home() {
  const res = await fetch("https://6579f0e61acd268f9afa6fdf.mockapi.io/products",
    {
      cache: "no-cache",
      next:{
        tags:["products"]
      }
    }
  );

  const products: Product[] = await res.json();
 
  return (
    <main className="text-center">
      <h1 className="font-bold text-lg mt-5">PRODUCT HUNTS</h1>
      <AddProductButton/>
      <form action={addProductToDatabase} className="my-5 flex mx-auto space-y-5 flex-col w-[80%] md:w-[30%]">
        <input
          type="text"
          name='product'
          placeholder="Product Name..."
          className="border-2 border-gray-300 px-2 py-1 rounded-md outline-none"
        />
        <input
          type="text"
          name='price'
          placeholder="Price Name..."
          className="border-2 border-gray-300 px-2 py-1 rounded-md outline-none"
        />
        <button className="bg-yellow-500 py-2 rounded-md text-white font-semibold ">Add Product</button>
      </form>
      <h1>List of Products</h1>
      <div className="grid md:grid-cols-10 grid-cols-4 gap-4 m-8">

        {
          products.map((product) => (
            <div key={product.id} className="shadow-md p-2">
              <p>{product.product}</p>
              <p>{product.price}₹</p>
            </div>
          ))
        }
      </div>
    </main>
  )
}
