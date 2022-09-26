<script lang="tsx">
import { defineComponent } from 'vue'
import { ElCarousel, ElCarouselItem } from 'element-plus'
import { imgList } from './util'
import './index.scss'
export default defineComponent({
  name: 'home-index',
  components: {
  },
  // setup() {
      
  // },
  data () {
    return {
      imgList,
      urls: ['/small-chair-and-end-table', '/flower-shelf', '/livingRoom-shelf']
    }
  },
  methods: {
    imgClick (index: number) {
      let src = this.urls[index]
      src && this.$router.push(src)
    }
  },
  render () {
    return <div class="home-wrap">
      <ElCarousel height={'400px'} >
        {
          imgList.map((item, index) => {
            return <ElCarouselItem key={index}>
              <img onClick={this.imgClick.bind(this, index)} class="ElCarouselItem-img" src={item} alt=""></img>
            </ElCarouselItem>
          })
        }
      </ElCarousel>
    </div>
  }
})
</script>
