import { ProductsList } from './Components/ProductsList';

export class App {
  private productList = new ProductsList();

  render() {
    return `
         <div class="container">
            <div class="row">
                <div class="col-12">
         ${this.productList.render()} 
                </div>
               </div>
        </div>
    `;
  }
}
