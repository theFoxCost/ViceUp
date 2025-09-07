<script>
    import Viceup from "./viceup.svelte";
</script>

<main>
    <div class="logo">
        <Viceup />
    </div>
    <div class="spin">
        <div class="simple-spinner">
            <span></span>
        </div>
    </div>
</main>

<style>
    main {
        width: 100vw;
        height: 100vh;
        position: absolute;
    }

    .logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .simple-spinner {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 20px;
        bottom: 20px;
    }

    .simple-spinner span {
        display: block;
        width: 30px;
        height: 30px;
        border: 3px solid transparent;
        border-radius: 50%;
        border-right-color: rgba(255, 255, 255, 0.7);
        animation: spinner-anim 0.8s linear infinite;
    }

    @keyframes spinner-anim {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>