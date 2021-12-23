<!--
 * @Author: your name
 * @Date: 2021-12-22 17:29:33
 * @LastEditTime: 2021-12-23 17:36:14
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
      originalWidth: 0, // 窗口原始宽度
      originalHeight: 0 // 窗口原始高度
    };
  },
  async mounted() {
    // 获取相关尺寸数据
    await this.initSize();
    // 设置容器尺寸，让容器尺寸与内容尺寸一致
    this.updateSize();
    // 设置容器缩放比例，实现内容一屏完整显示
    this.updateScale();
    // 监听 resize事件，实现页面动态适配
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    // 页面销毁前 移除 resize 事件监听
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    // 获取相关尺寸数据
    initSize() {
      return new Promise(resolve => {
        // 使用 nextTick 确保容器中的内容渲染完成
        this.$nextTick(() => {
          // 获取大屏真实尺寸
          if (this.options.width && this.options.height) {
            this.width = this.options.width;
            this.height = this.options.height;
          } else {
            // 若未传递大屏真实尺寸，则获取容器被内容撑满后的尺寸 作为大屏真实尺寸
            this.width = this.$refs.biContainer.clientWidth;
            this.height = this.$refs.biContainer.clientHeight;
          }
          // 获取窗口原始尺寸
          if (!this.originalWidth || !this.originalHeight) {
            this.originalWidth = window.screen.width;
            this.originalHeight = window.screen.height;
          }
        });
        resolve();
      });
    },
    // 设置容器尺寸，让容器尺寸与内容尺寸一致
    updateSize() {
      if (this.width && this.height) {
        this.$refs.biContainer.style.width = `${this.width}px`;
        this.$refs.biContainer.style.height = `${this.height}px`;
      }
    },
    // 设置容器缩放比例，实现内容一屏完整显示
    updateScale() {
      // 屏幕视口存在认为缩放，拖动，导致真实视口发生变化，这里获取真实的视口尺寸
      const currentWidth = document.body.clientWidth;
      const currentHeight = document.body.clientHeight;
      // 获取大屏最终宽高， 若未获得大屏幕尺寸，则将屏幕视口原始尺寸作为大屏最终宽高
      const realWidth = this.width || this.originalWidth;
      const realHeight = this.height || this.originalHeight;
      // 计算宽高比
      const widthScale = currentWidth / realWidth;
      const heightScale = currentHeight / realHeight;
      this.$refs.biContainer.style.transform = `scale(${widthScale}, ${heightScale})`;
    },
    // 监听 resize 事件， 动态更新容器缩放比
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
