<script setup>
import { ref } from 'vue';
import Drawer from 'primevue/drawer';
import Divider from 'primevue/divider';
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import Image from 'primevue/image';

const visible = ref(false);
const text1 = ref('');
const text2 = ref('');
const text3 = ref('');
const text4 = ref('');
const text5 = ref('');

const showDrawer = () => {
    visible.value = !visible.value;
};

const navigate = () => {
    // TODO: emit to parent that I will do shit
};
</script>

<template>
    <div class="flex flex-row justify-between gap-20 w-8/12 h-10/12 pt-10 pb-10">
        <div class="w-4/12">
            <div class="card flex flex-col justify-center">
                <!-- Make this dynamic -->
                <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="500" class="mb-5" />
                <Divider />

                <h1 class="mt-10 font-bold text-xl">Sample Username</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, fugit.</p>
            </div>
        </div>

        <div class="flex flex-col justify-start w-8/12">
            <div class="flex flex-row justify-between items-center w-full">
                <h2 class="font-bold">Personal Information</h2>
                <Button label="Edit Profile" icon="pi pi-user" />
            </div>
            
            <div class="grid grid-cols-2 gap-5 mt-10 mb-5">
                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-user"></i>
                    </InputGroupAddon>
                    <InputText v-model="text1" placeholder="First Name" />
                </InputGroup>

                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-user"></i>
                    </InputGroupAddon>
                    <InputText v-model="text2" placeholder="Last Name" />
                </InputGroup>

                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-envelope"></i>
                    </InputGroupAddon>
                    <InputText v-model="text3" placeholder="Email" />
                </InputGroup>

                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-phone"></i>
                    </InputGroupAddon>
                    <InputText v-model="text4" placeholder="Phone Number" />
                </InputGroup>

                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-map-marker"></i>
                    </InputGroupAddon>
                    <InputText v-model="text5" placeholder="Address" />
                </InputGroup>
            </div>

            <Divider />

            <div>
                <h2>My Reviews</h2>
                <div>
                    <Card>

                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>
