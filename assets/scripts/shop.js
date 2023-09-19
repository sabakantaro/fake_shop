import { ProductList } from './productList.js';
import ShoppingCart from './shoppingCart.js';

export default class Shop {
  async render() {
    const renderHook = document.getElementById('app');

    const cart = new ShoppingCart();
    const cartEl = cart.render();
    renderHook.append(cartEl);

    const productList = new ProductList();
    await productList.fetchProducts();
    const productListEl = productList.render();
    renderHook.append(productListEl);
  }
}
