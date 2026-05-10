import { getCookie } from "@/lib/helper"
import { CardProduct } from "@/components/card-product"

export interface Root {
    status: boolean
    message: string
    data: Product[]
}

export interface Product {
    id: number
    nama_barang: string
    deskripsi: string
    stok: number
    harga: number
    image: string
}

async function getProducts(): Promise<Product[]> {
    try {
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/admin/getbarang`;
        const response = await fetch(url, {
            method: `get`,
            headers: {
                "Authorization": `Bearer ${await getCookie(`token`)}`
            }
        })

        const responseData = await response.json();
        console.log(responseData);  
        if (!response.ok) {
            return [];
        }
        return responseData?.data as Product[];

    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}
export default async function ProductPage() {
    const product = await getProducts();
    // console.log(product);   
    return (
        <div className="w-full p-3">
            <h1>Barang</h1>
            <div className="grid grid-cols-2 md:grid-cols-4">
                {
                    product.map(product => (
                        <CardProduct
                            key={product.id}
                            name={product.nama_barang}
                            description={product.deskripsi}
                            price={product.harga}
                            image={product.image}
                        />
                       
                    ))
                }
            </div>
        </div>
    )
}
