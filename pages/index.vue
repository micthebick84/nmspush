<template>
  <div>
    <h1>Welcome to the Main Page</h1>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
router.push('/login');
</script>
