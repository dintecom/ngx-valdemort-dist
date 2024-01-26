/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** @enum {number} */
const DisplayMode = {
    ALL: 0, ONE: 1,
};
export { DisplayMode };
DisplayMode[DisplayMode.ALL] = 'ALL';
DisplayMode[DisplayMode.ONE] = 'ONE';
/**
 * The configuration service used by the validation errors component to apply common rules for all
 * form controls.
 *
 * To change its default behavior, you can either inject this service in your root module or component and mutate it,
 * or define your own implementation and provide it.
 */
export class ValdemortConfig {
    constructor() {
        /**
         * The display mode of the errors. The default value is ALL, meaning that all the errors existing on a control
         * (and which have an error template defined) are displayed.
         */
        this.displayMode = DisplayMode.ALL;
        /**
         * Specifies one or several CSS classes (separated by a white space) that are automatically added to the
         * validation errors element. This can be useful to reuse a standard CSS class of your CSS framework (like
         * .invalid-feedback in BootStrap), rather than styling the val-errors element itself.
         *
         * The default value is null (no class is added).
         */
        this.errorsClasses = null;
        /**
         * Specifies one or several CSS classes (separated by a white space) that are automatically added to the
         * each validation error message element. This can be useful to reuse a standard CSS class of your CSS framework
         * rather than styling the div element itself.
         *
         * The default value is null (no class is added).
         */
        this.errorClasses = null;
        /**
         * Specifies when error messages should be displayed. based on the state of the control itself (touched, dirty, etc.)
         * and on the state of the form directive containing it (if any). This function is only called if the control is invalid
         * in the first place: if it's valid, errors are never displayed.
         *
         * The default value of this function returns true if the control is touched, or if the form (if any) is submitted.
         */
        this.shouldDisplayErrors = (/**
         * @param {?} control
         * @param {?} form
         * @return {?}
         */
        (control, form) => control.touched || (!!form && form.submitted));
    }
}
ValdemortConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ValdemortConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValdemortConfig_Factory() { return new ValdemortConfig(); }, token: ValdemortConfig, providedIn: "root" });
if (false) {
    /**
     * The display mode of the errors. The default value is ALL, meaning that all the errors existing on a control
     * (and which have an error template defined) are displayed.
     * @type {?}
     */
    ValdemortConfig.prototype.displayMode;
    /**
     * Specifies one or several CSS classes (separated by a white space) that are automatically added to the
     * validation errors element. This can be useful to reuse a standard CSS class of your CSS framework (like
     * .invalid-feedback in BootStrap), rather than styling the val-errors element itself.
     *
     * The default value is null (no class is added).
     * @type {?}
     */
    ValdemortConfig.prototype.errorsClasses;
    /**
     * Specifies one or several CSS classes (separated by a white space) that are automatically added to the
     * each validation error message element. This can be useful to reuse a standard CSS class of your CSS framework
     * rather than styling the div element itself.
     *
     * The default value is null (no class is added).
     * @type {?}
     */
    ValdemortConfig.prototype.errorClasses;
    /**
     * Specifies when error messages should be displayed. based on the state of the control itself (touched, dirty, etc.)
     * and on the state of the form directive containing it (if any). This function is only called if the control is invalid
     * in the first place: if it's valid, errors are never displayed.
     *
     * The default value of this function returns true if the control is touched, or if the form (if any) is submitted.
     * @type {?}
     */
    ValdemortConfig.prototype.shouldDisplayErrors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsZGVtb3J0LWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXZhbGRlbW9ydC8iLCJzb3VyY2VzIjpbImxpYi92YWxkZW1vcnQtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUFRekMsTUFBRyxFQUFFLE1BQUc7Ozs7Ozs7Ozs7OztBQWFWLE1BQU0sT0FBTyxlQUFlO0lBSDVCOzs7OztRQVNFLGdCQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7UUFTOUIsa0JBQWEsR0FBa0IsSUFBSSxDQUFDOzs7Ozs7OztRQVNwQyxpQkFBWSxHQUFrQixJQUFJLENBQUM7Ozs7Ozs7O1FBU25DLHdCQUFtQjs7Ozs7UUFBRyxDQUFDLE9BQXdCLEVBQUUsSUFBNkMsRUFBRSxFQUFFLENBQ2hHLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQTtLQUNoRDs7O1lBdENBLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7O0lBT0Msc0NBQThCOzs7Ozs7Ozs7SUFTOUIsd0NBQW9DOzs7Ozs7Ozs7SUFTcEMsdUNBQW1DOzs7Ozs7Ozs7SUFTbkMsOENBQytDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBDb250cm9sQ29udGFpbmVyLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBUaGUgZGlzcGxheSBtb2RlIG9mIHRoZSB2YWxpZGF0aW9uIGVycm9ycy4gRm9yIGEgZ2l2ZW4gY29udHJvbCwgZWl0aGVyIGFsbCB0aGUgdmFsaWRhdGlvbiBlcnJvcnNcbiAqIGFyZSBkaXNwbGF5ZWQsIG9yIG9ubHkgdGhlIGZpcnN0IG9uZS5cbiAqL1xuZXhwb3J0IGVudW0gRGlzcGxheU1vZGUge1xuICBBTEwsIE9ORVxufVxuXG4vKipcbiAqIFRoZSBjb25maWd1cmF0aW9uIHNlcnZpY2UgdXNlZCBieSB0aGUgdmFsaWRhdGlvbiBlcnJvcnMgY29tcG9uZW50IHRvIGFwcGx5IGNvbW1vbiBydWxlcyBmb3IgYWxsXG4gKiBmb3JtIGNvbnRyb2xzLlxuICpcbiAqIFRvIGNoYW5nZSBpdHMgZGVmYXVsdCBiZWhhdmlvciwgeW91IGNhbiBlaXRoZXIgaW5qZWN0IHRoaXMgc2VydmljZSBpbiB5b3VyIHJvb3QgbW9kdWxlIG9yIGNvbXBvbmVudCBhbmQgbXV0YXRlIGl0LFxuICogb3IgZGVmaW5lIHlvdXIgb3duIGltcGxlbWVudGF0aW9uIGFuZCBwcm92aWRlIGl0LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBWYWxkZW1vcnRDb25maWcge1xuXG4gIC8qKlxuICAgKiBUaGUgZGlzcGxheSBtb2RlIG9mIHRoZSBlcnJvcnMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIEFMTCwgbWVhbmluZyB0aGF0IGFsbCB0aGUgZXJyb3JzIGV4aXN0aW5nIG9uIGEgY29udHJvbFxuICAgKiAoYW5kIHdoaWNoIGhhdmUgYW4gZXJyb3IgdGVtcGxhdGUgZGVmaW5lZCkgYXJlIGRpc3BsYXllZC5cbiAgICovXG4gIGRpc3BsYXlNb2RlID0gRGlzcGxheU1vZGUuQUxMO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgb25lIG9yIHNldmVyYWwgQ1NTIGNsYXNzZXMgKHNlcGFyYXRlZCBieSBhIHdoaXRlIHNwYWNlKSB0aGF0IGFyZSBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIHRoZVxuICAgKiB2YWxpZGF0aW9uIGVycm9ycyBlbGVtZW50LiBUaGlzIGNhbiBiZSB1c2VmdWwgdG8gcmV1c2UgYSBzdGFuZGFyZCBDU1MgY2xhc3Mgb2YgeW91ciBDU1MgZnJhbWV3b3JrIChsaWtlXG4gICAqIC5pbnZhbGlkLWZlZWRiYWNrIGluIEJvb3RTdHJhcCksIHJhdGhlciB0aGFuIHN0eWxpbmcgdGhlIHZhbC1lcnJvcnMgZWxlbWVudCBpdHNlbGYuXG4gICAqXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIG51bGwgKG5vIGNsYXNzIGlzIGFkZGVkKS5cbiAgICovXG4gIGVycm9yc0NsYXNzZXM6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgb25lIG9yIHNldmVyYWwgQ1NTIGNsYXNzZXMgKHNlcGFyYXRlZCBieSBhIHdoaXRlIHNwYWNlKSB0aGF0IGFyZSBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIHRoZVxuICAgKiBlYWNoIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZSBlbGVtZW50LiBUaGlzIGNhbiBiZSB1c2VmdWwgdG8gcmV1c2UgYSBzdGFuZGFyZCBDU1MgY2xhc3Mgb2YgeW91ciBDU1MgZnJhbWV3b3JrXG4gICAqIHJhdGhlciB0aGFuIHN0eWxpbmcgdGhlIGRpdiBlbGVtZW50IGl0c2VsZi5cbiAgICpcbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgbnVsbCAobm8gY2xhc3MgaXMgYWRkZWQpLlxuICAgKi9cbiAgZXJyb3JDbGFzc2VzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHdoZW4gZXJyb3IgbWVzc2FnZXMgc2hvdWxkIGJlIGRpc3BsYXllZC4gYmFzZWQgb24gdGhlIHN0YXRlIG9mIHRoZSBjb250cm9sIGl0c2VsZiAodG91Y2hlZCwgZGlydHksIGV0Yy4pXG4gICAqIGFuZCBvbiB0aGUgc3RhdGUgb2YgdGhlIGZvcm0gZGlyZWN0aXZlIGNvbnRhaW5pbmcgaXQgKGlmIGFueSkuIFRoaXMgZnVuY3Rpb24gaXMgb25seSBjYWxsZWQgaWYgdGhlIGNvbnRyb2wgaXMgaW52YWxpZFxuICAgKiBpbiB0aGUgZmlyc3QgcGxhY2U6IGlmIGl0J3MgdmFsaWQsIGVycm9ycyBhcmUgbmV2ZXIgZGlzcGxheWVkLlxuICAgKlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSBpZiB0aGUgY29udHJvbCBpcyB0b3VjaGVkLCBvciBpZiB0aGUgZm9ybSAoaWYgYW55KSBpcyBzdWJtaXR0ZWQuXG4gICAqL1xuICBzaG91bGREaXNwbGF5RXJyb3JzID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgZm9ybTogTmdGb3JtIHwgRm9ybUdyb3VwRGlyZWN0aXZlIHwgdW5kZWZpbmVkKSA9PlxuICAgIGNvbnRyb2wudG91Y2hlZCB8fCAoISFmb3JtICYmIGZvcm0uc3VibWl0dGVkKVxufVxuIl19