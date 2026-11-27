<script>
    import MainButton from '#lib/components/MainButton.svelte';
    import TopInfo from '#lib/components/TopInfo.svelte';
    import SliderSelector from '#lib/components/SliderSelector.svelte'

    let {callback_action } = $props();
    
    let selected_amount = $state(250) // 250 is th initial value
</script>

<div class="glowPanel">
    <TopInfo water_level={selected_amount} last_sync="12:00" />
    <!--Will implement material design like loading screen in the middle later-->
    <div class="actions">
        <SliderSelector bind:selected_amount = {selected_amount} />
        <MainButton action_name="Log Entry" with_icon={false} action={()=>callback_action(selected_amount)} />
    </div>
</div>

<style>
    .glowPanel {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 3rem;
        min-height: 16rem;
        padding: clamp(2rem, 10vw, 2.5rem);
        border: 1px solid rgb(181 167 255 / 28%);
        border-radius: 4rem;
        background-color: #0a0b22; /* the base starting deep blue */
        background-image: radial-gradient(
            /* then of course the gradient glow is implemented with a radial gradient property */
            ellipse 95% 92% at 50% -18%,
            /* i checked mdn docs on the ellipse, and circle at center, didn't fully grab */
            rgb(144 122 255 / 86%),
            rgb(71 54 182 / 48%) 54%,
            transparent 100%
        );
        box-shadow: inset 0 1px 24px rgb(155 137 255 / 18%);
    }

    .actions {
        display: flex;
        justify-content: center;
        gap: 3rem;
    }
</style>
