class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string){
    let noneUse = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    return string.split(' ').map(x=> {
      return (noneUse.includes(x) === false || string.split(' ').indexOf(x) === 0 ) ? Formatter.capitalize(x) : x
    }).join(' ')
  }
}