<template>
<button :class="'btn ' + className" @click="$emit(event)">{{text}}</button>
</template>

<script>
export default {
        props: {
        text: {
            type: String,
            required: true,
        },
        event: {
            type: String,
            default: '',
        },
        className: {
            type:String,
        }
    },
    name: 'BaseButton',

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
@import '@/styles/main.scss';
</style>