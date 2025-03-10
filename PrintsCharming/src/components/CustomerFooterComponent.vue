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
    <div class="flex flex-row justify-between w-full p-24 bg-gray-500">
        <div class="w-4/12 h-full p-3">
            <h1 class="font-bold text-2xl">PrintsCharming</h1>
            <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptates aut. Magni ipsa fugit temporibus sint beatae. Enim, magni iusto.</p>
        </div>

        <Divider layout="vertical" />

        <div class="w-4/12 h-full p-3">
            <h3>Navigation</h3>
            <div class="flex flex-row gap-10 w-11/12 mt-5">
                <div class="flex flex-col">
                    <a href="">Home</a>
                    <a href="">Home</a>
                    <a href="">Home</a>
                </div>
                <div class="flex flex-col">
                    <a href="">Home</a>
                    <a href="">Home</a>
                    <a href="">Home</a>
                </div>
            </div>
        </div>

        <Divider layout="vertical" />

        <div class="w-4/12 h-full p-3">
            <h3>Contact Us</h3>
            <div class="mt-5">
                <p>Address: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Contact Number: Lorem ipsum dolor sit amet.</p>
                <p>Email: Lorem ipsum dolor sit amet.</p>

                <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque aut, iure officiis obcaecati numquam ab quae fuga veniam sapiente.</p>
            </div>
        </div>
    </div>
</template>

<style>
</style>
