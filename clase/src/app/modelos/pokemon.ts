type   tipopokemon = 'Agua' | 'Fuego' | 'Roca' | 'Veneno';
type  naturaleza = 'Timido' | 'Serio' | 'Agresivo';
export interface Pokemon {
  npd: number;
  nombre: string;
  foto: string;
  tipo: tipopokemon;
  naturalezapo: naturaleza;
  ataquebase: number;

}
