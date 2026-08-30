<template>
    <div class="flex items-center justify-between gap-4 reveal-element mb-8 mt-4 flex-wrap">
        <div class="flex items-center gap-4 text-brand-700">
            <h2 class="text-3xl font-extrabold font-montserrat tracking-tight m-0">{{ title }}</h2>
            <component :is="icon" v-if="icon" stroke-width="2" size="32" class="mb-1" />
        </div>
        <NuxtLink v-if="linkTo" :to="linkTo"
            class="text-sm font-bold text-brand-700 hover:text-brand-900 hover:underline font-montserrat tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 rounded">
            {{ linkLabel }} →
        </NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    title: { type: String, required: true },
    icon: { type: [Object, Function], default: null },
    linkTo: { type: String, default: '' },
    linkLabel: { type: String, default: 'VER TUDO' },
})
</script>
