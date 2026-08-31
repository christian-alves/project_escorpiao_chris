<template>
    <NuxtLink v-if="to" :to="to"
        class="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-3 font-semibold tracking-wide transition-all duration-300 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        :class="variantClass">
        <span class="relative z-10" :class="{ 'group-hover:text-brand-700': variant === 'primary' }"><slot /></span>
    </NuxtLink>
    <button v-else :type="type"
        class="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-3 font-semibold tracking-wide transition-all duration-300 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        :class="variantClass">
        <span class="relative z-10" :class="{ 'group-hover:text-brand-700': variant === 'primary' }"><slot /></span>
    </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    to: { type: String, default: '' },
    type: { type: String, default: 'button' },
    variant: { type: String, default: 'primary' },
})

const variantClass = computed(() => ({
    primary: 'border border-brand-700 bg-brand-700 text-white hover:bg-white hover:shadow-[0_8px_30px_rgb(185,28,28,0.4)] hover:-translate-y-1 focus-visible:ring-brand-700',
    accent: 'border border-accent text-white bg-gradient-to-br from-accent to-accent-dark hover:-translate-y-1 focus-visible:ring-accent',
    outline: 'border border-brand-700 text-brand-700 bg-transparent hover:bg-brand-700 hover:text-white focus-visible:ring-brand-700',
}[props.variant] || ''))
</script>
