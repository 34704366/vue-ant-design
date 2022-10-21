<template>
  <div>
    <a-drawer
      title="偏好设置"
      :placement="placement"
      :closable="false"
      :visible="visible"
      @close="onClose"
      width="300px"
    >
      <!-- <template v-slot:handle>
            <div class="handle" @click="changeDrawerStatus">
                <a-icon type="setting"></a-icon>
            </div>
        </template> -->
      <div>
        <div>
          <div class="second-title">整体风格定制</div>
          <a-radio-group
            :value="$route.query.navTheme || 'light'"
            @change="(e) => handleSettingChange('navTheme', e.target.value)"
          >
            <a-radio value="light">浅色模式</a-radio>
            <a-radio value="dark">深色模式</a-radio>
          </a-radio-group>
        </div>
        <div>
          <div class="second-title">导航模式</div>
          <a-radio-group
            :value="$route.query.navLayout || 'left'"
            @change="(e) => handleSettingChange('navLayout', e.target.value)"
          >
            <a-radio value="left">左侧</a-radio>
            <a-radio value="top">顶部</a-radio>
          </a-radio-group>
        </div>
      </div>
    </a-drawer>
    <div class="handle" @click="changeDrawerStatus">
      <a-icon type="setting"></a-icon>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
      placement: "right",
      navTheme: "light", // 默认浅色
      navLayout: "left", // 默认左侧
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    changeDrawerStatus() {
      this.visible = !this.visible;
    },
    onChange(e) {
      this.placement = e.target.value;
    },

    // 处理主题颜色和位置变化的函数
    handleSettingChange(type, value) {
      this.$router.push({ query: { ...this.$route.query, [type]: value } });
    },
  },
};
</script>

<style scoped>
.handle {
  position: absolute;
  top: 240px;
  right: 10px;
  width: 40px;
  height: 40px;
  font-size: 25px;
  color: rgb(233, 231, 231);
  text-align: center;
  background-color: #1890ff;
  border-radius: 5px 0 0 5px;
  line-height: 40px;
}
.second-title {
  font-size: 20px;
  font-weight: 600;
  color: #77797d;
}
</style>
