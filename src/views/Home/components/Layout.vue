<template>
  <div class="home-layout-container">
    <div class="layout-header-area">
      <slot name="header" />
    </div>
    <div class="layout-body-area">
      <div class="layout-sider-area">
        <slot name="sider" />
      </div>
      <div class="layout-content-area">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.home-layout-container {
  background-color: #fff;
  .layout-header-area {
    border-bottom: 1px solid $primary-color;
  }
  .layout-body-area {
  }
}
</style>
