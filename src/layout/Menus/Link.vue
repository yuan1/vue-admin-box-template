<script setup>
  import { useStore } from 'vuex';
  defineProps({
    to: {
      type: String,
      required: true,
    },
  });
  const store = useStore();
  const type = 'router-link';
  const isCollapse = computed(() => store.state.app.isCollapse);
  const linkProps = (to) => {
    return {
      to: to,
    };
  };
  const hideMenu = () => {
    if (document.body.clientWidth <= 1000 && !isCollapse.value) {
      store.commit('app/isCollapseChange', true);
    }
  };
</script>
<template>
  <component :is="type" v-bind="linkProps(to)" @click="hideMenu">
    <slot> </slot>
  </component>
</template>
