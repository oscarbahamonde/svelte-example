<script>
  import { user, auth } from "./store";
  import { signOut } from "firebase/auth";
  import Avatar from "../components/Avatar.svelte";
  import Toggler from "../components/Toggler.svelte";
  let handleLogout = async() => {
    await signOut(auth);
    $user = null;
  }; 
</script>
<div class="flex flex-col items-center my-4">
<h3 class="mx-8">Welcome {$user.displayName}</h3>
<p class="container">{JSON.stringify($user)}</p>
<Avatar width={"w-36 hover:cursor-pointer"} />
<Toggler />
<h3>{$user.email}</h3>

<button on:click={handleLogout} class="btn btn-error w-96 m-4 text-white hover:bg-red-900">Logout</button>
</div>