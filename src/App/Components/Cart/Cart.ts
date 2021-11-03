import { appStore } from '../../Store/AppStore';
import { CartProduct } from '../../Store/State';
import { AppComponent } from '../../Interfaces/AppComponent';

//MMM

export class Cart implements AppComponent {
  private products: CartProduct = {};
  private amount: number = 0;
  private sum: number = 0;

  constructor() {
    appStore.$state.subscribe(({ cart }) => {
      this.products = cart.products;
      this.amount = Object.keys(this.products).length;
      this.sum = Object.values(this.products).reduce((sum, item) => sum + item.product.price, 0);
    });
  }

  render() {
    return `
<div>
       <ul class="list-group" style="margin-top: 1em">
 ${Object.values(this.products)
   .map(
     ({ amount, product }) => `
 <li class="list-group-item d-flex justify-content-between align-items-start"> ${product.name} ($${product.price})
   <button type="button" class="btn btn-outline"> ➕ </button>
    <button type="button" class="btn btn-outline"> ➖ </button>
   <span class="badge bg-primary rounded-pill">${amount}</span>
  </li>  
 `
   )
   .join('')}
 
    
</ul>
<p>
Summary: ${this.amount} items, $${this.sum} 
</p>
</div>
`;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addEvents() {}
}
