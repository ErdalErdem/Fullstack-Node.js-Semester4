<script>

    export let parantName
    export let myChildren

    import Child from "../Child/Child.svelte";

function handleShowLove(childName) {
    console.log(`${parantName} is loved by ${childName} very much`)
}

let treasureChest = ["🏆", "🏅", "👑"];



function handleTakeFromTreasureChest(childName) {
    treasureChest.pop();
    treasureChest = treasureChest;


}

// Assigment: Create a loot box / treasure chest full of items (emojis)
// each parent has a treasure chest and the children can take one item at a time
// remember to follow the cenventions of the handle* and on*
// display the treasure chest items in the parent component

</script>

<h1>{parantName}</h1>

<!-- assigment pass each set pf children to each parent-->

{#each myChildren as child}
    <Child child={child} onShowLove={handleShowLove} onTakeFromTreasureChest={handleTakeFromTreasureChest}/>
{/each}

{#each treasureChest as treasure }
    {treasure + " "}
{/each}
