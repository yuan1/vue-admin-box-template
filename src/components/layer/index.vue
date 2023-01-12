<script setup>
  const props = defineProps({
    layer: {
      type: Object,
      default: () => {
        return {
          show: false,
          title: '',
          showButton: false,
        };
      },
      required: true,
    },
  });
  const emit = defineEmits(['confirm']);
  function confirm() {
    emit('confirm');
  }
  function close() {
    props.layer.show = false;
  }
  defineExpose({
    close,
  });
</script>

<template>
  <el-dialog
    v-model="layer.show"
    draggable
    :title="layer.title"
    :width="layer.width"
    center
  >
    <slot></slot>
    <template #footer v-if="layer.showButton">
      <div>
        <el-button type="primary" @click="confirm">确认</el-button>
        <el-button @click="close">取消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
