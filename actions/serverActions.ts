"use server"

import { Product } from "@/typings";
import { revalidateTag } from "next/cache";

export const addProductToDatabase = async (e: FormData) => {
    
    const product = e.get('product')?.toString();
    const price = e.get('price')?.toString();

    if (!price || !product) return;
    const newProduct:Product = {
      product,
      price
    }

    await fetch("https://6579f0e61acd268f9afa6fdf.mockapi.io/products", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct),
    })
    revalidateTag("products");
  }