<script setup>
import { ref } from 'vue';
</script>

<template>
    <Transition>
        <div id="hero" class="flex flex-col w-full h-full absolute top-0 left-0">
            <div class="flex flex-row justify-between w-full h-1/12 p-10">
                <div class="h-full">PrintsCharming</div>
    
                <div class="flex flex-row justify-center gap-15 h-full">
                    <a href="">Home</a>
                    <a href="">Products</a>
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
                </div>
    
                <div class="flex flex-row justify-center gap-5 h-full">
                    <Button label="Login" />
                    <Button label="Sign Up" />
                </div>
            </div>
    
            <div class="flex flex-col justify-center items-center w-full h-full">
                <h1 class="font-extrabold text-4xl">PrintsCharming</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque id maxime repudiandae molestiae illo, iste doloremque tenetur qui vel ab!</p>
                <Button class="mt-10" label="Get Started" @click="() => { this.$router.push('/login') }" />
            </div>
    
            <div class="flex flex-row justify-between p-10">
                <p>2025</p>
                <p>All Rights Reserved.</p>
            </div>
        </div>
    </Transition>
</template>

<style>
#hero {
    background-image: url('../assets/hero.svg');
    background-position: center;
    background-size: cover;
}
</style>