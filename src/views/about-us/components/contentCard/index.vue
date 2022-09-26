<script lang="tsx">
import { defineComponent } from 'vue'
import { ElImage } from 'element-plus'
import './index.scss'
export default defineComponent({
  name: 'about-us-content-card',
  // setup() {
    
  // },
  props: {
    contentData: {
      type: Object,
      default: () => {
        return null
      }
    },
    i: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  render () {
    let { contentData } = this;
    if (!contentData || !Object.keys(contentData).length) {
      return null
    }
    return <div key={this.i} class={`about-us-content-card ${ contentData.imgleft ? 'img-left-layout' : ''}`}>
      <div class="text">
        { contentData.title && <h3>{ contentData.title }</h3> }
        {contentData.text}
      </div>
      <div class="img">
        {
          !Array.isArray(contentData.src) ? <ElImage previewSrcList={[contentData.src]} src={contentData.src} /> : 
          <div class="img-list-wrap">
            {
              contentData.src.map((src, index) => {
                return <ElImage previewSrcList={[src]} src={src} key={index}/>
              })
            }
          </div>
        }
        
      </div>
    </div>
  }
})
</script>
