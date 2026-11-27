<script>
    import DotArtSummary from "#lib/components/DotArtSummary.svelte";
    import MainGlowFrame from "#lib/components/MainGlowFrame.svelte";

    // the front facing api part
    let volume = $state();
    let load_summary_error = $state();
    let load_log_error

    import { onMount } from 'svelte';
    import { getWaterSummary } from '../literal_api_front_part/water_summary.js';
    import { logWaterEntry } from '../literal_api_front_part/log_water_entry.js';

    onMount (async () => {
        try { // see v2 void extended for notes on try catch
            const waterSummary = await getWaterSummary();
            console.log('Water Summary:', waterSummary); // debug logs, always good, learnt that in python flet

            // got the water summary part from the fast api function
            volume = waterSummary.total_mliter; // try mispelling this, crazy seeing the types.js in action
        } catch (error_object){
            console.error('Error fetching water summary:', error_object);
            // just learnt you can console .error
            load_summary_error = 'Error fetching water summary. Welp';
        }
    });

    // handler function for the main button
    async function handleLogWater(amount) {
        try{
            const logWater = await logWaterEntry(amount);
            volume = logWater.total_mliter; // the summary the fastapi route function returns
            console.log(`proceeding to log an entry ... ${amount}`); // debug log
        } catch (error_object) {
            console.error("Couldn't log water entry due to this error - ", error_object);
            // also savng the error so a failed save leaves the last known total visible
            load_log_error = `Couldn't log water entry due to this error - ${error_object}`
        }
    }
    

</script>

<div class="pageFrame">
    {#if load_summary_error} <!--Employing my error handling-->
        <p role="alert">{load_summary_error}</p>
    {:else if volume === undefined}
        <p>Loading water summary...</p>
    {:else}
        <DotArtSummary water_volume={volume} />
        <!--using the reactive volume value-->
    {/if}
    
    <MainGlowFrame callback_action= {handleLogWater} />
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
