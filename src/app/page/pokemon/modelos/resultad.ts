type url = {
  name: string;
  url: string;
}
export interface Resultad {
  count: number;
  next?: string;
  previus?: string
  results: Array<url>;
}
