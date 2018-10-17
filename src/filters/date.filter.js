import * as moment from 'moment';
export function dateFilter(value, formatter) {
    if(!value) return '';
    if(!formatter) formatter = 'YYYY-MM-DD HH:mm:ss';
    return moment(value).format(formatter);
}