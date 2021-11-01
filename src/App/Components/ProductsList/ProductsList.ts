import { ProductItem } from '../ProductItem';
import { productModel } from '../../Models/ProductModels';
import { Product } from '../../Interfaces/Product';
import { appStore } from '../../Store/AppStore';

export class ProductsList {
  private loading = false;
  private error: Error | null = null;
  private products: Product[] = [];
  constructor() {
    this.fetchProducts();
  }
  fetchProducts() {
    this.loading = true;
    productModel
      .getProducts()
      .then((products) => (this.products = products))
      .catch((error) => {
        this.error = error;
      })
      .finally(() => {
        this.loading = false;
        appStore.$render.next(null);
      });
  }
  render() {
    return `
<h2> Products list </h2>
<div style="display:flex; flex-wrap: wrap;">

${this.products
  .map((product) => new ProductItem(product))
  .map((product) => product.render())
  .join()}

</div>
<div>
${this.loading ? '<p>Loading ... </p> ' : ''}
</div>
<div>
${this.error ? `<p>${this.error.message} </p> ` : ''}
</div>

<p>-------------</p>
<div>
<button>prev</button>
<button>next</button>
</div>
`;
  }
}
