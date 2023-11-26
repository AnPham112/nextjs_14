import Link from 'next/link'

function Products() {
  return (
    <div>
      <h1>Product list</h1>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>
    </div>
  )
}

export default Products