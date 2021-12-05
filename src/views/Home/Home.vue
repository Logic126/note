<template>
  <Layout>
    <template v-slot:header>header</template>
    <template v-slot:folder>
      <Tree />
      <!-- <p v-for="item in 100" :key="'fo_' + item">folder</p> -->
    </template>
    <template v-slot:file>
      <p v-for="item in 100" :key="'fe_' + item">file</p>
    </template>
    <template v-slot:content>
      <Editor />
    </template>
  </Layout>
</template>

<script>
import Layout from './components/Layout.vue'
import Tree from './components/Tree.vue'
import Editor from '@/components/Editor/Wangeditor.vue'
export default {
  components: { Layout, Tree, Editor },
  setup() {
    return {}
  },
  data() {
    return {
      html: `<p>123123</p>`,
      text: '<p>123123</p>'
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
  li {
    list-style: none;
    p {
      padding: 2px;
      white-space: nowrap;
    }
  }
}
</style>
