module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: true,
      }, // style: true会加载less文件，style: 'css'是css文件
    ],
  ],
};
