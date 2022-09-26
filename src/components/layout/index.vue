<script lang="tsx">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import Header from '../Header/index.vue'
import Footer from '../Footer/index.vue'
import './index.scss'

export default defineComponent({
  name: 'layout-wrap',
  components: {
    Header,
    Footer
  },
  // setup () {
  // },
  computed: {
    key () {
      return this.$route.path
    }
  },
  render () {
    return <div class="layout">
      <Header />
      <div class="page-container">
        <RouterView key={this.key} />
      </div>
      <Footer />
    </div>
  }
})
</script>
