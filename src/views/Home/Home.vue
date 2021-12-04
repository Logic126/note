<template>
  <Layout>
    <template v-slot:header>header</template>
    <template v-slot:folder>
      <p v-for="item in 100" :key="'fo_' + item">folder</p>
    </template>
    <template v-slot:file>
      <p v-for="item in 100" :key="'fe_' + item">file</p>
    </template>
    <template v-slot:content>content</template>
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
