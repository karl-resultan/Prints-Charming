<script setup>
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import { ref } from 'vue';

const text1 = ref('');
const selectedFilter = ref('');
const products = ref([]);
</script>

<template>
    <div class="flex flex-col justify-between items-center w-9/12 h-full pt-10 pb-10">
        <div class="w-1/2">
            <InputGroup>
                <InputGroupAddon>
                    <i class="pi pi-search"></i>
                </InputGroupAddon>
                <InputText v-model="text1" placeholder="Search" />
            </InputGroup>
        </div>

        <h1 class="font-bold text-3xl mt-20 mb-5">All Products</h1>
        <div class="flex flex-row justify-between gap-5 w-full h-full">
            <!-- Filter Section -->
            <div class="w-2/12 h-96">
                <Card>
                    <template #title>Filter</template>
                    <template #content>
                        <h3 class="mb-2 font-semibold">Item Type</h3>
                        <div class="flex flex-col gap-2 mb-4">
                            <label class="flex items-center gap-2">
                                <RadioButton v-model="selectedFilter" inputId="Laser" value="Laser" /> Laser
                            </label>
                            <label class="flex items-center gap-2">
                                <RadioButton v-model="selectedFilter" inputId="Mushroom" value="Mushroom" /> Mushroom
                            </label>
                            <label class="flex items-center gap-2">
                                <RadioButton v-model="selectedFilter" inputId="Pepper" value="Pepper" /> Pepper
                            </label>
                            <label class="flex items-center gap-2">
                                <RadioButton v-model="selectedFilter" inputId="Onion" value="Onion" /> Onion
                            </label>
                        </div>

                        <h3 class="mb-2 font-semibold">Price</h3>
                        <div class="flex flex-col gap-2 mb-4">
                            <label class="flex items-center gap-2">
                                <RadioButton v-model="selectedFilter" inputId="$" value="$" /> $
                            </label>
                            <label class="flex items-center gap-2">
                                <RadioButton v-model="selectedFilter" inputId="$$" value="$$" /> $$
                            </label>
                            <label class="flex items-center gap-2">
                                <RadioButton v-model="selectedFilter" inputId="$$$" value="$$$" /> $$$
                            </label>
                        </div>

                        <h3 class="mb-2 font-semibold">Rating</h3>
                        <div class="flex flex-col gap-2">
                            <label class="flex items-center gap-2">
                                <RadioButton v-model="selectedFilter" inputId="1star" value="1star" /> <i class="pi pi-star"></i>
                            </label>
                            <label class="flex items-center gap-2">
                                <RadioButton v-model="selectedFilter" inputId="2star" value="2star" /> <i class="pi pi-star"></i> <i class="pi pi-star"></i>
                            </label>
                            <label class="flex items-center gap-2">
                                <RadioButton v-model="selectedFilter" inputId="3star" value="3star" /> <i class="pi pi-star"></i> <i class="pi pi-star"></i> <i class="pi pi-star"></i>
                            </label>
                            <label class="flex items-center gap-2">
                                <RadioButton v-model="selectedFilter" inputId="4star" value="4star" /> <i class="pi pi-star"></i> <i class="pi pi-star"></i> <i class="pi pi-star"></i> <i class="pi pi-star"></i>
                            </label>
                        </div>
                    </template>
                </Card>
            </div>

            <!-- Products Section -->
            <div class="grid grid-cols-3 gap-4 w-10/12 h-full overflow-y-scroll">
                <Card v-for="(product, index) in products" :key="index" class="w-full">
                    <template #title>{{ product.title }}</template>
                    <template #content>
                        <p class="m-0">{{ product.description }}</p>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<style>
</style>
