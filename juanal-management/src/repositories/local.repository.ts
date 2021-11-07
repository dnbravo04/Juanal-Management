import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Local, LocalRelations, Propietario} from '../models';
import {PropietarioRepository} from './propietario.repository';

export class LocalRepository extends DefaultCrudRepository<
  Local,
  typeof Local.prototype.id,
  LocalRelations
> {

  public readonly propietario: BelongsToAccessor<Propietario, typeof Local.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('PropietarioRepository') protected propietarioRepositoryGetter: Getter<PropietarioRepository>,
  ) {
    super(Local, dataSource);
    this.propietario = this.createBelongsToAccessorFor('propietario', propietarioRepositoryGetter,);
    this.registerInclusionResolver('propietario', this.propietario.inclusionResolver);
  }
}
