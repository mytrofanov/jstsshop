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
    appStore.$state.subscribe(({ products }) => {
      this.products = products;

      if (products.length) {
        this.error = null;
        this.loading = false;
      }
    });
  }
  fetchProducts() {
    this.loading = true;
    appStore.update();
    productModel.getProducts().catch((error) => {
      this.error = error;
      this.loading = false;
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
${
  this.loading
    ? '<div class="d-flex justify-content-center">\n' +
      '  <div class="spinner-border" role="status">\n' +
      '    <span class="visually-hidden">Loading...</span>\n' +
      '  </div>\n' +
      '</div> '
    : ''
}
</div>


<div>
${
  this.error
    ? `<div class="alert alert-danger" role="alert">
 ${this.error.message}
</div> `
    : ''
}
</div>

<p>-------------</p>
<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Prev</button>
  
  <button type="button" class="btn btn-outline-primary">Next</button>
</div>
`;
  }
}
