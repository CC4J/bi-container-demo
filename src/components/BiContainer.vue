<!--
 * @Author: your name
 * @Date: 2021-12-22 17:29:33
 * @LastEditTime: 2021-12-22 19:55:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \bi-container-demo\src\components\BiContainer.vue
-->
<template>
  <div id="bi-container" ref="biContainer">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      width: 0, // 大屏真实宽度
      height: 0, // 大屏真实高度
      originalWidth: 0, // 画布宽度
      originalHeight: 0 // 画布高度
    };
  },
  async mounted() {
    await this.initSize();
    this.updateSize();
    this.updateScale();
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    initSize() {
      return new Promise(resolve => {
        this.$nextTick(() => {
          // 获取大屏真实尺寸
          if (this.options.width && this.options.height) {
            this.width = this.options.width;
            this.height = this.options.height;
          } else {
            this.width = this.$refs.biContainer.clientWidth;
            this.height = this.$refs.biContainer.clientHeight;
          }
          // 获取画布尺寸
          if (!this.originalWidth || !this.originalHeight) {
            this.originalWidth = window.screen.width;
            this.originalHeight = window.screen.height;
          }
          console.log(this.width, this.height, this.originalWidth, this.originalHeight);
        });
        resolve();
      });
    },
    // 将容器尺寸设置为大屏真实尺寸
    updateSize() {
      if (this.width && this.height) {
        this.$refs.biContainer.style.width = `${this.width}px`;
        this.$refs.biContainer.style.height = `${this.height}px`;
      }
    },
    // 更新页面比例
    updateScale() {
      // 获取真实的视口尺寸
      const currentWidth = document.body.clientWidth;
      const currentHeight = document.body.clientHeight;
      // 获取大屏最终宽高
      const realWidth = this.width || this.originalWidth;
      const realHeight = this.height || this.originalHeight;
      // 计算宽高比
      const widthScale = currentWidth / realWidth;
      const heightScale = currentHeight / realHeight;
      this.$refs.biContainer.style.transform = `scale(${widthScale}, ${heightScale})`;
    },
    async onResize() {
      await this.initSize();
      this.updateScale();
    }
  }
};
</script>

<style lang="less">
#bi-container {
  position: fixed;
  top: 0;
  overflow: hidden;
  transform-origin: left top;
  z-index: 9999;
}
</style>
