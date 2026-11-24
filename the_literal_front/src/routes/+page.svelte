<script>
    import MainButton from '$lib/components/MainButton.svelte';
    import TopInfo from '$lib/components/TopInfo.svelte';
</script>

<TopInfo water_level={100} last_sync="12:00" />

<MainButton action_name="Finish Test" with_icon={false} />
