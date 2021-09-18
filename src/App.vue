<template>
  <div id="app">
    <div v-rightMenu="rightMenus">rightMenu</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rightMenus: {
        name: 'defaultRightMenus',
        menus: [
          [
            {
              id: 0,
              title: '关闭',
              callback: () => {},
            },
            {
              id: 1,
              title: '关闭其它',
              callback: () => {},
            },
            {
              id: 2,
              title: '关闭所有',
              callback: () => {},
            },
          ],
        ],
      },
    };
  },
};
</script>
