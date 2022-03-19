<div class="form-control flex flex-col items-center">
    <label class="label cursor-pointer">
      <span class="label-text mx-2">Mostrarme online</span> 
      <input type="checkbox" bind:checked={$online} class="checkbox checkbox-primary">
    </label>
  </div>

  <script>
      import { online } from "../pages/store";
  </script>