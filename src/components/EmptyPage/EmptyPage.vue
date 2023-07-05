<template>
            <div class="no-items__page">
                <div class="no-items__page-inner">
                    <p class="no-items__title">{{inner}}</p>
                    <router-link 
                    to="/create"
                    >
                    <BaseButton v-bind:text="'Добавить'"  :class="'bg-primary'" @click:create-item="$emit(createItem)"/>
                    </router-link>
                </div>
            </div>   
</template>

<script>
import BaseButton from '../BaseButton/BaseButton.vue';
export default {
    props: {
        inner: {
            type:String,
            required:true,
        },
        creating: {
            type: Boolean,
        }

        
    },
    components: {
        BaseButton,
    },
    name: 'EmptyPageVue',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        createItem(param) {
            this.$emit('create-item', param);
            
        },
    },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>