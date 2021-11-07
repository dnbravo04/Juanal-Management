import {Entity, model, property} from '@loopback/repository';

@model()
export class Local extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  productos: string;


  constructor(data?: Partial<Local>) {
    super(data);
  }
}

export interface LocalRelations {
  // describe navigational properties here
}

export type LocalWithRelations = Local & LocalRelations;
