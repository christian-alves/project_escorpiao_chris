<template>
    <component :is="tag" class="bg-white rounded-card shadow-card border border-gray-100 p-card-p"
        :class="hover ? 'transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1' : ''">
        <slot />
    </component>
</template>

<script setup>
defineProps({
    tag: { type: String, default: 'div' },
    hover: { type: Boolean, default: false },
})
</script>
