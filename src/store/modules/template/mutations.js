import {
  mutationTypes
} from './types'

export default {
  [mutationTypes.SET_TEMPLATE] (state, payload = {}) {
    state.template = { ...payload }
  }
}
