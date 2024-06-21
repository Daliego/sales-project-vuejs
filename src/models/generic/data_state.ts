export type DataState<T> =
  | { state: 'loading'; data: null; error: null }
  | { state: 'success'; data: T; error: null }
  | { state: 'error'; data: null; error: string }

export type DataStateUninitialized<T> =
  | { state: 'uninitialized'; data: null; error: null }
  | { state: 'loading'; data: null; error: null }
  | { state: 'success'; data: T; error: null }
  | { state: 'error'; data: null; error: string }
