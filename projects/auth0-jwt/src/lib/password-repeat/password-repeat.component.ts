import { Component, forwardRef, OnInit } from "@angular/core";
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from "@angular/forms";
import { repeatPassword } from "../custom-validation/repeatPassword";

@Component ({
    selector:'app-password',
    templateUrl:'./password-repeat.component.html',
    providers:[
        {
            provide:NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => passwordRepeatComponent),
            multi:true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => passwordRepeatComponent),
            multi: true,
          }
    ]
})
export class passwordRepeatComponent implements Validator, ControlValueAccessor, OnInit
{
    hide = true;
    public _changeCb: any;
   touchCallback: any;
    password:FormGroup;
    constructor(_formBuilder: FormBuilder) {
        this.password=_formBuilder.group({
            password: ['',[Validators.required, Validators.minLength(5)]],
            repeat:  ['',[Validators.required, Validators.minLength(5)]]  
          }, {
            validators: [repeatPassword]
          });
       
    }
    validate(control: AbstractControl): ValidationErrors | null {
        return this.password.valid ? null : { invalidForm: { valid: false, message: "rangeDates fields are invalid" } };
    }
    ngOnInit(): void {
        this.password.valueChanges.subscribe((data) => {
            if (this._changeCb) {
              this._changeCb(data);
            }
          });
    }
    writeValue(obj: { StartDate: string, FinishDate: string }): void {
        this.password.setValue(obj || { StartDate: '', FinishDate: '' });
      }
    
      registerOnChange(fn: any): void {
        if (fn)
          this._changeCb = fn;
      }
    
      registerOnTouched(fn: any): void {
        this.touchCallback = fn;
      }
      setDisabledState?(isDisabled: boolean): void {
        isDisabled ? this.password.disable() : this.password.enable();
      }
   

}