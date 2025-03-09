<script setup>
import { ref, defineEmits } from 'vue';
import Drawer from 'primevue/drawer';
import Divider from 'primevue/divider';
import Button from 'primevue/button';

const emit = defineEmits();
const visible = ref(false);
const currentView = ref('Products')

const showDrawer = () => {
    visible.value = !visible.value;
};

const changeView = (view) => {
    currentView.value = view;
    emit('update:view', currentView);
}

const navigate = () => {
    
}
</script>

<template>
    <div class="flex flex-row justify-between items-center w-full h-20 p-5 sticky bg-gray-500">
        <div class="flex flex-row items-center gap-15 w-5/12">
            <Button icon="pi pi-bars" @click="showDrawer" />
            <h3 class="text-bold text-lg">PrintsCharming</h3>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, libero.</p>

        <Drawer v-model:visible="visible" header="PrintsCharming">
            <p>This is a test.</p>

            <Divider />

            <div class="flex flex-col gap-10 w-full h-6/12 p-2">
                <!-- TODO: Make these buttons functional -->
                <Button label="Products" icon="pi pi-bars" fluid @click="changeView('Products')" />
                <Button label="My Cart" icon="pi pi-bars" fluid @click="changeView('My Cart')" /> 
                <Button label="Profile" icon="pi pi-bars" fluid @click="changeView('Profile')" />
                <Button label="Sign Out" icon="pi pi-bars" fluid @click="changeView('Sign Out')" /> 
            </div>
        </Drawer>
    </div>

    
</template>

<style>
</style>
