
<!-- Assigment: Define a counter that has the value 5 and show it in h1-->
<script>
export let friendsCounter = 0;

function alienateFriend() {
    friendsCounter--;
}

</script>

<div> Friends Counter </div>
<h1>{friendsCounter}</h1>
<button on:click={alienateFriend}> Alienate A Friend</button>