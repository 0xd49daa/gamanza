import { Key } from "react"

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
  const keys = new Set([...Object.keys(a), ...Object.keys(b)])

  for (const key of keys) {
    if (a[key] !== b[key]) {
      return false
    }
  }

  return true
}

export type NavigateOptions = {
  page?: string
  pageSize?: string
  genre?: string
  type?: string
  year?: string
}

export function buildListUrl(options: NavigateOptions) {
  const segmentKeys = ["page", "pageSize", "genre", "type", "year"] as (keyof NavigateOptions)[]
  const segments = segmentKeys
    .map((key) => {
      if (options[key]) {
        return `${key}/${options[key]}`
      }
    })
    .filter((segment) => segment)

  return "/" + segments.join("/")
}
