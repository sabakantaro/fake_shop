class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  getTotal() {
    return this.total.toFixed(2);
  }

  setTotal(price) {
    this.total += price;
    const cartTotal = document.querySelector('h2');
    cartTotal.textContent = `Total: \$${this.getTotal()}`;
  }

  addProduct(product) {
    if (!product) return;

    this.items.push(product);
    this.setTotal(product.price);
    console.log('Items:', this.items);
  }

  render() {
    const cartSection = document.createElement('section');
    cartSection.className = 'cart';
    cartSection.innerHTML = `
            <h2>Total: $${this.getTotal()}</h2>
            <button>Order Now!</button>
        `;

    const orderButton = cartSection.querySelector('button');
    orderButton.addEventListener('click', () => {
      if (this.items.length === 0) {
        window.alert('No products in cart!');
        return;
      }
      this.items = [];
      this.total = 0;
      this.setTotal(this.total);

      window.alert('Order placed!');
    });
    return cartSection;
  }
}

export default new ShoppingCart();
