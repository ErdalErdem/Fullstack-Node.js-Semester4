<script>

    export let parantName
    export let myChildren

    import Child from "../Child/Child.svelte";

</script>

<h1>{parantName}</h1>

<!-- assigment pass each set pf children to each parent-->

{#each myChildren as child}
    <Child child={child}/>
{/each}
