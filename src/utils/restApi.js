import processResponse from './processResponse'

export default class RestApi {
  constructor ({ singular, plurality, baseUrl }) {
    this.baseUrl = baseUrl
    this.singular = singular
    this.plurality = plurality
  }
}
