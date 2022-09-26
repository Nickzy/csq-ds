<script lang="tsx">
import { defineComponent } from 'vue'
import { ElMenu, ElMenuItem, ElSubMenu, } from 'element-plus'
import { pathData, menuDataTS, menuDataList } from './index'
import './index.scss'

export default defineComponent({
  name: 'home-index',
  // setup() {
      
  // },
  data (): menuDataTS {
    return {
      menuList: menuDataList,
      activeMenu: {
        menuId: ''
      }
    }
  },
  watch: {
    '$route.path': function (value) {
      let { path } = this.activeMenu
      if (path !== value) {
        console.log('pathchange')
        this.activeMenu = {
          ...this.activeMenu,
          ...this.findpathData(this.menuList)
        }
      }
    }
  },
  mounted () {
    // console.log(this.$route, menuDataList)
    let pathData = this.findpathData(menuDataList) || {}
    // console.log(pathData)
    this.activeMenu = {
      ...this.activeMenu,
      ...pathData
    }
  },
  methods: {
    findpathData (array: any, menuId?: string): any {
      let i = 0, len = array.length, { path } = this.$route, pathData = null
      while (i < len && !pathData) {
        if (array[i].path !== path) {
          if (array[i].children) {
            let id = `${menuId ? `${menuId}-` : ''}${i}`
            pathData = this.findpathData(array[i].children, id)
          }
          i++
        } else {
          let id = `${menuId ? `${menuId}-` : ''}${i}`
          console.log(id)
          pathData = {
            ...array[i],
            menuId: id
          }
        }
      }
      return pathData
    },
    menuItemClick (pathData: pathData, menuId: string) {
      this.activeMenu = {
        ...{},
          ...pathData,
          menuId
      }
      this.$router.push(pathData.path)
    },
    getMenuDom (data: pathData, menuId: string) {
      let subMenuProps = {
        index: menuId,
        disabled: false,
        uniqueOpened: true
      }
      return <ElSubMenu v-slots={{ title: () => data.name }} {...subMenuProps}>
        {
          data.children && data.children.map((child: pathData, index: number) => {
            let indexkey = `${menuId}-${index}`
            let props = {
              index: indexkey,
              onClick: () => this.menuItemClick(child, indexkey),
            }
            let haveChild = !!(child.children && child.children.length)
            if (haveChild) {
              return this.getMenuDom(child, indexkey)
            }
            return <ElMenuItem {...props}>{child.name}</ElMenuItem>
          })
        }
      </ElSubMenu>
    },
    nav () {
      let { menuList , activeMenu} = this
      let menuProps = {
        defaultActive: activeMenu.menuId || '0',
        class: 'el-menu-home-wrap',
        ellipsis: false
        // activeTextColor: '#ffd04b',
        // textColor: '#fff'
      }
      return <ElMenu mode="horizontal" {...menuProps}>
        {
          menuList.map((item: pathData, index: number) => {
            let indexkey = `${index}`
            let props = {
              index: indexkey,
              onClick: () => this.menuItemClick(item, indexkey),
            }
            let haveChild = !!(item.children && item.children.length)
            if (haveChild) {
              return this.getMenuDom(item, indexkey)
            }
            return <ElMenuItem {...props} >
              {item.name}
            </ElMenuItem>
          })
        }
      </ElMenu>
    }
  },
  render () {
    return this.nav()
  }
})
</script>
