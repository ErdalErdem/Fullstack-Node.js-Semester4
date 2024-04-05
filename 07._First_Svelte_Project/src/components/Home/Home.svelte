<script>
import { fridgeMessages } from "../../stores/fridgeMessageStore";


</script>
<div class="fridge">
{#each $fridgeMessages as fridgeMessages }
    <p>{ fridgeMessages.creator ?? ""}: {fridgeMessages.message}</p>
{/each}
    </div>

<slot> </slot>

<p>|&nbsp;|&nbsp;|&nbsp;|&nbsp;</p>
<p>|&nbsp; Home sweet home |&nbsp;</p>
<p>|&nbsp;|&nbsp;|&nbsp;|&nbsp;</p>

<style>

.fridge {
    background-color: aliceblue;
    color: aqua;
    min-height: 40vh;
}

</style>