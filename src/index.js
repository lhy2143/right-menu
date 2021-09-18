import Vue from 'vue';
import RightMenu from './template.vue';

const Profile = Vue.extend(RightMenu);
let instantiation = null;

export default {
  bind(el, binding) {
    console.log('register the directive rightMenusTwo');
    el.oncontextmenu = function (e) {
      e.preventDefault();
      if (!instantiation) {
        const rightMenuBoxClass = document.createElement('div');
        rightMenuBoxClass.className = 'rightMenuBox';
        rightMenuBoxClass.style = {
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          minWidth: '100%',
          minHeight: '100%',
          zindex: 10,
          pointerEvents: 'none',
        };
        document.querySelector('#app').append(rightMenuBoxClass);
        instantiation = new Profile().$mount('.rightMenuBox');
      }
      // 修改实例数据
      instantiation.menus = binding.value;
      instantiation.clientX = e.pageX;
      instantiation.clientY = e.pageY;
      instantiation.isShow = true;
    };
  },
};
