import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'enumKeyValuelist'
})

export class EnumKeyValueListPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        const items: any[] = [];
        // tslint:disable-next-line:forin
        for (const key in value) {
            // tslint:disable-next-line:no-debugger
            const isValueProperty = parseInt(key, 10) >= 0;
            if (!isValueProperty) { continue; }
            items.push({key: key, value: value[key]});
        }
        return items;
    }
}
