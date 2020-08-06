class ErrorService {
  message: string
  constructor(e: Error) {
    // eslint-disable-next-line
    this.message = (e && e.message) || 'Ooooops! Something went wrong'
  }
}

export default ErrorService
