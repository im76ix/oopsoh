type OopsohIco = 'success' | 'error' | 'loading' | 'none'

export interface OopsohOptions {
  ico?: OopsohIco
  duration?: number
  mask?: boolean
  image?: string
  success?: () => void
  fail?: () => void
}

export class Oops {
  static oh(msg: string, options?: OopsohOptions, func?: () => void): void {
    uni.showToast({
      title: msg,
      icon: options?.ico || 'none',
      duration: options?.duration || 1500,
      mask: options?.mask || false,
      image: options?.image || '',
      success: options?.success,
      fail: options?.fail,
      complete: () => {
        setTimeout(() => func && func(), options?.duration || 1500)
      },
    })
  }
}

export default Oops
