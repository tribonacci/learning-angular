import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }

  getAuthors() {
    return ['name1' , 'name2' , 'name3'];
  }

}
