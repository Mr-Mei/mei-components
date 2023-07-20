// Element 组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 使用本地组件
import CstUI from '../../webui/index.js'

export default async ({ Vue }) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI)
    Vue.use(CstUI)
  }
}
