<script setup>
import { computed } from 'vue';
import { useCounterStore } from './stores/counter';
const store = useCounterStore();
const { increment } = store; //분해할당
const count = computed(() => store.count);

increment();

console.log;
</script>

<template>{{ store.count }}//{{ store.doubleCount }}<br />{{ count }}</template>
