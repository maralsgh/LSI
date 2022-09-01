import {Component} from '@angular/core';
import {ExchangeService} from "../../services/exchange.service";
import {Rate} from "../../models/exchange";
import {Table} from "primeng/table";
import {DatePipe} from "@angular/common";
import {MessageService} from "primeng/api";
import {FADE_ANIMATION} from "../../utilities/animation";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [FADE_ANIMATION]
})
export class TableComponent {
  rates: Rate[] = [];
  loading: boolean = true;
  dateValue: Date | undefined;
  preview: boolean = true;
  show: boolean = false;
  constructor(private exchangeService: ExchangeService,
              private messageService: MessageService,
              private datePipe: DatePipe) { }


  private getListOfExchanges(filter? : string){
    this.loading = true;
    this.exchangeService.getListByFilter(filter).then(data => {
      this.rates = data[0].rates;
      this.loading = false
    }).catch(error => {
      this.messageService.add({severity:'error', summary: 'Error', detail: error?.statusText});
        this.loading = false
      }
    ).finally(()=> this.loading = false)
  }

  clear(table: Table) {
    table.clear();
    if(this.dateValue){
      this.dateValue = undefined;
      this.getListOfExchanges();
    }
  }

   private static dateIsValid(dateStr: string) {
        const regex = /^\d{4}-\d{2}-\d{2}$/;

        if (dateStr.match(regex) === null) {
          return false;
        }

        const date = new Date(dateStr);

        const timestamp = date.getTime();

        if (Number.isNaN(timestamp)) {
          return false;
        }

        return date.toISOString().startsWith(dateStr);
  }


  globalFilter(event: Date) {
    if(event){
      this.dateValue = event;
      const date = this.datePipe.transform(event, 'yyyy-MM-dd');
       if(TableComponent.dateIsValid(date!)){
         this.getListOfExchanges(date!)
       }
    }
  }

  onInput($event: { target: HTMLInputElement }) {
    if(!$event?.target?.value){
      this.dateValue = undefined;
      this.getListOfExchanges();
    }
  }

    start() {
      this.preview = false;
      this.getListOfExchanges();
      setTimeout(()=> {
        this.show = true;
      }, 1000)
    }
}
