import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' ,trueName:"Guy"},
      { id: 12, name: 'Narco' ,trueName:"trafiquant"},
      { id: 13, name: 'Bombasto', trueName:"Pamelo"},
      { id: 14, name: 'Celeritas' ,trueName:"M.Vegetarien"},
      { id: 15, name: 'Magneta' ,trueName:"Erica Lensherr"},
      { id: 16, name: 'RubberMan' ,trueName:"C.Ondom"},
      { id: 17, name: 'Dynama', trueName:"Lalala"}
    ];
    return {heroes};
  }
}
