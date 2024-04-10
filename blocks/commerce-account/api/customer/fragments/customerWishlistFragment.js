const customerWishlistFragment = `
wishlist {
  id
  items_count
  sharing_code
  updated_at
  items {
    id
    qty
    description
    added_at
    product {
      id
      sku
      name
      url_key
      price {
        regularPrice {
            amount {
                currency
                value
            }
        }
    }
    image {
      url
      label
     }
    }
  }
}
`;

export default customerWishlistFragment;
