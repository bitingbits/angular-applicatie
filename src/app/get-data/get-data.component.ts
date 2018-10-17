import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';


@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css'],
  providers: [ GetDataService ]
})
export class GetDataComponent implements OnInit {
  resultLimit = 5;
  resultArray = [];
  searchTerm = 'hello';
  url = 'https://api.datamuse.com/words?ml=';

  constructor(private dataService: GetDataService){
        this.dataService.callApi(this.searchTerm, this.url).subscribe(response => {
              for (var i = 0; i < this.resultLimit; i++) {
                  this.resultArray.push(response[i]['word']);
              }
        })
    }

  ngOnInit() {
  }

}
