import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Propietario,
  Local,
} from '../models';
import {PropietarioRepository} from '../repositories';

export class PropietarioLocalController {
  constructor(
    @repository(PropietarioRepository) protected propietarioRepository: PropietarioRepository,
  ) { }

  @get('/propietarios/{id}/local', {
    responses: {
      '200': {
        description: 'Propietario has one Local',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Local),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Local>,
  ): Promise<Local> {
    return this.propietarioRepository.local(id).get(filter);
  }

  @post('/propietarios/{id}/local', {
    responses: {
      '200': {
        description: 'Propietario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Local)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Propietario.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Local, {
            title: 'NewLocalInPropietario',
            exclude: ['id'],
            optional: ['propietarioId']
          }),
        },
      },
    }) local: Omit<Local, 'id'>,
  ): Promise<Local> {
    return this.propietarioRepository.local(id).create(local);
  }

  @patch('/propietarios/{id}/local', {
    responses: {
      '200': {
        description: 'Propietario.Local PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Local, {partial: true}),
        },
      },
    })
    local: Partial<Local>,
    @param.query.object('where', getWhereSchemaFor(Local)) where?: Where<Local>,
  ): Promise<Count> {
    return this.propietarioRepository.local(id).patch(local, where);
  }

  @del('/propietarios/{id}/local', {
    responses: {
      '200': {
        description: 'Propietario.Local DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Local)) where?: Where<Local>,
  ): Promise<Count> {
    return this.propietarioRepository.local(id).delete(where);
  }
}
