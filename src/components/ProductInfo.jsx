const ProductInfo = () => {
    const product = {
        name:  "Laptop gigabyte",
        price: 50000,
        availability: "in-stock",
    }
  return (
    <div>
        <h1> PRODUCT INFO: LAPTOP</h1>
        <p>Name: {product.name}</p>
        <p> Price: ${product.price}</p>
        <p> Availability: {product.availability}</p>
    </div>
  );
};

export default ProductInfo;