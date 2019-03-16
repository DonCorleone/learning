import { UnifiedSearch } from './unified-search'
import { Injectable } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { GitSearch2 } from './git-search';
import { GitCodeSearchService } from './git-code-search.service';
import { GitCodeSearch} from './git-code-search';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { concat } from 'rxjs/observable/concat';
import { combineLatest } from 'rxjs/observable/combineLatest';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UnifiedSearchService {

  constructor(private searchService: GitSearchService, private codeSearchService: GitCodeSearchService) { }

  unifiedSearch: Function = (query: string): Observable<UnifiedSearch> => {
    return forkJoin(this.codeSearchService.codeSearch(query), this.searchService.gitSearch(query))
    .map( (response : [GitSearch2, GitCodeSearch]) => {
        return {
          'repositories': response[0],
          'code': response[1]
        }
      })
  }
}

