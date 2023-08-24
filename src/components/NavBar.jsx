import React from 'react';

const CartWidget = () => {
  return (
    <div ClassName="cart-widget">

      <i ClassName="bi-cart"></i>
      <span ClassName="cart-notification">5</span>

    </div>
  );
};

const ItemListContainer = ({ greeting }) => {
  return (

    <div ClassName="item-list-container">

      <p>{greeting}</p>

    </div>

  );
};

const NavBar = () => {
  return (
    <nav ClassName="navbar">
      <div ClassName="brand">Mi Tienda</div>
      <div ClassName="categories">
        <a href="#">Categoría 1</a>
        <a href="#">Categoría 2</a>
        <a href="#">Categoría 3</a>
      </div>
      <CartWidget />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </nav>
  );
};

export default NavBar;
