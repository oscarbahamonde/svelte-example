<script>
    import { online, products } from "../pages/store"
    import { onMount } from "svelte";

    onMount(async()=>{
        $products = await fetch("https://my-json-server.typicode.com/oscarbahamonde/svelte-example/products").then(res => res.json())
    })

</script>

{#if $online}
<div class="card lg:card-side bg-base-100 shadow-xl">
   
        {#each $products as product}
         
        <div class="card-body">
        <div class="carousel carousel-vertical rounded-box">
            {#each product.pictures as image}
            <div class="carousel-item">
            <img src="https://e-colibri.netlify.app/product/{product.id}/{image}.jpg"  alt="{image.id}"/>
        </div>
        {/each}
    </div>
            <h2 class="card-title">{product.name}</h2>
            <div class="card-actions justify-end">
              <button class="btn btn-primary flip-add"><i class="mdi mdi-cart text-3xl text-neutral" ></i></button> 
            </div>
            </div>  
            {/each}
     
</div>
{/if}
