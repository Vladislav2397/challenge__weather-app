<template>
    <DropdownMenuRoot v-model:open="toggleState">
        <DropdownMenuTrigger aria-label="dropdown menu trigger">
            <slot />
        </DropdownMenuTrigger>

        <DropdownMenuPortal>
            <DropdownMenuContent
                class="DropdownMenuContent"
                :side-offset="5">
                <DropdownMenuItem
                    value="New Tab"
                    class="DropdownMenuItem"
                    @select="onClick">
                    New Tab
                    <div class="RightSlot">⌘+T</div>
                </DropdownMenuItem>
                <DropdownMenuItem
                    value="New Window"
                    class="DropdownMenuItem">
                    New Window
                    <div class="RightSlot">⌘+N</div>
                </DropdownMenuItem>
                <DropdownMenuItem
                    value="New Private Window"
                    class="DropdownMenuItem"
                    disabled>
                    New Private Window
                    <div class="RightSlot">⇧+⌘+N</div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenuPortal>
    </DropdownMenuRoot>
</template>

<script lang="ts" setup>
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuRoot,
    DropdownMenuTrigger,
} from 'reka-ui'
import { ref } from 'vue'

const toggleState = ref(false)

function onClick(value: any) {
    console.log('onClick', value)
}
</script>

<style module lang="scss">
.root {
    //
}
</style>
