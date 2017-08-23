export class UrlHelper {

    public static getQueryValue(key): string {
        var matches = window.location.search.match(new RegExp(key + '=([^&]*)'));
        var value = matches ? matches[1] : null;
        if (value == null) return null;
        return decodeURIComponent(decodeURI(value)).replace(/\+/g, ' ')
    }

    public static getQueryId():number{
        var url = window.location.href;
        if(url.indexOf("?")>0)
            return -1;
        var urlParts = url.split("/");
        if(urlParts.length ==0)
            return  -1;
        var lastPart = urlParts[urlParts.length-1];
        return Number(lastPart);
    }

    private static isElementInArray(el:string,array:string[]){
       let result = false;
       el = el.toLowerCase();
       array.forEach(a=>{
           if(a.toLowerCase()==el){
               result = true;
           }
       })
       return result;
    }

    public static combineUrlParam(param:any,except:any):string{
        var result = '';
        for (var property in param) {
            if (param.hasOwnProperty(property)) {
                if(!param[property])
                    continue;
                if(except && this.isElementInArray(property,except))
                    continue;
                result += ('&'+property + '=' + param[property]);
            }
        }
        if(result[0]=='&')
            result = result.slice(1);
        return result;
    }
    
}