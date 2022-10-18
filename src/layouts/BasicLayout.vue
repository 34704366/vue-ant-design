<template>
  <div>
    <Header></Header>
    <sider-menu></sider-menu>
    <Footer></Footer>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";

export default {
  // 组件不能直接使用，需要先注册才能使用
  components: {
    Header: Header,
    Footer: Footer,
    SiderMenu: SiderMenu,
  },
};
</script>

<style scoped></style>
