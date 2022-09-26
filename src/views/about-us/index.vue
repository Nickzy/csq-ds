<script lang="tsx">
import { defineComponent } from 'vue'
import { imgList } from './imgs'
import contentCard from './components/contentCard/index.vue'
export default defineComponent({
  name: 'about-us',
  components: {
    contentCard
  },
  data () {
    return {
      imgList
    }
  },
  render () {
    return <div class="about-wrap">
      {
        this.imgList.map((item, i) => {
          return <contentCard contentData={item} i={i} />
        })
      }
    </div>
  }
  // setup() {
    
  // },
})
</script>
