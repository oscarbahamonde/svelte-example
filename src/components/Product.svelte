<script>
    import { online, products } from "../pages/store"
    import { onMount } from "svelte";

    onMount(async()=>{
        $products = await fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json())
    })

</script>

{#if $online}
<div class="card lg:card-side bg-base-100 shadow-xl">
   
        {#each $products as todo}
         
        <div class="card-body">
            <img src="{todo.url}"  alt="{todo.id}"/>
            <h2 class="card-title">{todo.title}</h2>
            <a href="{todo.url}">{todo.url}</a>
            <div class="card-actions justify-end">
              <button class="btn btn-primary flip-add"><i class="mdi mdi-cart text-3xl text-neutral" ></i></button> 
            </div>
        </div>   
            {/each}
     
</div>
{/if}
