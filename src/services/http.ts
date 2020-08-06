import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'

class HTTPService {
  constructor() {
    axios.defaults.headers.common.Accept = 'application/json'
  }

  init = (baseURL: string) => {
    axios.defaults.baseURL = baseURL
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    return axios
      .get(url, config)
      .then(res => this.handleSuccess<T>(res))
      .catch(this.handleError)
  }

  // eslint-disable-next-line
  handleSuccess<T>(response: AxiosResponse<T>): T {
    return response.data
  }

  handleError = (error: AxiosError) => {
    if (error.response) {
      throw error.response.data
    } else if (error.request) {
      throw error.request.data
    }

    return Promise.reject(error)
  }
}

export default new HTTPService()
