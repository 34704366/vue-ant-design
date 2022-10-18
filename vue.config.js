// 自定义webpack规则，（注意自定义规则之后要重新启动工程，因为配置不会对热更新生效）
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
