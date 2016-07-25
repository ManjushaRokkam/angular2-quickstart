/*tslint:disable:no-invalid-this */
export function OnChange(defaultValue?:any):any {
  const sufix = 'Change';
  return function OnChangeHandler(target:any, propertyKey:string):void {
    let _value = defaultValue;
    Object.defineProperty(target, propertyKey, {
      'get': function ():any { return _value; },
      'set': function (value:any):void {
        _value = value;
        this[propertyKey + sufix].emit(value);
      }
    });
  };
}
/* tslint:enable */
