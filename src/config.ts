export default {
  /**
   * 模板中需要替换的变量。
   * 例如 varibables: {key1: 'value1'}，
   * 会将模板中 {{key1}} 部分替换为value1，包括文件名和文件内容。
   */
  variables: {},
  // 模板来源，位于template目录中。
  template: 'jollymart',
  // 是否自动增加类似于 20200217 的时间后缀
  appendTime: true,
  /**
   * 输出目录的相对路径，src/views代表: [项目根目录]/src/views。
   */
  output: 'src/views'
};
