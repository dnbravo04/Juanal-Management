import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Propietario, PropietarioRelations, Factura, Mascota, Local} from '../models';
import {FacturaRepository} from './factura.repository';
import {MascotaRepository} from './mascota.repository';
import {LocalRepository} from './local.repository';

export class PropietarioRepository extends DefaultCrudRepository<
  Propietario,
  typeof Propietario.prototype.id,
  PropietarioRelations
> {

  public readonly facturas: HasManyRepositoryFactory<Factura, typeof Propietario.prototype.id>;

  public readonly mascotas: HasManyRepositoryFactory<Mascota, typeof Propietario.prototype.id>;

  public readonly local: HasOneRepositoryFactory<Local, typeof Propietario.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('FacturaRepository') protected facturaRepositoryGetter: Getter<FacturaRepository>, @repository.getter('MascotaRepository') protected mascotaRepositoryGetter: Getter<MascotaRepository>, @repository.getter('LocalRepository') protected localRepositoryGetter: Getter<LocalRepository>,
  ) {
    super(Propietario, dataSource);
    this.local = this.createHasOneRepositoryFactoryFor('local', localRepositoryGetter);
    this.registerInclusionResolver('local', this.local.inclusionResolver);
    this.mascotas = this.createHasManyRepositoryFactoryFor('mascotas', mascotaRepositoryGetter,);
    this.registerInclusionResolver('mascotas', this.mascotas.inclusionResolver);
    this.facturas = this.createHasManyRepositoryFactoryFor('facturas', facturaRepositoryGetter,);
    this.registerInclusionResolver('facturas', this.facturas.inclusionResolver);
  }
}
