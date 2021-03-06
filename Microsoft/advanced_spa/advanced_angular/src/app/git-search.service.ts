import { Injectable, Inject } from '@angular/core';
import { GitSearch2 } from './git-search';
import { GitUsers } from './git-users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import { GitSearchComponent } from './git-search/git-search.component';

@Injectable()
export class GitSearchService {
    cachedValue: string;
    search: Observable<GitSearch2>;
    cachedUsers: Array<{
        [query: string]: GitUsers
    }> = [];

    constructor(private http: HttpClient) {
    }

     

    gitSearch : Function = (query: string) : Observable<GitSearch2> => {
        if (!this.search) {
            this.search = this.http.get<GitSearch2>('https://api.github.com/search/repositories?q=' + query)
            .publishReplay(1)
            .refCount();
            this.cachedValue = query;
        }
        else if (this.cachedValue !== query) {
            this.search = null;
            this.gitSearch(query);
        }
        return this.search;
      }
    
    gitUsers = (query: string) : Promise<GitUsers> => {
        let promise = new Promise<GitUsers>((resolve, reject) => {
            if (this.cachedUsers[query]) {
                resolve(this.cachedUsers[query])
            }
            else {
                this.http.get('https://api.github.com/search/users?q=' + query)
                .toPromise()
                .then( (response) => {
                    resolve(response as GitUsers)
                }, (error) => {
                    reject(error);
                })
            }
        })

        return promise;
    }
}