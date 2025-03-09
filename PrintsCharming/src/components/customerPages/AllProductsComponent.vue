<script setup>
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import RadioButtonGroup from 'primevue/radiobuttongroup';
import { ref } from 'vue';

const text1 = ref('');
const products = ref([])
</script>

<template>
    <div class="flex flex-col justify-between items-center w-9/12 h-full">
        <div class="w-1/2">
            <InputGroup>
                <InputGroupAddon>
                    <i class="pi pi-search"></i>
                </InputGroupAddon>
                <InputText v-model="text1" placeholder="Search" />
            </InputGroup>
        </div>

        <h1 class="font-bold text-3xl mt-10 mb-5">All Products</h1>
        <div class="flex flex-row justify-between gap-5 w-full h-full mb-10">
            <!-- This is the Filter Modal -->
            <div class="w-2/12 h-96">
                <Card>
                    <template #title>Filter</template>
                    <template #content>
                        <h3>Item Type</h3>
                        <RadioButtonGroup name="ingredient" class="flex flex-col gap-2 mt-2 mb-8">
                            <div class="flex items-center gap-2">
                                <RadioButton inputId="cheese" value="Cheese" />
                                <label for="cheese">Cheese</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton inputId="mushroom" value="Mushroom" />
                                <label for="mushroom">Mushroom</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton inputId="pepper" value="Pepper" />
                                <label for="pepper">Pepper</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton inputId="onion" value="Onion" />
                                <label for="onion">Onion</label>
                            </div>
                        </RadioButtonGroup>

                        <h3>Price</h3>
                        <RadioButtonGroup name="ingredient" class="flex flex-col gap-2 mt-2 mb-8">
                            <div class="flex items-center gap-2">
                                <RadioButton inputId="cheese" value="Cheese" />
                                <label for="cheese">$</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton inputId="mushroom" value="Mushroom" />
                                <label for="mushroom">$$</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton inputId="pepper" value="Pepper" />
                                <label for="pepper">$$$</label>
                            </div>
                        </RadioButtonGroup>

                        <h3>Rating</h3>
                        <RadioButtonGroup name="ingredient" class="flex flex-col gap-2 mt-2 mb-8">
                            <div class="flex items-center gap-2">
                                <RadioButton inputId="cheese" value="Cheese" />
                                <label for="cheese">
                                    <i class="pi pi-star"></i>
                                </label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton inputId="cheese" value="Cheese" />
                                <label for="cheese">
                                    <i class="pi pi-star"></i>
                                    <i class="pi pi-star"></i>
                                </label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton inputId="cheese" value="Cheese" />
                                <label for="cheese">
                                    <i class="pi pi-star"></i>
                                    <i class="pi pi-star"></i>
                                    <i class="pi pi-star"></i>
                                </label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton inputId="cheese" value="Cheese" />
                                <label for="cheese">
                                    <i class="pi pi-star"></i>
                                    <i class="pi pi-star"></i>
                                    <i class="pi pi-star"></i>
                                    <i class="pi pi-star"></i>
                                </label>
                            </div>
                        </RadioButtonGroup>
                    </template>
                </Card>
            </div>

            <!-- This is the all products modal -->
            <!-- TODO: Make this shit dynamic -->
            <div class="flex flex-wrap justify-evenly gap-2 w-10/12 h-full overflow-y-scroll">
                <Card class="w-3/12 h-3/12">
                    <template #title>Simple Card</template>
                    <template #content>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                            quas!
                        </p>
                    </template>
                </Card>

                <Card class="w-3/12 h-3/12">
                    <template #title>Simple Card</template>
                    <template #content>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                            quas!
                        </p>
                    </template>
                </Card>

                <Card class="w-3/12 h-3/12">
                    <template #title>Simple Card</template>
                    <template #content>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                            quas!
                        </p>
                    </template>
                </Card>

                <Card class="w-3/12 h-3/12">
                    <template #title>Simple Card</template>
                    <template #content>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                            quas!
                        </p>
                    </template>
                </Card>

                <Card class="w-3/12 h-3/12">
                    <template #title>Simple Card</template>
                    <template #content>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                            quas!
                        </p>
                    </template>
                </Card>

                <Card class="w-3/12 h-3/12">
                    <template #title>Simple Card</template>
                    <template #content>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                            quas!
                        </p>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<style>
</style>
