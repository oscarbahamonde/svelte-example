<script>
// @ts-nocheck

  import { products } from "../pages/store";
  export let focus;
  let badge = "badge bg-warning py-3 text-neutral";
  let qty= 0;
  let total = 0;
  let items = [];

  function plusplus() {
    qty++;
    total = qty * products.price;
    items.push(products);
    cart.items = items;
    cart.total = total;
    cart.qty = qty;
  }
  
    function minusminus() {
        qty--;
        total = qty * products.price;
        items.push(products);
        cart.items = items;
        cart.total = total;
        cart.qty = qty;
    }

</script>

{#if !focus}
  <button class="btn btn-primary rounded-full p-2 flex flex-col items-center">
    <i class="mdi mdi-cart text-3xl text-neutral" /><i class={badge}>{total}</i>
  </button>
{/if}
{#if focus}
  <div class="overflow-x-auto w-full">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>
          </th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
                <button class="mdi mdi-delete" />
          </th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img
                    src="https://api.lorem.space/image?fashion&w=150&h=180"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">Producto1</div>
                <div class="text-sm opacity-50">Descripcion del producto</div>
              </div>
            </div>
          </td>
          <td>
            <span>S/. 50</span>
            <br />
            <span class="badge badge-ghost badge-sm"
              >50% descuento</span
            >
          </td>
          <td>
                {#if qty > 0}              
              <button class="mdi mdi-minus-box cursor-pointer" on:click="{minusminus}">
                </button>
                {/if}
        <span>
            {qty}
        </span>      
        <button class="mdi mdi-plus-box cursor-pointer" on:click="{plusplus}">
        </button>
          </td>
          <td>
            <span>$ 50</span>
          </td>
        </tr>
          <tr>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th />
          <th>Total</th>
          <th></th>
          <th>{total}</th>
          <th />
        </tr>
      </tfoot>
    </table>
  </div>
{/if}
