<script lang="tsx">
import { defineComponent } from 'vue'
import { imgList } from './index'
import Image from '@/components/Image/index.vue'
export default defineComponent({
  name: 'living-room-shelf-index',
  // setup() {
    
  // },
  render () {
    return <div>
      <Image imgList={imgList} />
    </div>
  }
})
</script>
