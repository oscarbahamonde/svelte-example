<script>
  import Navbar from './layouts/Navbar.svelte'
  import PrivateRoute from "./pages/PrivateRoute.svelte"
  import Profile from "./pages/Profile.svelte"
  import Kanban from "./pages/Kanban.svelte"
  import { Router, Route} from "svelte-navigator"
  
 
</script>

<Router>
  <Navbar />
</Router>
