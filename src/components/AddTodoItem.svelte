<script>
    import { onDestroy, onMount } from "svelte"
    export let title = "Enter what do you want to do."
    export let buttonTitle = "Add to do."

    let items = []
    let counter = 0
    let interval

    onMount(() => {
        interval = setInterval(() => {
            counter++
        }, 1000)
    })

    onDestroy(() => {
        clearInterval(interval)
    })

    function handleAddClick(){
        items = [...items, 'item']
    }

    $: if (items.length > 5){
        console.log(items)
    }
</script>

{counter}
<div class="main-container">
    <label for="todo-text">{title}</label>
    <input class="todo-input" />
    <button on:click={handleAddClick}>{buttonTitle}</button>
</div>
<label>Some Text</label>

<style>
    label {
        color:bisque
    }

    .main-container{
        background-color: aqua;
        border-radius: 5px;
        padding: 10px;
    }
    .todo-input{
        width: 100%;
    }


</style>