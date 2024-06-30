import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Slug</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Inventory</th>
            <th>Last Update</th>
            <th>Type of</th>
            <th>Color</th>
            <th>Shape</th>
            <th>Category</th>
            <th>Date Added</th>
            <th>Origin</th>
            <th>Weight</th>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td> </td>
              <td>{product.slug}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.inventory}</td>
              <td>{product.last_update}</td>
              <td>{product.type_of}</td>
              <td>{product.color}</td>
              <td>{product.shape}</td>
              <td>{product.category.title}</td>
              <td>{product.date_added}</td>
              <td>{product.origin}</td>
              <td>{product.weight}</td>
              <td>
                {product.images.length > 0 ? (
                  product.images.map(image =>(

                    <img
                    src={'http://127.0.0.1:8000/'+ image.image}
                    alt={product.title}
                    style={{width:'200px', height:'200px'}}
                    />
                  )) 
                ) : (
                  <p>No image available</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;