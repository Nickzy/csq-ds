<script lang="tsx">
import { defineComponent } from 'vue'
import { imgList } from './index'
import Image from '@/components/Image/index.vue'
export default defineComponent({
  name: 'smallchair-and-endtable',
  // setup() {
    
  // },
  render () {
    return <div>
      <Image imgList={imgList} />
    </div>
  }
})
</script>
