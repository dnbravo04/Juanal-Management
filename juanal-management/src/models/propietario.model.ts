import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {Factura} from './factura.model';
import {Mascota} from './mascota.model';
import {Local} from './local.model';

@model()
export class Propietario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  cedula: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono1: string;

  @property({
    type: 'string',
  })
  telefono2?: string;

  @property({
    type: 'string',
  })
  correo?: string;

  @property({
    type: 'string',
    required: true,
  })
  torre: string;

  @property({
    type: 'string',
    required: true,
  })
  apartamento: string;

  @property({
    type: 'string',
    required: true,
  })
  vehiculo: string;

  @hasMany(() => Factura)
  facturas: Factura[];

  @hasMany(() => Mascota)
  mascotas: Mascota[];

  @hasOne(() => Local)
  local: Local;

  constructor(data?: Partial<Propietario>) {
    super(data);
  }
}

export interface PropietarioRelations {
  // describe navigational properties here
}

export type PropietarioWithRelations = Propietario & PropietarioRelations;
