<template>
    <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-90 text-black">
                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                E#STORE
            </a>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <p v-if="errors.message != ''" class="text-red-500 p-1 m-1">{{ errors.message }}</p>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="registerUser">
                        <div>
                            <p v-if="errors.email != ''" class="text-red-500 p-1 m-1">{{ errors.name }}</p>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                Name</label>
                            <input v-model="user.name" type="text" name="name" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name" required="">
                        </div>
                        <div>
                            <p v-if="errors.email != ''" class="text-red-500 p-1 m-1">{{ errors.email }}</p>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input v-model="user.email" type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" required="">
                        </div>
                        <div>
                            <p v-if="errors.email != ''" class="text-red-500 p-1 m-1">{{ errors.password }}</p>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input v-model="user.password" type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="">
                        </div>
                        <div>
                            <p v-if="errors.email != ''" class="text-red-500 p-1 m-1">{{ errors.password_confirmation }}</p>
                            <label for="confirm-password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                password</label>
                            <input v-model="user.password_confirmation" type="password" name="confirm-password" id="confirm-password"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="">
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required="">
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a
                                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit"
                            class="w-full btn btn-primary text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create
                            an account</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <router-link :to="{ name: 'login' }"
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here
                            </router-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
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
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

let errors = ref({
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
    message: "",
});

const baseUrl = inject("baseUrl");


// @ts-ignore
const registerUser = () => {
        errors.value.email = "",
        errors.value.password = "",
        errors.value.message = "",
        errors.value.name = "",
        errors.value.password_confirmation = "",

        axios({
            method: 'post',
            url: baseUrl + `register`,
            data: {
                email: user.email,
                password: user.password,
                name: user.name,
                password_confirmation: user.password_confirmation,
            }
        }).then((res) => {
            if (res.data.success) {
                router.push('/login');
            } else {
                errors.value.message = res.data.message;
                user.email = "";
                user.password = "";
                user.name = "";
                user.password_confirmation = "";
            }

        }
        ).catch((error) => {
            console.warn('Not good man :(');
            errors.value.email = error.response.data.errors.email[0];
            errors.value.password = error.response.data.errors.password[0];
            errors.value.name = error.response.data.errors.name[0];
            errors.value.password_confirmation = error.response.data.errors.password_confirmation[0];
            user.email = "";
            user.password = "";
            user.name = "";
            user.password_confirmation = "";

        })

}



// @ts-ignore
</script>


<style lang="scss" scoped></style>