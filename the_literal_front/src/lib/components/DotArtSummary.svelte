<script>
    let { water_volume } = $props();
</script>

<div class="emptyTopFrame">
    <div class="readout">
        <span class="mainLabel">{water_volume}</span>
        <span class="unit">mL</span>
    </div>
</div>

<style>
    .emptyTopFrame {
        position: relative;
        min-height: clamp(15rem, 40svh, 22rem);
        padding: 2rem 1rem;
    }

    .emptyTopFrame::before {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background-image: radial-gradient(circle, rgb(235 232 255 / 32%) 1px, transparent 1.5px);
        /* the image draws a grid of 1px dots, with 1.5px spacing between them */
        background-size: 16px 16px; /* this causes the image to be repeated in a tile every 16 16px */
        background-position: center;
        /* a radial mask clamp, to match the ui inspo; lowk i need to advance my creative css knowledge */
        mask-image: radial-gradient(ellipse 62% 55% at 50% 46%, black 20%, transparent 100%);
    }

    .readout {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        color: #f5f5ff;
    }

    .mainLabel {
        font-size: clamp(3rem, 12vw, 4.5rem);
        font-weight: 800;
        line-height: 1;
    }

    .unit {
        color: #c4c1d4;
        font-size: 1rem;
    }
</style>
