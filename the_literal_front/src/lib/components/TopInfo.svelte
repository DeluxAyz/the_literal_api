<script>
    import CompareArrows from '~icons/material-symbols/compare-arrows';
    let {water_level, last_sync} = $props();
</script>

<div class="topInfoFrame">
    <div class="infoLevel">
        <span class="levelMain">{water_level}L</span>
        <span class="levelSecon">H20</span>
    </div>

    <div class="infoLevel">
        <span class="dropMatrix">..|..</span>
        <span class="levelMain">Hydrate Your System </span>
    </div>

    <div class="infoLevel">
        <span class="levelMain">{last_sync}</span>
        <CompareArrows class="icon" />
    </div>
</div>

<style>
    .toInfoFrame{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px;
        background: none;
    }

    .infoLevel{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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