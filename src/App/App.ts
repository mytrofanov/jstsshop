import { ProductsList } from './Components/ProductsList';
import { Cart } from './Components/Cart';

export class App {
  private productList = new ProductsList();
  private cart = new Cart();

  render() {
    return `
         <div class="container">
            <div class="row">
                <div class="col-3">
         ${this.cart.render()}
                </div>
                <div class="col-9">
         ${this.productList.render()} 
                </div>
               </div>
        </div>
    `;
  }
}
