<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Password from 'primevue/password';

const router = useRouter()

const username = ref('')
const password = ref('')

const login = () => {
    router.push('dashboard')
}
</script>

<template>
    <Transition>
        <div class="w-full h-full absolute top-0 left-0 p-20">
            <div class="flex flex-row justify-between items-center shadow-lg w-full h-full">
                <div id="featured-img" class="flex flex-col justify-between p-20 w-5/12 h-full rounded-br-xl bg-gray-500">
                    <h1>Prints Charming</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eveniet inventore nihil, labore voluptates reiciendis.</p>
                </div>
    
                <div class="flex flex-col w-7/12 h-full justify-start items-start p-20">
                    <h1 class="font-bold text-3xl">Welcome!</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, optio.</p>
    
                    <div class="flex flex-col justify-center items-center mt-10 w-full h-10/12">
                        <div class="flex flex-col gap-10 w-9/12">
                            <FloatLabel class="w-full">
                                <InputText id="username" v-model="username" fluid />
                                <label for="username">Username</label>
                            </FloatLabel>
            
                            <FloatLabel class="w-full">
                                <Password id="password" v-model="password" :feedback="false" fluid />
                                <label for="password">Password</label>
                            </FloatLabel>
        
                            <div class="flex flex-col items-end">
                                <Button label="Login" icon="pi pi-check" iconPos="right" fluid @click="login" />
                                <a @click="() => { this.$router.push('register') }">Lorem ipsum dolor sit amet.</a>
                            </div>
                        </div>

                        <p class="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum quibusdam rem voluptate nemo est?</p>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style>
#featured-img {
    background-image: url('../assets/asset-1.jpg');
    background-position: center;
    background-size: cover;
    color: white;
}
</style>