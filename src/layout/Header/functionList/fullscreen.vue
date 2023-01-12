<script setup>
  import { useFullscreen } from '@vueuse/core';

  const { isFullscreen, toggle } = useFullscreen();
</script>
<template>
  <div :title="isFullscreen ? '退出全屏' : '全屏'">
    <el-icon @click="toggle">
      <FullScreen />
    </el-icon>
  </div>
</template>

<style lang="scss" scoped>
  i {
    cursor: pointer;
    font-size: 18px;
    &:focus {
      outline: none;
    }
  }
</style>
