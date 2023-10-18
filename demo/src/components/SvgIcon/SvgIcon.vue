<script lang="ts" setup>
defineProps({
    prefix: {
        type: String,
        default: '#icon-'
    },
    name: String,
    height: {
        type: String,
        default: '16px'
    },
    width: {
        type: String,
        default: '16px'
    },
    fill: {
        type: String,
        default: 'black'
    }
})
</script>
<template>
    <svg :width="width" :height="height">
        <use :xlink:href="prefix + name" :fill="fill" :width="width" :height="height" />
    </svg>
</template>
<style scoped lang="scss"></style>