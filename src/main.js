import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入全部，会引入所有的组件，占用内存较大（可以用babel按需引入）
// import antd from "ant-design-vue"

// import 'ant-design-vue/dist/antd.less';
// import "ant-design-vue/lib/button/style"    // 使用babel之后可以不用再单独引入样式

import { Button, Layout, Icon, Drawer, Radio } from "ant-design-vue";

Vue.config.productionTip = false;
Vue.use(Button); // 全局注册
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
