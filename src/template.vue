<template>
  <div class="right-menu-container">
    <div class="right-menu-box" v-clickOutside="clickOutside">
      <div
        v-for="(item, index) in menus.menus"
        class="right-menu-item"
        :key="index"
        @click="handleClick(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      //菜单内容
      type: Object,
      default: () => {
        return {};
      },
    },
    clientX: {
      // left值
      type: Number,
      default: 0,
    },
    clientY: {
      // top值
      type: Number,
      default: 0,
    },
  },
  methods: {
    handleClick(item) {
      item.callback();
    },
    clickOutside(){
        console.log('clickOutside...');
    }
  },
};
</script>

<style lang="less">
.right-menu-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  z-index: 10;
  pointer-events: none;
  .right-menu-box {
    left: 115px;
    top: 39px;
    width: 100px;
    height: 50px;
    background: #aaa6a6;
    color: #fff;
    position: absolute;
    .right-menu-item {
    }
  }
}
</style>
