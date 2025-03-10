<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import Divider from 'primevue/divider';

const visible = ref(false);

const showDrawer = () => {
    visible.value = !visible.value;
};

const navigate = () => {
    // TODO: emit to parent that I will do shit
}
</script>

<template>
    <div class="flex flex-row justify-between">
        <div>
            
        </div>
        <div>

        </div>
    </div>
</template>

<style>
</style>
