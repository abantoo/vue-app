<template>
  <div class="flex bg-transparent shadow-lg min-h-[64px] z-10 justify-between">
    <div class="mx-auto min-h-[64px] mt-auto flex items-center ml-10">
      <svg
        :class="{'animate-slow-bounce': !pokaHover}"
        @mouseover="pokaHover = true"
        @focus="pokaHover = true"
        @mouseleave="pokaHover = false"
        @blur="pokaHover = false"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <circle cx="156" cy="92" r="12"></circle>
        <circle cx="100" cy="92" r="12"></circle>
        <line
          x1="128"
          y1="128"
          x2="128"
          y2="224"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="244"
          y1="128"
          x2="12"
          y2="128"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <path
          d="M208,144a80,80,0,0,1-160,0V112a80,80,0,0,1,160,0Z"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <line
          x1="231.9"
          y1="188"
          x2="203.2"
          y2="171.4"
          fill="none"
          stroke="#000000"    
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="231.9"
          y1="68"
          x2="203.2"
          y2="84.6"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="24.1"
          y1="68"
          x2="52.8"
          y2="84.6"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="24.1"
          y1="188"
          x2="52.8"
          y2="171.4"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
      </svg>
      <div v-if="pokaHover">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <circle cx="156" cy="92" r="12"></circle>
            <circle cx="100" cy="92" r="12"></circle>
            <line
              x1="128"
              y1="128"
              x2="128"
              y2="224"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="244"
              y1="128"
              x2="12"
              y2="128"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <path
              d="M208,144a80,80,0,0,1-160,0V112a80,80,0,0,1,160,0Z"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></path>
            <line
              x1="231.9"
              y1="188"
              x2="203.2"
              y2="171.4"
              fill="none"
              stroke="#000000"    
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="231.9"
              y1="68"
              x2="203.2"
              y2="84.6"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="24.1"
              y1="68"
              x2="52.8"
              y2="84.6"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="24.1"
              y1="188"
              x2="52.8"
              y2="171.4"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
          </svg>
        </span>
        <h1>Hi! Im the Poka</h1>
      </div>
    </div>
    <button
      @click="router.push('/auth')"
      class="text-2xl text-violet-100 transition-all hover:text-purple-500 font-medium p-2 m-auto mr-10"
    >
      Join Poka
    </button>
  </div>
</template>
<script lang="ts" setup>
import router from '../../routes';
import { ref } from 'vue';

const pokaHover = ref(false)

</script>
