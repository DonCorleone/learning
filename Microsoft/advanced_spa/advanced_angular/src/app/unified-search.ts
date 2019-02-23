import {GitSearch2} from './git-search';
import {GitCodeSearch} from './git-code-search';

export interface UnifiedSearch {
    repositories : GitSearch2,
    code : GitCodeSearch
}
