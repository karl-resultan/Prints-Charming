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
                <div id="featured-image" class="flex flex-col p-20 w-5/12 h-full rounded-br-xl bg-gray-500">
                    <h1>Prints Charming</h1>
                </div>
    
                <div class="flex flex-col w-7/12 h-full justify-start items-start p-20">
                    <h1 class="font-bold text-3xl">Welcome!</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, optio.</p>
    
                    <div class="flex flex-col justify-center items-center mt-10 w-full">
                        <div class="flex flex-col gap-7 w-9/12">
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
                    </div>
    
                    
                </div>
            </div>
        </div>
    </Transition>
</template>

<style>
#featured-image {
    background-image: url('../assets/10.png');
    background-position: center;
    background-size: cover;
}
</style>