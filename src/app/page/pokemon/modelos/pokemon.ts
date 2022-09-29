type statati = {
  name: string;
}
type sprite = {
  front_default: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}
type stats = {
  base_stat: number;
  stat: statati;
}
export interface Pokemon {
  id: number;
  order: number;
  sprite: sprite;
  base_stat: Array<stats>;
}
