<template>
  <div class="imgs-wrap">
    <div :class="`img-item-wrap ${img ? '' : 'no-img'}`" v-for="(img, i) in getlist" :key="i">
      <el-image v-if="img" :preview-src-list="[img.src]" :src="img.src">
      </el-image>
      <div v-if="img" class="text">
        <span>{{filterText(img.description)}}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ElImage } from 'element-plus'
export default defineComponent({
  name: 'img-com',
  props: {
    imgList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    getlist () {
      let len = this.imgList.length % 3
      return this.imgList.concat(Array.from({length: len}))
    }
  },
  components: {
    ElImage
  },
  methods: {
    filterText (text: string) {
      text = text || ''
      return text.replace(/_/g, '-')
    }
  }
})
</script>
<style lang="scss" scoped>
@import '@/style/global.scss';
.layout .page-container .imgs-wrap {
  @include flex();
  @include flex-wrap();
  @include flex-between();
  width: 100%;
  height: auto;
}
.img-item-wrap {
  margin: 0 20px 20px 20px;
  width: 100%;
  max-width: 300px;
  @include box-shadow();
  &.no-img {
    @include nobox-shadow();
  }
  .el-image {
    max-height: 200px;
    width: 100%;
    height: 100%;
    // display: block;
    vertical-align: bottom;
  }
  .text {
    text-align: center;
    padding: 10px;
    border-top: 1px solid rgb(0 0 0 / 30%);
  }
}
</style>
