/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:directive-selector */
/* tslint:disable:no-input-rename */
import { Directive, Input, TemplateRef } from '@angular/core';
/**
 * Directive allowing to define the template for an error of a given type (using the `valError` input), using an ng-template.
 * It's used inside the body of the validation errors component, or inside the body of the default validation errors directive.
 * See the documentation of these two for example usages.
 */
var ValidationErrorDirective = /** @class */ (function () {
    function ValidationErrorDirective(templateRef) {
        this.templateRef = templateRef;
    }
    ValidationErrorDirective.decorators = [
        { type: Directive, args: [{ selector: 'ng-template[valError]' },] }
    ];
    /** @nocollapse */
    ValidationErrorDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    ValidationErrorDirective.propDecorators = {
        type: [{ type: Input, args: ['valError',] }]
    };
    return ValidationErrorDirective;
}());
export { ValidationErrorDirective };
if (false) {
    /**
     * The type of the error that the content of the template must display.
     * @type {?}
     */
    ValidationErrorDirective.prototype.type;
    /** @type {?} */
    ValidationErrorDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdmFsZGVtb3J0LyIsInNvdXJjZXMiOlsibGliL3ZhbGlkYXRpb24tZXJyb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBTzlEO0lBT0Usa0NBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFJLENBQUM7O2dCQVB0RCxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7Ozs7Z0JBUG5CLFdBQVc7Ozt1QkFZbkMsS0FBSyxTQUFDLFVBQVU7O0lBR25CLCtCQUFDO0NBQUEsQUFSRCxJQVFDO1NBUFksd0JBQXdCOzs7Ozs7SUFJbkMsd0NBQWdDOztJQUVwQiwrQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtc2VsZWN0b3IgKi9cbi8qIHRzbGludDpkaXNhYmxlOm5vLWlucHV0LXJlbmFtZSAqL1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgYWxsb3dpbmcgdG8gZGVmaW5lIHRoZSB0ZW1wbGF0ZSBmb3IgYW4gZXJyb3Igb2YgYSBnaXZlbiB0eXBlICh1c2luZyB0aGUgYHZhbEVycm9yYCBpbnB1dCksIHVzaW5nIGFuIG5nLXRlbXBsYXRlLlxuICogSXQncyB1c2VkIGluc2lkZSB0aGUgYm9keSBvZiB0aGUgdmFsaWRhdGlvbiBlcnJvcnMgY29tcG9uZW50LCBvciBpbnNpZGUgdGhlIGJvZHkgb2YgdGhlIGRlZmF1bHQgdmFsaWRhdGlvbiBlcnJvcnMgZGlyZWN0aXZlLlxuICogU2VlIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoZXNlIHR3byBmb3IgZXhhbXBsZSB1c2FnZXMuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbdmFsRXJyb3JdJ30pXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkVycm9yRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoZSBlcnJvciB0aGF0IHRoZSBjb250ZW50IG9mIHRoZSB0ZW1wbGF0ZSBtdXN0IGRpc3BsYXkuXG4gICAqL1xuICBASW5wdXQoJ3ZhbEVycm9yJykgdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG4iXX0=