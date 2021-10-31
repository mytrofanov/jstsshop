import { ProductsList } from './Components/ProductsList';

export class App {
  private productList = new ProductsList();

  render() {
    return `
        <h1>App</h1>
        <div>${this.productList.render()}</div>
    
    `;
  }
}
