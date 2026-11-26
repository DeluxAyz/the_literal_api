<script>
    import DotArtSummary from "#lib/components/DotArtSummary.svelte";
    import MainGlowFrame from "#lib/components/MainGlowFrame.svelte";

    // the front facing api part
    let volume = $state();

    import { onMount } from 'svelte';
    import { getWaterSummary } from '../literal_api_front_part/literal_request.js';

    onMount (async () => {
        const waterSummary = await getWaterSummary();
        console.log('Water Summary:', waterSummary); // debug logs, always good, learnt that in python flet

        // got the water summary part from the fast api function
        volume = waterSummary.total_mliter;
    });

    

</script>
<div class="pageFrame">
    <DotArtSummary water_volume={volume} /> <!--using the dynamic volume value-->
    <MainGlowFrame />
</div>

<style>
    .pageFrame {
        display: flex;
        flex-direction: column;
        width: min(100%, 35rem);
        min-height: 100svh;
        margin-inline: auto;
        padding: 1rem;
    }
</style>
