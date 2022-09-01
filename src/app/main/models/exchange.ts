export interface Exchange{
  effectiveDate: string,
  no: string,
  table: string,
  rates : Rate[]
}


export interface Rate{
  code: string,
  currency: string,
  mid: number
}
