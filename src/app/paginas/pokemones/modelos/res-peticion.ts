type InfoUrl ={
  name: string;
  url: string;
}
export interface ResPeticion {
  count: number;
  next?: string;
  previous?: string;
  results: Array<InfoUrl>;
}
