/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:use-host-property-decorator */
/* tslint:disable:directive-selector */
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { DefaultValidationErrors } from './default-validation-errors.service';
import { ValidationErrorDirective } from './validation-error.directive';
/**
 * Directive allowing to register default templates for validation error messages. It's supposed to be used once,
 * typically in the root component. By using templates to do that, error messages can
 * - easily be i18ned
 * - easily use pipes
 * - easily use HTML
 * - easily be ordered
 *
 * Example usage:
 * ```
 *   <val-default-errors>
 *     <ng-template valError="required">This field is mandatory</ng-template>
 *     <ng-template valError="max" let-error="error">This field must be at most {{ error.max | number }}</ng-template>
 *   </val-default-errors>
 * ```
 *
 * Example usage where a label is used to make the messages less generic:
 * ```
 *   <val-default-errors>
 *     <ng-template valError="required" let-label>{{ label }} is mandatory</ng-template>
 *     <ng-template valError="max" let-error="error" let-label>{{ label }} must be at most {{ error.max | number }}</ng-template>
 *   </val-default-errors>
 * ```
 *
 * This directive stores the default template references in a service, that is then injected in the validation errors components
 * to be reused.
 */
var DefaultValidationErrorsDirective = /** @class */ (function () {
    function DefaultValidationErrorsDirective(defaultValidationErrors) {
        this.defaultValidationErrors = defaultValidationErrors;
    }
    /**
     * @return {?}
     */
    DefaultValidationErrorsDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.defaultValidationErrors.directives = this.errorDirectives.toArray();
    };
    DefaultValidationErrorsDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'val-default-errors',
                    host: {
                        style: 'display: none'
                    }
                },] }
    ];
    /** @nocollapse */
    DefaultValidationErrorsDirective.ctorParameters = function () { return [
        { type: DefaultValidationErrors }
    ]; };
    DefaultValidationErrorsDirective.propDecorators = {
        errorDirectives: [{ type: ContentChildren, args: [ValidationErrorDirective,] }]
    };
    return DefaultValidationErrorsDirective;
}());
export { DefaultValidationErrorsDirective };
if (false) {
    /**
     * The list of validation error directives (i.e. <ng-template valError="...">)
     * contained inside the component element.
     * @type {?}
     */
    DefaultValidationErrorsDirective.prototype.errorDirectives;
    /**
     * @type {?}
     * @private
     */
    DefaultValidationErrorsDirective.prototype.defaultValidationErrors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC12YWxpZGF0aW9uLWVycm9ycy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdmFsZGVtb3J0LyIsInNvdXJjZXMiOlsibGliL2RlZmF1bHQtdmFsaWRhdGlvbi1lcnJvcnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBb0IsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QnhFO0lBUUUsMENBQW9CLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQUksQ0FBQzs7OztJQVN6RSw2REFBa0I7OztJQUFsQjtRQUNFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzRSxDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsZUFBZTtxQkFDdkI7aUJBQ0Y7Ozs7Z0JBbkNRLHVCQUF1Qjs7O2tDQTRDN0IsZUFBZSxTQUFDLHdCQUF3Qjs7SUFNM0MsdUNBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWRZLGdDQUFnQzs7Ozs7OztJQVEzQywyREFDcUQ7Ozs7O0lBUHpDLG1FQUF3RCIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvciAqL1xuLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWZhdWx0VmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJy4vZGVmYXVsdC12YWxpZGF0aW9uLWVycm9ycy5zZXJ2aWNlJztcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvckRpcmVjdGl2ZSB9IGZyb20gJy4vdmFsaWRhdGlvbi1lcnJvci5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSBhbGxvd2luZyB0byByZWdpc3RlciBkZWZhdWx0IHRlbXBsYXRlcyBmb3IgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlcy4gSXQncyBzdXBwb3NlZCB0byBiZSB1c2VkIG9uY2UsXG4gKiB0eXBpY2FsbHkgaW4gdGhlIHJvb3QgY29tcG9uZW50LiBCeSB1c2luZyB0ZW1wbGF0ZXMgdG8gZG8gdGhhdCwgZXJyb3IgbWVzc2FnZXMgY2FuXG4gKiAtIGVhc2lseSBiZSBpMThuZWRcbiAqIC0gZWFzaWx5IHVzZSBwaXBlc1xuICogLSBlYXNpbHkgdXNlIEhUTUxcbiAqIC0gZWFzaWx5IGJlIG9yZGVyZWRcbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogYGBgXG4gKiAgIDx2YWwtZGVmYXVsdC1lcnJvcnM+XG4gKiAgICAgPG5nLXRlbXBsYXRlIHZhbEVycm9yPVwicmVxdWlyZWRcIj5UaGlzIGZpZWxkIGlzIG1hbmRhdG9yeTwvbmctdGVtcGxhdGU+XG4gKiAgICAgPG5nLXRlbXBsYXRlIHZhbEVycm9yPVwibWF4XCIgbGV0LWVycm9yPVwiZXJyb3JcIj5UaGlzIGZpZWxkIG11c3QgYmUgYXQgbW9zdCB7eyBlcnJvci5tYXggfCBudW1iZXIgfX08L25nLXRlbXBsYXRlPlxuICogICA8L3ZhbC1kZWZhdWx0LWVycm9ycz5cbiAqIGBgYFxuICpcbiAqIEV4YW1wbGUgdXNhZ2Ugd2hlcmUgYSBsYWJlbCBpcyB1c2VkIHRvIG1ha2UgdGhlIG1lc3NhZ2VzIGxlc3MgZ2VuZXJpYzpcbiAqIGBgYFxuICogICA8dmFsLWRlZmF1bHQtZXJyb3JzPlxuICogICAgIDxuZy10ZW1wbGF0ZSB2YWxFcnJvcj1cInJlcXVpcmVkXCIgbGV0LWxhYmVsPnt7IGxhYmVsIH19IGlzIG1hbmRhdG9yeTwvbmctdGVtcGxhdGU+XG4gKiAgICAgPG5nLXRlbXBsYXRlIHZhbEVycm9yPVwibWF4XCIgbGV0LWVycm9yPVwiZXJyb3JcIiBsZXQtbGFiZWw+e3sgbGFiZWwgfX0gbXVzdCBiZSBhdCBtb3N0IHt7IGVycm9yLm1heCB8IG51bWJlciB9fTwvbmctdGVtcGxhdGU+XG4gKiAgIDwvdmFsLWRlZmF1bHQtZXJyb3JzPlxuICogYGBgXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgc3RvcmVzIHRoZSBkZWZhdWx0IHRlbXBsYXRlIHJlZmVyZW5jZXMgaW4gYSBzZXJ2aWNlLCB0aGF0IGlzIHRoZW4gaW5qZWN0ZWQgaW4gdGhlIHZhbGlkYXRpb24gZXJyb3JzIGNvbXBvbmVudHNcbiAqIHRvIGJlIHJldXNlZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndmFsLWRlZmF1bHQtZXJyb3JzJyxcbiAgaG9zdDoge1xuICAgIHN0eWxlOiAnZGlzcGxheTogbm9uZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0VmFsaWRhdGlvbkVycm9yc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVmYXVsdFZhbGlkYXRpb25FcnJvcnM6IERlZmF1bHRWYWxpZGF0aW9uRXJyb3JzKSB7IH1cblxuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvciBkaXJlY3RpdmVzIChpLmUuIDxuZy10ZW1wbGF0ZSB2YWxFcnJvcj1cIi4uLlwiPilcbiAgICogY29udGFpbmVkIGluc2lkZSB0aGUgY29tcG9uZW50IGVsZW1lbnQuXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKFZhbGlkYXRpb25FcnJvckRpcmVjdGl2ZSlcbiAgZXJyb3JEaXJlY3RpdmVzOiBRdWVyeUxpc3Q8VmFsaWRhdGlvbkVycm9yRGlyZWN0aXZlPjtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5kZWZhdWx0VmFsaWRhdGlvbkVycm9ycy5kaXJlY3RpdmVzID0gdGhpcy5lcnJvckRpcmVjdGl2ZXMudG9BcnJheSgpO1xuICB9XG59XG5cbiJdfQ==