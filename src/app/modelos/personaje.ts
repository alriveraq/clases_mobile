type tipocazador = 'Arqueologo' | 'Bestias' | 'Hacker' | 'Terrorista' | 'Tesoros';
type tipopersonaje = 'Principal' | 'Secundario';
type sexo = 'Masculino' | 'Femenino,'
type tipoaura = 'Intensificacion' | 'Transformacion' | 'Materializacion' | 'Emision' | 'Manipulacion' | 'Especializacion' ;
export interface Personaje{
  id: number;
  nombre: string;
  imagen: string;
  sexo: sexo;
  edad: number;
  ocupacion: tipocazador;
  personaje: tipopersonaje;
  aura: tipoaura;
}
