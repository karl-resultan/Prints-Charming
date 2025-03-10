<script setup>
import { ref } from 'vue';

import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Password from 'primevue/password';


const username = ref('')
const password = ref('')
</script>

<template>
    <div class="w-full h-full absolute top-0 left-0 p-20">
        <div class="flex flex-row justify-between items-center shadow-lg w-full h-full">
            <div id="side-img" class="flex flex-col justify-between p-20 w-5/12 h-full rounded-br-xl bg-gray-500">
                <h1 class="font-bold text-3xl">PrintsCharming</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi tenetur consequuntur expedita magni molestiae?</p>
            </div>

            <div class="flex flex-col w-7/12 h-full justify-start items-start p-20">
                <h1 class="font-bold text-3xl">Registration</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, optio.</p>

                <div class="flex flex-col justify-center items-center mt-10 w-full">
                    <div class="flex flex-col gap-10 w-9/12 pt-10">
                        <FloatLabel class="w-full">
                            <InputText id="username" v-model="username" fluid />
                            <label for="username">Username</label>
                        </FloatLabel>
        
                        <FloatLabel class="w-full">
                            <Password id="password" v-model="password" :feedback="false" fluid />
                            <label for="password">Password</label>
                        </FloatLabel>

                        
                        <FloatLabel class="w-full">
                            <Password id="confirm" v-model="password" :feedback="false" fluid />
                            <label for="confirm">Confirm Password</label>
                        </FloatLabel>

                        <FloatLabel class="w-full">
                            <InputText id="firstName" v-model="password" fluid />
                            <label for="firstName">First Name</label>
                        </FloatLabel>

                        <FloatLabel class="w-full">
                            <InputText id="lastName" v-model="password" fluid />
                            <label for="lastName">Last Name</label>
                        </FloatLabel>

                        
                        <FloatLabel class="w-full">
                            <Password id="mail" v-model="password" :feedback="false" fluid />
                            <label for="mail">Email</label>
                        </FloatLabel>

                        
                        <FloatLabel class="w-full">
                            <Password id="contact" v-model="password" :feedback="false" fluid />
                            <label for="contact">Contact Number</label>
                        </FloatLabel>
    
                        <div class="flex flex-col items-end">
                            <Button label="Register" icon="pi pi-check" iconPos="right" fluid />
                            <a @click="() => { this.$router.push('/login') }">Lorem ipsum dolor sit amet.</a>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus fugiat dicta sed libero reprehenderit ad molestias, omnis molestiae laudantium rerum sunt illo velit enim ullam error cumque aliquam consectetur.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#side-img {
    background-image: url('../assets/asset-1.jpg');
    background-position: center;
    background-size: cover;
    color: white;
}
</style>