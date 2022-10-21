<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        v-if="navLayout === 'left'"
        :theme="navTheme"
        :trigger="null"
        v-model="collapsed"
        collapsible
      >
        <div class="sider-first-title">Ant Design Vue</div>
        <SiderMenu></SiderMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="header" style="">
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
    <SettingDrawer></SettingDrawer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
import SettingDrawer from "../components/SettingDrawer";
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "light";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    },
  },
  // 组件不能直接使用，需要先注册才能使用
  components: {
    Header: Header,
    Footer: Footer,
    SiderMenu: SiderMenu,
    SettingDrawer: SettingDrawer,
  },
};
</script>

<style scoped lang="less">
@lightTitleColor: rgb(246, 241, 241);
@DarkTitleColor: rgb(10, 10, 10);
.IconHoverColor {
  background-color: #ece2e2;
  color: #ffffff;
}
.trigger-icon {
  padding: 0px 20px;
  /* 可以控制高度 */
  line-height: 64px;
  /* ant库中设置字体大小可以影响icon大小 */
  font-size: 25px;

  &:hover {
    .IconHoverColor();
  }
}
// .trigger-icon:hover {
//   background-color: #eeeeee;
// }

.header {
  background: #fff;
  padding: 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

/* sider-first-title */
.sider-first-title {
  background-color: inherit;
  text-align: center;
  line-height: 200%;
  height: 60px;
  font-size: 26px;
  overflow: hidden;
}
.nav-theme-dark .sider-first-title {
  color: @lightTitleColor;
}
.nav-theme-light .sider-first-title {
  color: @DarkTitleColor;
}
</style>
