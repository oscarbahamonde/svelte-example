<script>
  import { user, auth } from "./store";
  import { signOut } from "firebase/auth";
  let handleLogout = async() => {
    await signOut(auth);
    $user = null;
  };
</script>
<div class="flex flex-col items-center m-8 justify-end">
<h3 class="mx-8">Welcome {$user.displayName}</h3>
<figure>
<img src={"https://lh3.googleusercontent.com/a-/AOh14GjS7Wxhx_ILH5gyKz6m5cJI4mNek70E9vzLg42f=s96-c"} alt="{$user.displayName}"/>
<caption>{$user.email}</caption>
</figure>

<button on:click={handleLogout} class="btn btn-error w-96 m-4">Logout</button>
</div>