const markdownEditor = new CMarkdownEditor({
  element: document.getElementById('Markdown-Editor'),
  CodeMirror: {
    config: {
      mode: {
        name: 'gfm',
        tokenTypeOverrides: {
          emoji: 'emoji'
        }
      },
      /** 显示行号 */
      lineNumbers: true,
      // 自动验证错误
      matchBrackets: true,
      // 缩进
      indentUnit: 4,
      // 是否换行
      lineWrapping: false,
      // 点击高亮正行
      styleActiveLine: true,
      // 配色(主题)
      theme: 'base16-dark',
      // 自动补全括号
      autoCloseBrackets: true,
      // 自动闭合标签
      autoCloseTags: true,
      // 展开折叠
      foldGutter: true,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
    }
  }
});