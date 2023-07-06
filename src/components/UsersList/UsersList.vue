<template>
  <section class="items">
    <div class="items__head">
      <BaseButton v-bind:text="'|'" :className="'bg-secondary'" />
    </div>
    <ul class="items__list">
      <UserItem
        v-for="item of items"
        :key="item.id"
        v-bind:item="item"
      />
    </ul>
  </section>
</template>
<script>
import BaseButton from '../BaseButton/BaseButton.vue';
import UserItem from '../UserItem/UserItem.vue';
export default {
    name: 'UsersList',
    components: {
        BaseButton,
        UserItem,
    },
    props: ["items"],
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
@import '@/components/ItemsList/index.scss';
</style>