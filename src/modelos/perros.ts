type   raza = 'Golden' | 'Pastor Aleman' | 'Bulldog' | 'Husky' | 'Mestizo';
type  color = 'Blanco' | 'Negro' | 'Cafe' | 'Otro';
export interface Perros {
  nombre: string;
  foto: string;
  raza: raza;
  color: color;
  edad: number;


}
