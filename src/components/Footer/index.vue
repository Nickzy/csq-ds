<script lang="tsx">
import { defineComponent } from 'vue'
import { ElDivider } from 'element-plus'
import { footerList } from './util'
import './index.scss'
export default defineComponent({
  name: 'footer-index',
  components: {
    ElDivider
  },
  data () {
    return {
      footerList
    }
  },
  // setup() {
    
  // },
  methods: {
    createChild (child: any, index: string) {
      let { type, text } = child
      function getdom () {
        switch (type) {
          case 'icon': 
            return <i class={`iconfont ${text}`}></i>;
          case 'email':
            return <a href="mailto:lisa@ottahome.com">{text}</a>;
          default:
            return <span>{text}</span>;
        }
      }
      return <div class="footer-child-module" key={index}>
        {getdom()}
      </div>
    },
    createFooterCard (data: any, index: number) {
      let { title, child = [], flex } = data;
      return <div key={index}>
          <h3>{title}</h3>
          <ElDivider />
          <div class={`footer-child-wrap ${flex ? 'flex' : ''}`}>
            {
              child.map((child: any, i: number) => {
                return this.createChild(child, `${index}-${i}`)
              })
            }
          </div>
        </div>
    }
  },
  render () {
    return <div class="footer-wrap">
      <div class="footer-content">
        {
          this.footerList.map((item: any, index: number) => {
            return this.createFooterCard(item, index)
          })
        }
      </div>
    </div>
  }
})
</script>
