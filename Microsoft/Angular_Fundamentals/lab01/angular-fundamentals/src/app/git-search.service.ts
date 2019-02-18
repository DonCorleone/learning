import { Injectable } from '@angular/core';
import { GitSearch } from './git-search';
@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  cachedValues: Array<{
    [query: string]: GitSearch
  }> = [];
  constructor() { }
}
