<script setup>
import { ref } from 'vue';
import DataView from 'primevue/dataview';
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
    <div class="flex flex-col justify-between w-full h-40 p-10 bg-gray-500">
        
    </div>
</template>

<style>
</style>
