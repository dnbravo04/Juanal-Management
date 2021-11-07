import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Local,
  Propietario,
} from '../models';
import {LocalRepository} from '../repositories';

export class LocalPropietarioController {
  constructor(
    @repository(LocalRepository)
    public localRepository: LocalRepository,
  ) { }

  @get('/locals/{id}/propietario', {
    responses: {
      '200': {
        description: 'Propietario belonging to Local',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Propietario)},
          },
        },
      },
    },
  })
  async getPropietario(
    @param.path.string('id') id: typeof Local.prototype.id,
  ): Promise<Propietario> {
    return this.localRepository.propietario(id);
  }
}
