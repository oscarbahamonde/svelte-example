<script>
    import { user, online} from "../pages/store";
    export let width
</script>

{#if $online}
<div class="avatar online">
  <div class="{width} rounded-full">
<img src={$user["photoURL"]} alt="{$user.displayName}"   />
</div>
</div>
{/if}
{#if !$online}
<div class="avatar offline">
  <div class="{width} rounded-full">
    <img src={$user["photoURL"]} alt="{$user.displayName}"   />
</div>
</div>
<button class="btn rounded-full p-2 flex flex-col items-center">
    <i class="mdi mdi-cart text-3xl"></i><i class="badge badge-md"></i>
</button>
{/if}
