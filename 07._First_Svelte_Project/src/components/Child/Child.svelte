<script>

    export let child;
    export let onShowLove;
    export let onTakeFromTreasureChest;

import { fridgeMessages } from "../../stores/fridgeMessageStore";

let fridMessageInputValue = "";

function submitFridgeMessage() {
        const newFridgeMessage = {
            creator: child.name,
            message: fridMessageInputValue
        };
        fridgeMessages.set([...$fridgeMessages, newFridgeMessage]);
        fridMessageInputValue = "";
}

</script>


<div
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.familySheep || "not-a-sheep"}

>

<h2>{child.name}</h2>

<label for="fridgeMessage"> Write a fridge message </label>
<input type="text" name="fridgeMessage" placeholder="Fridge Message"
    bind:value={fridMessageInputValue}
>
<br>
<button on:click={submitFridgeMessage}> fridge message</button>
<br>

<button on:click={() => onShowLove(child.name)}>Show Love 💚</button>

<button on:click={onTakeFromTreasureChest}> Take from chest</button>

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