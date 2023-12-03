import { Metadata } from "next";
import Link from "next/link";

const fetchProductById = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return await res.json();
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const product = await fetchProductById(params.productId);
  return {
    title: `Product ${product.title}`,
    description: 'this my product'
  } 
}

function Product({params}: Props) {
  const { productId } = params;

  return (
    <>
     <div>Product {productId}</div>
    </>
  )
}

export default Product

type Props = {
  params: {
    productId: string
  }
}