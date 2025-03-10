<script setup>
import { ref } from 'vue';
import Drawer from 'primevue/drawer';
import Divider from 'primevue/divider';
import Button from 'primevue/button';
import Fluid from 'primevue/fluid';

const visible = ref(false);
</script>

<template>
    <div class="flex flex-row justify-between gap-10 w-10/12 h-11/12">
        <div class="w-8/12 p-10 shadow-md">
            <h1 class="font-bold text-3xl">My Cart</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo culpa voluptas eos, libero numquam pariatur.</p>

            <h3 class="font-bold mt-10">ITEMS</h3>
        </div>

        <div class="w-4/12 h-8/12 p-10 shadow-md">
            <h1 class="text-2xl">Checkout</h1>
            <div class="mt-15">
                <div class="flex flex-row justify-between">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="flex flex-row justify-between">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="flex flex-row justify-between">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <Divider class="mt-5" />

                <div class="flex flex-row justify-between mt-5 mb-20">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <Button label="Checkout" fluid />
            </div>
        </div>
    </div>
</template>

<style>
</style>
