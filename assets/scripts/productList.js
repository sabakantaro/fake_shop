import ProductItem from './productItem.js';

const url = 'https://fakestoreapi.com/products';

export default class ProductList {
  constructor() {
    this.products = [];
  }

  async fetchProducts() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.products = data;
      this.render();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const productList = document.createElement('ul');
    productList.className = 'product-list';
    this.products.forEach((product) => {
      const productItem = new ProductItem(product);
      productList.append(productItem.render());
    });
    return productList;
  }
}
