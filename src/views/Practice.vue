<template>
  <div>
    <nav class="fixed w-full bg-whaite shadow-lg">
      <div class="bg-orange-400 flex flex-row">
        <div class="basis-1/2 text-white font-thin px-2">
          Lane - 1, House - 171 (3rd Floor), Baridhara DOHS, Dhaka-1206, Bangladesh</div>
        <div class="basis-1/4  text-white font-thin">
          info@orangebd.com</div>
        <div class="basis-1/4  text-white font-thin">Sunday - Thursday 9:30-6:00</div>
      </div>
      <div class=" mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a href="#" class="text-white-900 text-2xl font-semibold text-orange-400">OrangeBD</a>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-baseline space-x-4">
              <a href="#" class="text-black-500 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" class="text-black-500 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" class="text-black-500 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#" class="text-black-500 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <a href="#" class="text-black-500 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <button @click="toggleMobileMenu" class="text-orange-700 hover:text-orange-500 focus:outline-none focus:text-orange-500"
              aria-label="Toggle menu">
              <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path x-show="!isMobileMenuOpen" class="block" fill-rule="evenodd" clip-rule="evenodd"
                  d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                <path x-show="isMobileMenuOpen" class="block" fill-rule="evenodd" clip-rule="evenodd"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div :class="mobileMenuClass">
        <div class="px-2 pt-2 pb-3 bg-orange-500 space-y-1 sm:px-3">
          <a href="#" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">About</a>
          <a href="#" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">Services</a>
          <a href="#" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          <a href="#" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
        </div>
      </div>
    </nav>
    <div class="pt-32" >
      <section class="bg-gray-100 py-16">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold text-gray-800 mb-8">Welcome to My App</h1>
          <p class="text-xl text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper
            lectus a turpis vulputate, ac pellentesque tortor posuere. Quisque consectetur mi nec nibh malesuada
            fringilla.</p>
          <button class="bg-indigo-900 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full">Get
            Started</button>
        </div>
      </section>

      <section class="bg-white py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-gray-800 mb-8">Section 1</h2>
          <!-- Content for section 1 goes here -->
        </div>
      </section>

      <section class="bg-gray-100 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-gray-800 mb-8">Section 2</h2>
          <!-- Content for section 2 goes here -->
        </div>
      </section>

      <section class="bg-white py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-gray-800 mb-8">Section 3</h2>
          <!-- Content for section 3 goes here -->
        </div>
      </section>

      <section class="bg-gray-100 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-gray-800 mb-8">Section 4</h2>
          <!-- Content for section 4 goes here -->
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const mobileMenuClass = computed(() => {
  return {
    'hidden': !isMobileMenuOpen.value,
    'block': isMobileMenuOpen.value,
    'px-2 pt-2 pb-3 space-y-1 sm:px-3': true,
  };
});
</script>

<style lang="scss" scoped></style>