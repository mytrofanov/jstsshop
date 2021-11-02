export class Cart {
  render() {
    return `
<div>
       <ul class="list-group" style="margin-top: 1em">
  <li class="list-group-item d-flex justify-content-between align-items-start"> Some part ($212)
   <button type="button" class="btn btn-outline"> ➕ </button>
    <button type="button" class="btn btn-outline"> ➖ </button>
   <span class="badge bg-primary rounded-pill">14</span>
  </li>  
   <li class="list-group-item d-flex justify-content-between align-items-start"> Some part ($212)
   <button type="button" class="btn btn-outline"> ➕ </button>
    <button type="button" class="btn btn-outline"> ➖ </button>
   <span class="badge bg-primary rounded-pill">14</span>
  </li>  
   <li class="list-group-item d-flex justify-content-between align-items-start"> Some part ($212)
   <button type="button" class="btn btn-outline"> ➕ </button>
    <button type="button" class="btn btn-outline"> ➖ </button>
   <span class="badge bg-primary rounded-pill">14</span>
  </li>  
</ul>
<p>
Summary: 3 items, $1220 
</p>
</div>
`;
  }
}
