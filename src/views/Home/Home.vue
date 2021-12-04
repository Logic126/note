<template>
  <Layout>
    <template v-slot:header>header</template>
    <template v-slot:folder>
      <p v-for="item in 100" :key="'fo_' + item">folder</p>
    </template>
    <template v-slot:file>
      <p v-for="item in 100" :key="'fe_' + item">file</p>
    </template>
    <template v-slot:content>
      <ul>
        <li v-for="item in 50" :key="'l_' + item">
          <p v-for="_item in 100" :key="'l_' + item + '_p_' + _item">
            [{{ item }}，{{ _item }}]
          </p>
        </li>
      </ul>
    </template>
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
