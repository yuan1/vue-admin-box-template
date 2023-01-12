<script setup>
  import { ElMessage } from 'element-plus';
  import { add, update } from '@/api/table';
  import { selectData, radioData } from './enum';
  import Layer from '@/components/layer/index.vue';
  const props = defineProps({
    layer: {
      type: Object,
      default: () => {
        return {
          show: false,
          title: '',
          showButton: true,
        };
      },
    },
  });
  const ruleForm = ref(null);
  const layerDom = ref(null);
  let form = ref({
    name: '',
  });

  const rules = {
    name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
    number: [{ required: true, message: '请输入数字', trigger: 'blur' }],
    choose: [{ required: true, message: '请选择', trigger: 'blur' }],
    radio: [{ required: true, message: '请选择', trigger: 'blur' }],
  };
  init();
  function init() {
    // 用于判断新增还是编辑功能
    if (props.layer.row) {
      form.value = JSON.parse(JSON.stringify(props.layer.row)); // 数量量少的直接使用这个转
    } else {
    }
  }

  const emit = defineEmits(['getTableData']);
  function submit() {
    if (ruleForm.value) {
      ruleForm.value.validate((valid) => {
        if (valid) {
          let params = form.value;
          if (props.layer.row) {
            updateForm(params);
          } else {
            addForm(params);
          }
        } else {
          return false;
        }
      });
    }
  }
  // 新增提交事件
  function addForm(params) {
    add(params).then((res) => {
      ElMessage({
        type: 'success',
        message: '新增成功',
      });
      emit('getTableData', true);
      layerDom.value && layerDom.value.close();
    });
  }
  // 编辑提交事件
  function updateForm(params) {
    update(params).then((res) => {
      ElMessage({
        type: 'success',
        message: '编辑成功',
      });
      emit('getTableData', false);
      layerDom.value && layerDom.value.close();
    });
  }
</script>

<template>
  <Layer :layer="layer" @confirm="submit" ref="layerDom">
    <el-form
      :model="form"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      style="margin-right: 30px"
    >
      <el-form-item label="名称：" props="name">
        <el-input v-model="form.name" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="数字：" props="number">
        <el-input
          v-model="form.number"
          oninput="value=value.replace(/[^\d]/g,'')"
          placeholder="只能输入正整数"
        ></el-input>
      </el-form-item>
      <el-form-item label="选择器：" props="select">
        <el-select v-model="form.choose" placeholder="请选择" clearable>
          <el-option
            v-for="item in selectData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="单选框：" props="radio">
        <el-radio-group v-model="form.radio">
          <el-radio
            v-for="item in radioData"
            :key="item.value"
            :label="item.value"
            >{{ item.label }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
    </el-form>
  </Layer>
</template>

<style lang="scss" scoped></style>
