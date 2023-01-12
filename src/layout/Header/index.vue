<script setup>
  import { useStore } from 'vuex';
  import FullScreen from './functionList/fullscreen.vue';
  import SizeChange from './functionList/sizeChange.vue';
  import Theme from './functionList/theme.vue';
  import Breadcrumb from './Breadcrumb.vue';
  import PasswordLayer from './passwordLayer.vue';
  import { ArrowDown, Expand, Fold } from '@element-plus/icons-vue';

  const store = useStore();
  const layer = reactive({
    show: false,
    showButton: true,
    width: '520px',
  });
  const isCollapse = computed(() => store.state.app.isCollapse);
  // isCollapse change to hide/show the sidebar
  const opendStateChange = () => {
    store.commit('app/isCollapseChange', !isCollapse.value);
  };

  // login out the system
  const loginOut = () => {
    store.dispatch('user/loginOut');
  };

  const showPasswordLayer = () => {
    layer.show = true;
  };
</script>
<template>
  <header>
    <div class="left-box">
      <!-- 收缩按钮 -->
      <div class="menu-icon" @click="opendStateChange">
        <el-icon>
          <Expand v-if="isCollapse" />
          <Fold v-else />
        </el-icon>
      </div>
      <Breadcrumb />
    </div>
    <div class="right-box">
      <!-- 快捷功能按钮 -->
      <div class="function-list">
        <div class="function-list-item hidden-sm-and-down"><FullScreen /></div>
        <div class="function-list-item"><SizeChange /></div>
        <div class="function-list-item hidden-sm-and-down"><Theme /></div>
      </div>
      <!-- 用户信息 -->
      <div class="user-info">
        <el-dropdown>
          <span class="el-dropdown-link">
            管理员
            <el-icon class="el-icon--right">
              <ArrowDown />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="showPasswordLayer"
                >修改密码</el-dropdown-item
              >
              <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <PasswordLayer :layer="layer" v-if="layer.show" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: var(--system-header-background);
    padding-right: 22px;
  }
  .left-box {
    height: 100%;
    display: flex;
    align-items: center;
    .menu-icon {
      width: 60px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      font-weight: 100;
      cursor: pointer;
      margin-right: 10px;
      &:hover {
        background-color: var(--system-header-item-hover-color);
      }
      i {
        color: var(--system-header-text-color);
      }
    }
  }
  .right-box {
    display: flex;
    justify-content: center;
    align-items: center;
    .function-list {
      display: flex;
      .function-list-item {
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        :deep(i) {
          font-size: 18px;
          color: var(--system-header-text-color);
        }
        .el-dropdown {
          height: 100%;
        }
      }
    }
    .user-info {
      margin-left: 20px;
      .el-dropdown-link {
        color: var(--system-header-breadcrumb-text-color);
      }
    }
  }
</style>
