<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import CustomerHeaderComponent from '@/components/CustomerHeaderComponent.vue';
import AllProductsComponent from '@/components/customerPages/AllProductsComponent.vue';
import ProfileComponent from '@/components/customerPages/ProfileComponent.vue';
import MyCartComponent from '@/components/customerPages/MyCartComponent.vue';
import CustomerFooterComponent from '@/components/CustomerFooterComponent.vue';

const router = useRouter()
const currentComponent = ref(AllProductsComponent); // ✅ Default component

const changeView = (value) => {
    switch (value) {
        case 'Products':
            currentComponent.value = AllProductsComponent;
            break;
        case 'MyCart':
            currentComponent.value = MyCartComponent;
            break;
        case 'Profile':
            currentComponent.value = ProfileComponent;
            break;
        case 'SignOut':
            router.push('/login');
            break;
    }
}
</script>

<template>
    <div class="w-full h-full absolute top-0 left-0">
        <CustomerHeaderComponent @updateView="changeView" />

        <div class="flex flex-col items-center h-full w-full">
            <component :is="currentComponent" class="mt-10" /> <!-- ✅ Dynamically loads the component -->
        </div>

        <CustomerFooterComponent />
    </div>
</template>

<style>
</style>
