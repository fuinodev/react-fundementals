const ProductArray = () => {
    const products = [
        {id: 1, name: "Phone", price: 563},
        {id: 2, name: "Laptop", price: 1231},
        {id: 3, name: "Headphone", price: 123},
    ]
  return (
    <div>
      <h1>PRODUCT ARRAY: </h1>
        <ul> 
          {products.map((items) => (
                <li key={items.id}>
                   ID: {items.id}  
                   Name: {items.name} 
                   Price: {items.price}
                </li>
            ))}
        </ul>
    </div>
  );
};

export default ProductArray;