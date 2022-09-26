<script lang="tsx">
import { defineComponent } from 'vue'
import Contact from '@/components/Contact/index.vue'

export default defineComponent({
  name: 'contact-index',
  components: { 
    Contact
  },
  // setup() {
    
  // },
  render () {
    return <div>
      <Contact />
    </div>
  }
})
</script>
