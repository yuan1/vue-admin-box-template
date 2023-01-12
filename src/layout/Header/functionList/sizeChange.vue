<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  const store = useStore();
  const route = useRoute();
  const router = useRouter();
  const elementSize = computed(() => store.state.app.elementSize);
  const list = [
    { size: 'default', name: '默认' },
    { size: 'large', name: '大' },
    { size: 'small', name: '小' },
  ];
  const { fullPath } = unref(route);
  function handleCommand(command) {
    store.commit('app/stateChange', {
      name: 'elementSize',
      value: command,
    });
    setElementSize();
  }
  function setElementSize() {
    router.replace({
      path: '/redirect' + fullPath,
    });
  }
</script>
<template>
  <el-dropdown @command="handleCommand">
    <el-icon><CopyDocument /></el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="d in list"
          :key="d.size"
          :command="d.size"
          :disabled="elementSize === d.size"
        >
          {{ d.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped></style>
