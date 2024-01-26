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
export class ValidationErrorDirective {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
ValidationErrorDirective.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[valError]' },] }
];
/** @nocollapse */
ValidationErrorDirective.ctorParameters = () => [
    { type: TemplateRef }
];
ValidationErrorDirective.propDecorators = {
    type: [{ type: Input, args: ['valError',] }]
};
if (false) {
    /**
     * The type of the error that the content of the template must display.
     * @type {?}
     */
    ValidationErrorDirective.prototype.type;
    /** @type {?} */
    ValidationErrorDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdmFsZGVtb3J0LyIsInNvdXJjZXMiOlsibGliL3ZhbGlkYXRpb24tZXJyb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBUTlELE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFNbkMsWUFBbUIsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBQUksQ0FBQzs7O1lBUHRELFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSx1QkFBdUIsRUFBQzs7OztZQVBuQixXQUFXOzs7bUJBWW5DLEtBQUssU0FBQyxVQUFVOzs7Ozs7O0lBQWpCLHdDQUFnQzs7SUFFcEIsK0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby1pbnB1dC1yZW5hbWUgKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIGFsbG93aW5nIHRvIGRlZmluZSB0aGUgdGVtcGxhdGUgZm9yIGFuIGVycm9yIG9mIGEgZ2l2ZW4gdHlwZSAodXNpbmcgdGhlIGB2YWxFcnJvcmAgaW5wdXQpLCB1c2luZyBhbiBuZy10ZW1wbGF0ZS5cbiAqIEl0J3MgdXNlZCBpbnNpZGUgdGhlIGJvZHkgb2YgdGhlIHZhbGlkYXRpb24gZXJyb3JzIGNvbXBvbmVudCwgb3IgaW5zaWRlIHRoZSBib2R5IG9mIHRoZSBkZWZhdWx0IHZhbGlkYXRpb24gZXJyb3JzIGRpcmVjdGl2ZS5cbiAqIFNlZSB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGVzZSB0d28gZm9yIGV4YW1wbGUgdXNhZ2VzLlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW3ZhbEVycm9yXSd9KVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25FcnJvckRpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgZXJyb3IgdGhhdCB0aGUgY29udGVudCBvZiB0aGUgdGVtcGxhdGUgbXVzdCBkaXNwbGF5LlxuICAgKi9cbiAgQElucHV0KCd2YWxFcnJvcicpIHR5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuIl19