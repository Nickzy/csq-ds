<script lang="tsx">
import { defineComponent } from 'vue'
import Menu from '../Menu/index.vue'
import './index.scss'
export default defineComponent({
  name: 'header-index',
  components: {
    Menu
  },
  // setup() {
  // },
  methods: {
    logoDom () {
      return <div class="logo">
        OTTAHOME
      </div>
    },
  },
  render () {
    return <div class="header-wrap">
      {this.logoDom()}
      <Menu />
    </div>
  }
})
</script>
