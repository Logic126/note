<template>
  <Layout>
    <template v-slot:header>123</template>
    <template v-slot:sider>234</template>
    <template v-slot:content>345</template>
  </Layout>
</template>

<script>
import Layout from './components/Layout.vue'
export default {
  components: { Layout },
  setup() {
    return {}
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang=""></style>
