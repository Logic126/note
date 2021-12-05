<template>
  <div class="wangeditor-container">
    <div ref="editor" style="border: none"></div>
    <!-- <button @click="syncHTML">同步内容</button>
    <button @click="handleSetValue('asdfasfasf')">SET</button>
    <button @click="handleClear()">CLEAR</button>
    <button @click="handleGetJson()">getJSON</button> -->
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import WangEditor from 'wangeditor'
export default {
  name: 'app',
  setup() {
    const config = {
      // 配置菜单
      menus: [
        'head', // 标题
        'bold', // 粗体
        'fontSize', // 字号
        'fontName', // 字体
        'italic', // 斜体
        'underline', // 下划线
        'strikeThrough', // 删除线
        'foreColor', // 文字颜色
        'backColor', // 背景颜色
        'link', // 插入链接
        'list', // 列表
        'justify', // 对齐方式
        'quote', // 引用
        'emoticon', // 表情
        'image', // 插入图片
        'table', // 表格
        'video', // 插入视频
        'code', // 插入代码
        'undo', // 撤销
        'redo' // 重复
      ],
      debug: 1,
      colors: [
        '#000000',
        '#eeece0',
        '#1c487f',
        '#4d80bf',
        '#c24f4a',
        '#8baa4a',
        '#7b5ba1',
        '#46acc8',
        '#f9963b',
        '#ffffff'
      ],
      fontNames: ['宋体', '微软雅黑', 'Arial', 'Tahoma', 'Verdana'],
      // 网络图片 tab
      showLinkImg: false,
      // base64 保存图片
      uploadImgShowBase64: true
    }
    const editor = ref()
    let instance

    // 初始化
    onMounted(() => {
      instance = new WangEditor(editor.value)
      // 配置
      instance.config = {
        ...instance.config,
        ...config,
        // 设置高度
        height: handleGetClientHeight()
      }
      Object.assign(instance.config, {
        onchange() {
          console.log('change', instance.txt.html())
        },
        onfocus() {
          console.log('focus', instance.txt.html())
        },
        onblur() {
          console.log('blur', instance.txt.html())
        }
      })
      // 创建
      instance.create()
    })

    // 销毁
    onBeforeUnmount(() => {
      instance.destroy()
      instance = null
    })

    // 设置内容
    const handleSetValue = value => {
      instance.txt.append(value)
    }

    // 清空内容
    const handleClear = () => {
      instance.txt.clear()
    }

    // 获取内容
    const syncHTML = () => {
      console.log(instance.txt.html())
    }

    // 获取JSON
    const handleGetJson = () => {
      console.log(instance.txt.getJSON())
    }

    function handleGetClientHeight() {
      return document.body.offsetHeight && document.body.offsetHeight - 42 - 42
    }

    return {
      syncHTML,
      editor,
      handleSetValue,
      handleClear,
      handleGetJson
    }
  }
}
</script>

<style lang="scss">
.wangeditor-container {
  & >>> .w-e-text-container {
    border: none;
  }
}
</style>
