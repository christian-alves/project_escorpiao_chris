<template>
    <div class="flex flex-col items-center text-center gap-1 px-4 py-2">
        <div class="flex items-baseline gap-1 font-montserrat">
            <span class="text-3xl md:text-4xl font-extrabold text-brand-700 tracking-tight">{{ value }}</span>
            <span v-if="suffix" class="text-xl md:text-2xl font-extrabold text-brand-700">{{ suffix }}</span>
        </div>
        <p class="text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wide font-montserrat max-w-[10rem]">
            {{ label }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    value: { type: [String, Number], required: true },
    suffix: { type: String, default: '' },
    label: { type: String, required: true },
})
</script>
