<script>
  import logo from "../assets/logo.png";
   import Login from "../pages/Login.svelte";
  import PrivateRoute from "../pages/PrivateRoute.svelte";
  import Profile from "../pages/Profile.svelte";
  import Home from "../pages/Home.svelte";
  import About from '../pages/About.svelte';
  import Kanban from '../pages/Kanban.svelte';
  import { Router, Route, Link } from "svelte-navigator";
</script>


<div class="drawer h-screen w-full">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle"> 
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-content text-primary">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <i class="mdi mdi-menu text-3xl"></i>
        </label>
      </div> 
      <img src={logo} alt="ecolibri logo" class="w-16 h-16 m-2" />
      <div class="flex-1 px-2 mx-2 font-script text-2xl">eColibrí</div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="about">About</Link></li>
          <li> <Link to="profile">Login</Link></li>
          <li> <Link to="kanban">Tasks</Link></li>
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
      <PrivateRoute path="profile" let:location>
        <Profile />
      </PrivateRoute>
      <PrivateRoute path="kanban" let:location>
        <Kanban />
      </PrivateRoute>
    </Router>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li><Link to="/">Home</Link></li>
      <li>  <Link to="about">About</Link></li>
      <li><Link to="profile">Profile</Link></li>
    </ul>
  </div>
</div>
      
  
