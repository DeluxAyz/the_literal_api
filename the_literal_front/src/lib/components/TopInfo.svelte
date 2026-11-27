<script>
    // codex really guided my ahh on some of the cool effects, shoutout to him

    import CompareArrows from '~icons/material-symbols/compare-arrows';
    let {water_level, last_sync} = $props();

    const dropPattern = [
        '00100',
        '00100',
        '01110',
        '01110',
        '11111',
        '11111',
        '01110'
    ]; // so an array, using 0s and 1s to literally draw the shape of the water droplet
    // i've done something similar in terminal art when learning python, using array values to position items 
    // into a grid art
</script>

<div class="topInfoFrame">
    <div class="infoLevel">
        <span class="levelMain">{water_level}mL</span>
        <span class="levelSecon">H20</span>
    </div>

    <div class="infoLevel">
        <span class="dropMatrix" aria-hidden="true">
            {#each dropPattern as row}
            <!--looping through that array from before-->
                {#each row.split('') as pixel}
                    <!--
                    looping through the string values, the 01110 are in strings
                    so, lowkey like we looping through two arrays, that familiar syntax
                    the loop is creating a <span> for every part of the string 
                    and then the class:lit={pixel === '1'} is a conditional class, so if the pixel is a 1, 
                    it gets the styling of .dropPixel.lit, which is the white color, and if it's a 0, 
                    it doesn't get that styling, so it stays transparent

                    Actually very straightforward, in my notes i'm already making plans to properly learn creative coding with css
                    and naturally svelte
                    -->
                    <span class="dropPixel" class:lit={pixel === '1'}></span>
                {/each}
            {/each}
        </span>
        <span class="levelMain">Hydrate Your System </span>
    </div>

    <div class="infoLevel">
        <span class="levelMain">{last_sync}</span>
        <CompareArrows class="icon" />
    </div>
</div>

<style>
    .topInfoFrame{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        text-align: center;
    }

    .infoLevel{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .dropMatrix {
        /* of course, the main execution point is gonna be a grid */
        display: grid;
        grid-template-columns: repeat(5, 3px);
        grid-auto-rows: 3px; /* tells the browser how tall to make each new row */
        gap: 3px;
        margin-bottom: 0.375rem;
    }

    .dropPixel {
        border-radius: 50%;
    }

    .dropPixel.lit {
        background-color: #ebe5ff;
    }

    .levelMain{
        font-size: 18px;
        font-weight: 600;
    }

    .levelSecon{
        font-size: 18px;
        font-weight: 500;
    }
</style>
