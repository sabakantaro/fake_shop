export default class ShoppingCart {
  constructor() {
    this.items = [];
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ShoppingCart();
    }
    return this.instance;
  }

  getTotal() {
    if (this.items.length === 0) return 0;

    const sum = this.items.reduce((acc, item) => {
      return acc + item?.price;
    }, 0);
    return sum ? sum : 0;
  }

  setTotal() {
    const total = document.querySelector('h2');
    total.textContent = `Total: $${this.getTotal()}`;
  }

  addProduct(product) {
    if (!product) return;

    this.items.push(product);
    this.setTotal();
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
      this.items = [];
      const total = cartSection.querySelector('h2');
      total.textContent = `Total: $${this.getTotal()}`;

      window.alert('Order placed!');
    });
    return cartSection;
  }
}