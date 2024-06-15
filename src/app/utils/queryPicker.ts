export const queryPicker = <q extends Record<string, unknown>, F extends keyof q>
  (query: q, selectedQuery: F[]) => {

  const result: Partial<q> = {}
  for (const key of selectedQuery) {
    if (query && Object.hasOwnProperty.call(query, key)) {
      result[key] = query[key]
    }
  }

  return result
};
