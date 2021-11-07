import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<Propietario>) {
    super(data);
  }
}

export interface PropietarioRelations {
  // describe navigational properties here
}

export type PropietarioWithRelations = Propietario & PropietarioRelations;
