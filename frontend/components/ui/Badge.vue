<template>
    <span class="inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-xs font-bold leading-none select-none pointer-events-none"
        :class="variantClass">
        <slot />
    </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    variant: { type: String, default: 'red' },
})

const variantClass = computed(() => ({
    red: 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-md',
    blue: 'bg-accent text-white',
}[props.variant] || ''))
</script>
