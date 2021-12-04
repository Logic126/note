module.exports = {
  tabWidth: 2, // 缩进2个字符
  useTabs: false, // 使用tab缩进，默认false
  bracketSpacing: true, // true: { foo: bar } false: {foo: bar}
  printWidth: 80, //超过多少换行
  singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
  semi: false, //行位是否使用分号，默认为true
  trailingComma: 'none', //是否使用尾逗号，有三个可选值"<none|es5|all>"
  arrowParens: 'avoid', // x => x
  jsxBracketSameLine: false, // 将>多行 JSX 元素的 放在最后一行的末尾
  htmlWhitespaceSensitivity: 'ignore',
  vueIndentScriptAndStyle: false, // 是否在 Vue 文件中缩进脚本和样式标签
  jsxSingleQuote: true // 在 JSX 中使用单引号代替双引号
}
