<script>
    // learnt bindable runes, as usual reference notes, and also Svelte docs
    let {selected_amount=$bindable(250)} = $props()

</script>

<div class="sliderFrame">
    <input
     type="range"
     class= "slider"
     name="slider"
     min="50"
     bind:value={selected_amount}
     max="750"
     step="50"
     /> 
    <!-- self note- check void-extended v2 notes and mdn docs to understand more about this input type-->
</div>

<style>
    .sliderFrame{
        display: flex;
        padding: 24px;
        align-items: center;
        justify-content: center;

        border-radius: 24px;
        background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.2) 100%
        );

        backdrop-filter: blur(12px) saturate(24%);
        border: 1px solid rgba(255, 255, 255, 0.24);
        box-shadow: 4px 4px 12px rgba(1, 132, 255, 0.2); /*glowy cyan :) */
    }
</style>