<template>
    <div class="not-found">
        <div class="not-found__body">
        <h1 class="not-found__title">404</h1>
        <h2>Страница не найдена</h2>
        <p>Возможно вы ввели неверно адрес или страница была удалена с сервера</p>
        <router-link to="/">Вернуться на главную</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFoundPage',

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