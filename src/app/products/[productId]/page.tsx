function Product({params}: {params: {productId: string}}) {
  const { productId } = params;

  return (
    <div>Product {productId}</div>
  )
}

export default Product