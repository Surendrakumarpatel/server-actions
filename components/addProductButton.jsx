"use client";
import { addProductToDatabase } from "@/actions/serverActions";
import { useTransition } from "react"

const AddProductButton = () => {
    const [isPending, startTransition] = useTransition();
    const newFormData = new FormData();
    newFormData.append("product", "Macbook Pro");
    newFormData.append("price", "11990");

    return (
        <button
            onClick={() => startTransition(() => addProductToDatabase(newFormData))}
            className="fixed bottom-10 right-10 bg-red-500 text-white px-4 py-2 rounded-md"
        >
            {`${isPending ? "Adding..." : "Add Macbook Pro"}`}
        </button>

    )
}
export default AddProductButton;