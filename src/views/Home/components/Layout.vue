<template>
  <div
    class="home-layout-container"
    @mousemove="handleMousemove"
    @mouseup="handleMouseup"
  >
    <!-- header -->
    <div class="layout-header-area">
      <slot name="header" />
    </div>

    <div class="layout-body-area">
      <div class="layout-sider-area">
        <!-- folder -->
        <div class="scrol-area" :style="{ width: folder_width + 'px' }">
          <div class="layout-folder-area">
            <div class="folder-box" :style="{ width: folder_width - 1 + 'px' }">
              <slot name="folder" />
            </div>
            <div
              class="control"
              @mousedown="e => handleMousedown('folder')"
            ></div>
          </div>
        </div>

        <!-- file -->
        <div class="scrol-area" :style="{ width: file_width + 'px' }">
          <div class="layout-file-area" :style="{ width: file_width + 'px' }">
            <div class="file-box"><slot name="file" /></div>
            <div
              class="control"
              @mousedown="e => handleMousedown('file')"
            ></div>
          </div>
        </div>
      </div>

      <!-- content -->
      <div class="layout-content-area">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
import useLayout from './useLayout'
export default {
  setup() {
    return {
      ...useLayout()
    }
  }
}
</script>

<style scoped lang="scss">
.home-layout-container {
  background-color: #fff;
  .layout-header-area {
    box-shadow: $box-shadow-base;
    height: $header-height;
  }
  .layout-body-area {
    display: flex;
    .layout-sider-area {
      display: flex;
      align-items: flex-start;
      user-select: none;
      .scrol-area {
        height: calc(100vh - $header-height);
        overflow-y: auto;
        .layout-folder-area,
        .layout-file-area {
          box-sizing: border-box;
          display: table;
          min-height: calc(100vh - $header-height);
          .folder-box {
            display: table-cell;
          }
          .control {
            display: table-cell;
            width: 1px;
            cursor: col-resize;
            border-right: 1px solid $border-color-base;
            box-sizing: border-box;
          }
        }
      }
    }
    .layout-content-area {
      flex: 1;
      box-sizing: border-box;
      height: calc(100vh - $header-height);
      overflow: auto;
    }
  }
}
</style>
