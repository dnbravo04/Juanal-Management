import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Local, LocalRelations} from '../models';

export class LocalRepository extends DefaultCrudRepository<
  Local,
  typeof Local.prototype.id,
  LocalRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Local, dataSource);
  }
}
