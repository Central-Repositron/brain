import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TablItem {
  id: number;
  name: string;
  pass: string;
  isLoggedIn: boolean;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TablItem[] = //[];
[ {id: 1, name: 'USER_1', pass: 'abc@12345', isLoggedIn: false},
  {id: 2, name: 'USER_2', pass: 'abc123', isLoggedIn: false},
  {id: 3, name: 'USER_3', pass: 'india45', isLoggedIn: false},
  {id: 4, name: 'USER_4', pass: 'abc@123', isLoggedIn: false},
  {id: 5, name: 'USER_5', pass: 'abc@123', isLoggedIn: false},
  {id: 6, name: 'USER_6', pass: 'abc@145', isLoggedIn: false},
  {id: 7, name: 'USER_7', pass: 'ab2345', isLoggedIn: false},
  {id: 8, name: 'USER_8', pass: 'ab45', isLoggedIn: false},
  {id: 9, name: 'USER_9', pass: 'ab12345', isLoggedIn: false},
  {id: 10, name: 'USER_10', pass: 'ab345', isLoggedIn: false},
  {id: 11, name: 'USER_11', pass: 'abc5', isLoggedIn: false}
];

/**
 * Data source for the Tabl view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TablDataSource extends DataSource<TablItem> {
  data: TablItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TablItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TablItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TablItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'pass': return compare(a.pass, b.pass, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
