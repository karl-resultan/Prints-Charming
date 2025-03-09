<script setup>
import { ref } from 'vue';
import Drawer from 'primevue/drawer';
import Divider from 'primevue/divider';
import Button from 'primevue/button';

const visible = ref(false);

const showDrawer = () => {
    visible.value = !visible.value;
};

const navigate = () => {
    // TODO: emit to parent that I will do shit
}
</script>

<template>
    <div class="flex flex-row justify-between w-full h-40 p-10 bg-gray-500">
        <div>
            <h1>Test</h1>
        </div>

        <div>
            <h3>Test</h3>
            <div></div>
        </div>

        <div>
            <h3>Test</h3>
            <div></div>
        </div>
    </div>
</template>

<style>
</style>
