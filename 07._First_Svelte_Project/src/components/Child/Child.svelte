<script>

    export let child;

</script>


<div
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.familySheep || "not-a-sheep"}

>

<h2>{child.name}</h2>

</div>

<style>

.is-girl {
    background-color: blue;
}

.is-boy {
    background-color: rgb(255, 145, 0);

}

.not-a-sheep {
    background-color: blueviolet;
}




</style>