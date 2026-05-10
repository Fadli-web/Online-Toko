"use client";
import { getCookie } from "@/lib/helper";
import { useState } from "react";
import { useRouter } from "next/navigation";        

const ProductAddPage = () => {
    const [namaBarang, setNamaBarang] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [harga, setHarga] = useState("0");
    const [ stok , setStok] = useState("0");
    const [image, setImage] = useState<File | null>(null);
    const router = useRouter();

    const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama_barang", namaBarang);
        formData.append("deskripsi", deskripsi);
        formData.append("harga", harga.toString());
        formData.append("stok", stok.toString());
        formData.append("image", image || new File([],""));

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/admin/insertbarang`, {
            method: "POST",
            headers: {
                // "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${await getCookie("token")}`,
            },
            body: formData,

        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Handle success, e.g., show a success message or redirect
        })
        .catch(error => {
            console.error("Error:", error);
            // Handle error, e.g., show an error message
        });
    };

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <label >Product Name :</label>
                    <input
                        type="text"
                        name="nama_barang"
                        className="border border-gray-200 rounded py-2"
                        value={namaBarang}
                        onChange={(e) => setNamaBarang(e.target.value)}
                    />
                </div>
                <div>
                    <label >Deskripsi :</label>
                    <input
                        type="text"
                        name="Deskripsi"
                        className="border border-gray-200 rounded py-2"
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                    />
                </div>
                <div>
                    <label >Harga :</label>
                    <input
                        type="text"
                        name="Harga"
                        className="border border-gray-200 rounded py-2"
                        value={harga}
                        onChange={(e) => setHarga(e.target.value)}
                    />
                </div>
                <div>
                    <label >Stok :</label>
                    <input
                        type="text"
                        name="Stok"
                        className="border border-gray-200 rounded py-2"
                        value={stok}
                        onChange={(e) => setStok(e.target.value)}
                    />
                </div>
                <div>
                    <label >Image :</label>
                    <input type="file" name="image" className="border border-gray-200 rounded py-2 " onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} />

                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Add Product</button>
            </form>
        </div>
    );


}

export default ProductAddPage;