import React from 'react'

function Review({params}: {
  params: {reviewId: string; productId: string}
}) {
  console.log(params.reviewId);
  console.log(params.productId)
  return (
    <div>Review {params.reviewId} of product {params.productId}</div>
  )
}

export default Review