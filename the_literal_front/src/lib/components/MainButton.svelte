<script>
    // discovered unplug for self host icons
    // it gave me a lot of import and setup errors tho, but it's worth it
    // and twas mainly my skill issue
    import ArrowForward from '~icons/material-symbols/arrow-forward';
    import Cached from '~icons/material-symbols/cached';
    import Water from '~icons/material-symbols/water';

    // i think these are the props it needs,
    /** @type {{action_name?: string, action?: () => void, with_icon?: boolean, with_name?: boolean, icon_type?: string}} */
    let {action_name = 'No Action Specified', action = dummy, with_icon = false, with_name = true, icon_type = 'none'} = $props()
    // idk if there is a better way, but i want to use icon_type as a class selector, to determine
    // type of icon used

    // i don't know exactly how event handling and on click execution works too
    // hence the dummy function
    function dummy() {
        console.log(`You clicked the ${action_name} Button`);
    }
    //well now i know, but i'm still leaving the dummy as a safety default
    // i believe passed functions in the prop shoud override it

</script>

<button class="buttonFrame" onclick={action}>
    <span class="buttonText">{action_name}</span>
    {#if with_icon}
        {#if icon_type === 'arrow'}
            <ArrowForward class="icon" />
        {:else if icon_type === 'refresh'}
            <Cached class="icon" />
        {:else if icon_type === 'water'}
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

    .buttonText{
        font-size: 18px;
        font-weight: 500;
        color: #f5f5ff;
    }

</style>
