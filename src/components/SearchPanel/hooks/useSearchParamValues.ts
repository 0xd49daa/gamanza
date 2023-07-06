import { useSearchParams } from "react-router-dom"

export type ParamDefinition = {
  key: string
  defaultValue: any
}

function getValue(key: string, searchParams: URLSearchParams) {
  if (!searchParams.has(key)) return null
  return JSON.parse(searchParams.get(key) || "")
}

function getValues(
  definitions: ParamDefinition[],
  searchParams: URLSearchParams
) {
  return definitions.reduce((values, { key, defaultValue }) => {
    return { ...values, [key]: getValue(key, searchParams) ?? defaultValue }
  }, {})
}

export default function useSearchParamsValues(definitions: ParamDefinition[]) {
  const [searchParams, setSearchParams] = useSearchParams()

  const values = getValues(definitions, searchParams) as any

  const setValues = (newValues: Record<string, any>) => {
    const currentParams = getValues(definitions, searchParams)
    const newParams = { ...currentParams, ...newValues } as {
      [key: string]: any
    }

    const params = Object.keys(newParams).reduce((params: any, key: string) => {
      params[key] = JSON.stringify(newParams[key])
      return params
    }, {})

    setSearchParams(params)
  }

  return [values, setValues] as const
}
