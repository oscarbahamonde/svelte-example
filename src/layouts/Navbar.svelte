<script>
  import logo from "../assets/logo.png";
  import Login from "../pages/Login.svelte";
  import PrivateRoute from "../pages/PrivateRoute.svelte";
  import Profile from "../pages/Profile.svelte";
  import Home from "../pages/Home.svelte";
  import About from "../pages/About.svelte";
  import Kanban from "../pages/Kanban.svelte";
  import { Router, Route, Link } from "svelte-navigator";
  import { user, cart } from "../pages/store";
  import Avatar from "../components/Avatar.svelte";
  import Cart from '../components/Cart.svelte';
  $cart = {
    "items": [],
    "total": 0,
    "focus": false
  };
</script>

<div class="drawer h-screen w-full">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <div class="w-full navbar bg-base-content text-primary">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <i class="mdi mdi-menu text-3xl" />
        </label>
      </div>
      <img src={logo} alt="ecolibri logo" class="w-16 h-16 m-2 logo" />
      <div class="flex-1 px-2 mx-2 font-script text-2xl">eColibrí</div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          {#if $user}
          <li><Link to="kanban">Kanban</Link></li>
          <li><Link to="profile"><Avatar width={"w-12"}/></Link></li>
          <li><Link to="cart"><Cart focus={false}/></Link></li>
          {/if}
          {#if !$user}
          <li><Link to="login"><i class="mdi mdi-account text-3xl"></i></Link></li>
          {/if}
        </ul>
      </div>
    </div>
    <Router>
      <Route path="login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="about">
        <About />
      </Route>
      {#if $user}
      <PrivateRoute path="profile" let:location>
        <Profile />
      </PrivateRoute>
      <PrivateRoute path="kanban" let:location>
        <Kanban />
      </PrivateRoute>
      <PrivateRoute path="cart" let:location>
        <Cart focus={true} />
      </PrivateRoute>
    {/if}
    </Router>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      <li><Link to="/">Home</Link></li>
      <li><Link to="about">About</Link></li>
      <li><Link to="profile">Profile</Link></li>
    </ul>
  </div>
</div>
