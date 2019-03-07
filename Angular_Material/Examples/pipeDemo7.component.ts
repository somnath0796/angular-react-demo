import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'preview'
})
export class PreviewPipe implements PipeTransform{
    transform(value: string, length: number) : string {
        if(value && !isNaN(length)){
            let previewResult = value.substr(0, length);
            previewResult += "...";
            return previewResult;
        }
    }
}