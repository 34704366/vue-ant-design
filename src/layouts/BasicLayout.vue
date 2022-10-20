<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider :trigger="null" v-model="collapsed" collapsible>
        <SiderMenu></SiderMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            class="trigger-icon"
            @click="collapsed = !collapsed"
          ></a-icon>
          <Header></Header>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";

export default {
  data() {
    return {
      collapsed: false,
    };
  },
  // 组件不能直接使用，需要先注册才能使用
  components: {
    Header: Header,
    Footer: Footer,
    SiderMenu: SiderMenu,
  },
};
</script>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.trigger-icon {
  padding: 0px 20px;
  /* 可以控制高度 */
  line-height: 64px;
  /* ant库中设置字体大小可以影响icon大小 */
  font-size: 25px;
}
.trigger-icon:hover {
  background-color: #eeeeee;
}
</style>
