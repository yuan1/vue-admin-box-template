import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import * as Icons from '@element-plus/icons-vue';

import 'element-plus/es/components/message/style/css';
import 'normalize.css'; // css初始化
import './assets/style/common.scss'; // 公共css
import './assets/style/app.scss';
const app = createApp(App);
app.use(router);
app.use(store);
// 注册全局组件
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key]);
});

app.mount('#app');
