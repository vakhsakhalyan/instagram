import { Pipe, PipeTransform } from '@angular/core'
import * as moment from 'moment'

@Pipe({
  name: 'formatDate'
})
export class DatesPipe implements PipeTransform {
  constructor() {
    moment.updateLocale('en', {
      relativeTime : {
        future: "in %s",
        past:   "%s ago",
        s:  "s",
        m:  "a min",
        mm: "%d min",
        h:  "an hour",
        hh: "%d h",
        d:  "a day",
        dd: "%d d",
        M:  "a mon",
        MM: "%d mon",
        y:  "a year",
        yy: "%d y"
      }
    });
  }
  transform(date: any, args?: any): any {
    let d = new Date(date*1000);
    return moment(d, "YYYYMMDD").fromNow(true);
  }

}
