<template>
  <div class="tree-container">
    <ul>
      <li
        v-for="item in data"
        :key="item.id"
        :style="{ paddingLeft: item.level * steep_weidth + add_width + 'px' }"
        @click="handleTargetFolder(item)"
        v-show="item.level === 0 || showItem(item)"
        :class="{ current: item.id === currentNode.id }"
      >
        <div class="icon">
          <div class="folder">
            <img v-show="!showFolder(item)" src="@/assets/icon/folder.png" />
            <img
              v-show="showFolder(item)"
              src="@/assets/icon/folder-open.png"
            />
          </div>
        </div>
        <div class="name">{{ item.name }}</div>
        <div class="more"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import useTree from './useTree'
export default {
  setup() {
    return {
      ...useTree()
    }
  },
  data() {
    return {
      steep_weidth: 12,
      add_width: 12
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">
.tree-container {
  ul {
    padding: 0;
    margin: 0;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      height: 42px;
      list-style: none;
      font-size: $font-size-base;
      color: $text-color;
      box-sizing: border-box;
      &:hover {
        color: $heading-color;
      }
      .icon {
        .folder {
          width: 20px;
          img {
            width: 100%;
          }
        }
      }
      .name {
        padding: 0 8px;
        flex: 1;
      }
    }
    li.current {
      background-color: $border-color-base;
      &:hover {
      }
    }
  }
}
</style>
