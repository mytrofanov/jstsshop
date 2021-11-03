import { Product } from '../../Interfaces/Product';
import { AppComponent } from '../../Interfaces/AppComponent';
import { cartModel } from '../../Models/CartModels';

export class ProductItem implements AppComponent {
  constructor(private product: Product) {}
  private getHtmlId = () => `product_${this.product.id}`;
  render() {
    return `
<div class="card" style="width: 18rem; margin: 1em;">
  <img src="${this.product.image}" class="card-img-top" alt="${this.product.name}"/>
  <div class="card-body">
    <h5 class="card-title">${this.product.name}</h5>
    <p class="card-text">$ ${this.product.price}</p>
    <a href="#" class="btn btn-primary" id="${this.getHtmlId()}">Buy</a>
  </div>
  </div>
   `;
  }
  addEvents() {
    const button = document.getElementById(this.getHtmlId());
    if (!button) {
      throw new Error('Button is undefined');
    }
    button.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('click', this.product);
      cartModel.addProduct(this.product);
    });
  }
}
