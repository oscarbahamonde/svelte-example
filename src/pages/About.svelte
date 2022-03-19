<p>That's what it's all about!</p>
<script>
    import { useNavigate } from "svelte-navigator";
    import { user } from "./store";
    
    const navigate = useNavigate();
    
    $: if (!$user) {
        navigate("/login", {
        state: { from: this.$location.pathname },
        replace: true,
        });
    }
</script>