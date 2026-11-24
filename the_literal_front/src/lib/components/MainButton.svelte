<script>
    // discovered unplug for self host icons
    import ArrowForward from '~icons/material-symbols/arrow-forward';
    import Cached from '~icons/material-symbols/cached';
    import Water from '~icons/material-symbols/water';

    // i think these are the props it needs,
    let {action_name = 'finish test', action, with_icon = false, with_name = true, icon_type = 'none'} = $props()
    // idk if there is a better way, but i want to use icon_type as a class selector, to determine
    // type of icon used

    // i don't know exactly how event handling and on click execution works too
    // hence the dummy function
    function dummy() {
        console.log(`You clicked the ${action_name} Button`);
    }

    action = dummy()

</script>

<button class="buttonFrame">
    <span class="buttonText">{action_name}</span>
    {#if with_icon}
        {#if icon_type === 'arrow'}
            <ArrowForward class="icon" />
        {#else if icon_type === 'refresh'}
            <Cached class="icon" />
        {#else if icon_type === 'water'}
            <Water class="icon" />
        {/if}
    {/if}
</button>

<style>
    /*  self note - practicing glass styling with this project too
        went more indepth into glass learnings in notes tho
    **/
    .buttonFrame{
        display: flex;
        padding: 12px;
        align-items: center;
        justify-content: center;

        border-radius: 12px;
        background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.2) 100%
        );

        backdrop-filter: blur(24px) saturate(56%);
        border: 1px solid rgba(255, 255, 255, 0.24);
        box-shadow: 4px 4px 12px rgba(1, 132, 255, 0.2); /*glowy cyan :) */
    }

    .buttonText{
        font-size: 18px;
        font-weight: 800;
    }

</style>