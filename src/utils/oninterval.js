import { onDestroy } from "svelte";

export function onInterval(){
    const interval = setInterval(cb, ms)
    onDestroy(() => {
        
    })
}