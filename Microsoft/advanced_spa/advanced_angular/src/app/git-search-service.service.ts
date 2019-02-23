import { Injectable, Inject } from '@angular/core';
import { GitSearch2 } from './git-search';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GitSearchService {
  cachedValues: Array<{
      [query: string]: GitSearch2
  }> = [];
  constructor(@Inject(Http) private http: Http) {
  }

  gitSearch : Function = (query: string) : Promise<{}> => {
    let promise = new Promise((resolve, reject) => {
        if (this.cachedValues[query]) {
            resolve(this.cachedValues[query])
        }
        else {
            this.http.get('https://api.github.com/search/repositories?q=' + query)
            .toPromise()
            .then( (response) => {
                resolve(response.json())
            })
        }
    })
    return promise;
  }
}