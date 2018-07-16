import { Injectable } from '@angular/core';
import { IModelMetadata } from '../shared/models';

@Injectable()
export class ModelMetadataService {

  getMeta(): Array<IModelMetadata> {
    return [
      { key: 'userEmail', required: true, email: true },
      { key: 'password', required: true },
    ];
  }

  getLoginMeta(): Array<IModelMetadata> {
    return [
      { key: 'userEmail', required: true, email: true },
      { key: 'password', required: true },
    ];
  }

  getEntityMeta(): Array<IModelMetadata> {
    return [
      { key: 'id' },
      { key: 'firstName', required: true },
      { key: 'middleName' },
      { key: 'lastName' },
      { key: 'phoneNo' },
      { key: 'email', email: true },
      { key: 'houseNo' },
    ];
  }

  getCollectionMeta(): Array<IModelMetadata> {
    return [
      { key: 'id' },
      { key: 'amount', required: true },
      { key: 'date', required: true },
      { key: 'entityId', required: true },
    ];
  }

  getExpenseMeta(): Array<IModelMetadata> {
    return [
      { key: 'id' },
      { key: 'amount', required: true },
      { key: 'date', required: true },
      { key: 'description', required: true },
      { key: 'entityId', required: true },
    ];
  }


}



