import React, { useState } from "react";

const Operaciones = () => {
  const [products, setProducts] = useState([]);
  const [brand, setBrand] = useState([]);

  const handleSearchProducts = async () => {
    try {
      const response = await fetch("/api/search_products");

      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
      } else {
        console.error("Error al buscar productos");
      }
    } catch (error) {
      console.error(`Error en la solicitud: ${error}`);
    }
  };

  const handleSearchBrand = async () => {
    try {
      const response = await fetch("/api/search_brand_view");

      if (response.ok) {
        const data = await response.json();
        setBrand(data.brand);
      } else {
        console.error("Error al buscar clientes");
      }
    } catch (error) {
      console.error(`Error en la solicitud: ${error}`);
    }
  };

  return (
    <div>
      <button onClick={handleSearchProducts}>Buscar productos</button>
      <button onClick={handleSearchBrand}>Buscar Marcas</button>
      <div>
        {products.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.product_id}>
                  <td>{product.product_id}</td>
                  <td>{product.product_name}</td>
                  <td>{product.product_description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div>
        {brand.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {brand.map((brand) => (
                <tr key={brand.brand_id}>             
                  <td>{brand.brand_id}</td>
                  <td>{brand.brand_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Operaciones;
