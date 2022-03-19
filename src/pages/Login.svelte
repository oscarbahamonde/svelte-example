<script>
// @ts-nocheck

  import { useNavigate, useLocation } from "svelte-navigator";
  import { user, auth } from "./store";
  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
  } from "firebase/auth";

  const navigate = useNavigate();
  const location = useLocation();

  let email;
  let password;
  let username;
  let toggle = true;

  async function signIn(email, password) {
    try {
      let res = await signInWithEmailAndPassword(auth, email, password);
      $user = res.user;
    } catch (error) {
      console.log(error);
    }
  }

  async function googleSignIn() {
    try {
      let res = await signInWithPopup(auth, new GoogleAuthProvider());
      $user = res.user;
    } catch (error) {
      console.log(error);
    }
  }

  async function githubSignIn() {
    try {
      let res = await signInWithPopup(auth, new GithubAuthProvider());
    $user = res.user;
    } catch (error) {
      console.log(error);
    }
  }

  async function signout() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        signOut(auth);
        this.$user = null;
      }
    });
  }

  async function createUser(email, password) {
    try {
      let res = await createUserWithEmailAndPassword(auth, email, password);
      $user = res.user;
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit() {
    signIn(email, password);
    const from = ($location.state && $location.state.from) || "/";
    navigate(from, { replace: true });
  }
</script>

<div class="hero bg-base-300 h-full">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
    
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <form class="form-control" on:submit={handleSubmit}>
    
            <label class="label" for="username">
              <span class="label-text">Username</span>
            </label>
            <input
              class="input"
              type="text"
              placeholder="Username"
              bind:value={username}
              name="username"
              id="username"
              on:input={(e) => (username = e.target.value)}
            />
            {#if toggle}
            <label class="label" for="email">
              <span class="label-text">Email</span>
            </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            class="input input-bordered"
            bind:value={email}
            on:input={(e) => (email = e.target.value)}
          />
          {/if}
        </form>
    
        <div class="form-control">
          <label class="label" for="password">
            <span class="label-text">Password</span>
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="password"
            class="input input-bordered"
            bind:value={password}
            on:input={(e) => (password = e.target.value)}
          />
        </div>
        <div class="form-control mt-6 ">
          {#if toggle}
            <button class="btn btn-primary">Signup</button>
            <span
              class="text-neutral text-bold hover:underline hover:text-primary-focus cursor-pointer"
              on:click={() => (toggle = !toggle)}>Already have an account?</span
            >
          {/if}
          {#if !toggle}
            <button class="btn btn-primary">Login</button>
            <span
              class="text-neutral text-bold hover:underline hover:text-primary-focus cursor-pointer"
              on:click={() => (toggle = !toggle)}>Don't have an account?</span
            >
          {/if}
          <div class="m-4 mt-8 flex">
            <button
              class="btn btn-circle mx-10"
              type="button"
              on:click={googleSignIn}
            >
              <i class=" mdi-google text-3xl " /></button
            >
            <button
              class="btn btn-circle mx-10"
              type="button"
              on:click={githubSignIn}
            >
              <i class="mdi-github text-3xl " /></button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
