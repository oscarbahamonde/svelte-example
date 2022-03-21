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

{/if}
