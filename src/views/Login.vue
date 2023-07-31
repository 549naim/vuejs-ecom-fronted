<template>
    <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div class="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-purple-800/50 lg:max-w-md">
            <h1 class="text-3xl font-semibold text-center text-purple-700">E#STORE</h1>
            <p v-if="errors.message != ''" class="text-red-500 p-1 m-1">{{ errors.message }}</p>
            <form class="mt-6" @submit.prevent="loginUser">
                <div>
                    <p v-if="errors.email != ''" class="text-red-500 p-1 m-1">{{ errors.email }}</p>
                    <label for="email" class="block text-sm text-gray-800">Email</label>
                    <input v-model="user.email" type="email"
                        class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                </div>
                <div class="mt-4">
                    <div>
                        <p v-if="errors.password != ''" class="text-red-500 p-1 m-1">{{ errors.password }}</p>
                        <label for="password" class="block text-sm text-gray-800">Password</label>
                        <input v-model="user.password" type="password"
                            class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                    </div>
                    <a href="#" class="text-xs text-gray-600 hover:underline">Forget Password?</a>
                    <div class="mt-6">
                        <button
                            class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </div>
            </form>
            <p class="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <router-link
                    :to="{ name: 'register' }" class="font-medium text-purple-600 hover:underline">Sign up</router-link></p>
        </div>
    </div>
</template>

<script setup>
// @ts-ignore
import { ref, reactive, inject, onMounted } from 'vue'
// @ts-ignore
import axios from 'axios'
// @ts-ignore
import { useRouter } from 'vue-router'
import router from '../router';





// @ts-ignore
const user = reactive({
    email: "",
    password: "",
});

let errors = ref({
    email: "",
    password: "",
    message: "",
});

const baseUrl = inject("baseUrl");
let loggedIn = inject("loggedIn");

// @ts-ignore
const loginUser = () => {
    errors.value.email = "",
    errors.value.password = "",
    errors.value.message = "",

        axios({
            method: 'post',
            url: baseUrl + `login`,
            data: {
                email: user.email,
                password: user.password,
            }
        }).then((res) => {
            if (res.data.success) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userType', res.data.user_data.user_type);
                loggedIn =localStorage.token; 
                if (res.data.user_data.user_type == 0) {
                    user.email = "";
                    user.password = "";
                    router.push('/');
                }
                if (res.data.user_data.user_type == 1) {
                    router.push('/admindashboard');
                }

            } else {
                errors.value.message = res.data.message;
                user.email = "";
                user.password = "";
            }

        }
        ).catch((error) => {
            console.warn('Not good man :(');
            errors.value.email = error.response.data.errors.email[0];
            errors.value.password = error.response.data.errors.password[0];
            user.email = "";
            user.password = "";

        })

}



// @ts-ignore
</script>

<style lang="scss" scoped></style>