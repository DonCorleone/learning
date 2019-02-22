import { Component, OnInit } from '@angular/core';
import { UnifiedSearchService } from '../unified-search.service';
import { GitCodeSearch } from '../git-code-search';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AdvancedSearchModel } from '../advanced-search-model';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitCodeSearch;
  searchQuery: string;
  displayQuery: string;
  title: string;
  constructor(
    private UnifiedSearchService: UnifiedSearchService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  model = new AdvancedSearchModel('', '', '', null, null, '');
  modelKeys = Object.keys(this.model);


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      this.gitSearch();
    })
    this.route.data.subscribe((result) => {
      this.title = result.title
    });
  }

  gitSearch = () => {
    this.UnifiedSearchService.unifiedSearch(this.searchQuery).subscribe( (response) => {
      console.log(response);
      this.searchResults = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }
  
  
  sendQuery = () => {
    this.searchResults = null;
    let search: string = this.model.q;
    let params: string = "";
    this.modelKeys.forEach((elem) => {
      if (elem === 'q') {
        return false;
      }
      if (this.model[elem]) {
        params += '+' + elem + ':' + this.model[elem];
      }
    })
    this.searchQuery = search;
    if (params !== '') {
      this.searchQuery = search + '+' + params;
    }
    this.displayQuery = this.searchQuery;
    this.gitSearch();
  }
}
