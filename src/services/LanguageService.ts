class LanguageService {
  static getCurrent = (url: string) => {
    try {
      const list = url.split("/")
      return list[1]

    } catch (e) {
      console.log(e)
    }
  }

  static change = (url: string, selectedLanguage: string) => {
    const current = LanguageService.getCurrent(url)
    return url.replace(`/${current}/`, `/${selectedLanguage}/`)
  }

  static getHomePath = (url: string) => {
    try {
      const list = url.split("/")
      return [list[0], list[1]].join("/")

    } catch (e) {
      console.log(e)
    }
  }
}

export default LanguageService