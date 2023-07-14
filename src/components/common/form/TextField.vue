<template>
        <input :value="value" @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
    name: 'TextField',
    props: ['value'],

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>