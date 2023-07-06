export function getSearchParams() {
  const url: URL = new URL(window.location.href)
  const params: URLSearchParams = url.searchParams

  return Array.from(params.entries()).reduce((acc: any, [key, value]) => {
    acc[key] = JSON.parse(value)
    return acc
  }, {})
}

export function cleanUpObject(params: any) {
  return Object.keys(params).reduce((acc: any, key) => {
    if (params[key]) {
      acc[key] = params[key]
    }
    return acc
  }, {})
}

export function isEqual(a: any, b: any) {
  console.log(a, b)

  for (const key in a) {
    if (a[key] !== b[key]) {
      return false
    }
  }

  return true
}
