import Button from './components/button'
import Column from './components/column'
import Form from './components/form'
import Icon, { config } from './components/icon'

export default {
  use: {
    install (Vue) {
      Vue.component('Icon', Icon)
      Vue.component('Button', Button.Button)
      Vue.component('Buttons', Button.Buttons)
      Vue.component('Column', Column.Column)
      Vue.component('Columns', Column.Columns)

      Vue.component('Field', Form.Field)
      Vue.component('Input', Form.Input)
      Vue.component('Radio', Form.Radio)
      Vue.component('Label', Form.Label)
      Vue.component('Helper', Form.Helper)
      Vue.component('Control', Form.Control)
      Vue.component('Checkbox', Form.Checkbox)
      Vue.component('FieldBody', Form.FieldBody)
      Vue.component('FieldLabel', Form.FieldLabel)
    }
  },

  set registerIcon (func) {
    config.register = func
  }
}
