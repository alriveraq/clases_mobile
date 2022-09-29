type sprite ={
  front_default: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;

}
type statis={
  name: string;
}

type baseStat ={
  base_stat: number;
  stat: statis;

}



export interface Pokemon {
  id: number;
  name: string;
  order: number;
  sprites:sprite;
  stats: Array<baseStat>;


}
