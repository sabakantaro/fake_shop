import Shop from './shop.js';
import Cart from './shoppingCart.js';

export default class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.addProductToCart();
  }

  static addProductToCart(product) {
    const cart = Cart;
    cart.addProduct(product);
  }
}

App.init();
