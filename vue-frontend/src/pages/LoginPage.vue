<script setup>
import { ref } from "vue";
const aa =  ref(111);
</script>

<template>
      <ui-top-app-bar>111</ui-top-app-bar>
    <div class="container">
        {{aa}}
    </div>
</template>