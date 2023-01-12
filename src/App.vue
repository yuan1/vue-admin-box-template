<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { ElConfigProvider } from 'element-plus';

  import locale from 'element-plus/lib/locale/lang/zh-cn';
  const store = useStore();
  const zIndex = 1;
  const elementSize = computed(() => store.state.app.elementSize);
</script>

<template>
  <el-config-provider :size="elementSize" :z-index="zIndex" :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<style scoped lang="scss">
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100vh;
  }
</style>
