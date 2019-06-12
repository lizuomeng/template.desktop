import {
  getterTypes
} from './types'

export default {
  [getterTypes.GET_TEMPLATE] (state) {
    return state.template
  }
}
