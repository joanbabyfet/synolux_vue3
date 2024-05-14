<template>
    {{ formatText }}
    {{ name }}
    {{ age }}
</template>

<script setup>
//子组件
import { toRefs, defineProps } from 'vue'

const props = defineProps({
    name: String,
    age: Number,
})
const { name } = toRefs(props)
const { age } = toRefs(props)
const formatText = `hi ${name.value}`
</script>
