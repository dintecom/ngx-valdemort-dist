/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** @enum {number} */
var DisplayMode = {
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
var ValdemortConfig = /** @class */ (function () {
    function ValdemortConfig() {
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
        function (control, form) {
            return control.touched || (!!form && form.submitted);
        });
    }
    ValdemortConfig.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ ValdemortConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValdemortConfig_Factory() { return new ValdemortConfig(); }, token: ValdemortConfig, providedIn: "root" });
    return ValdemortConfig;
}());
export { ValdemortConfig };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsZGVtb3J0LWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXZhbGRlbW9ydC8iLCJzb3VyY2VzIjpbImxpYi92YWxkZW1vcnQtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUFRekMsTUFBRyxFQUFFLE1BQUc7Ozs7Ozs7Ozs7OztBQVVWO0lBQUE7Ozs7O1FBU0UsZ0JBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDOzs7Ozs7OztRQVM5QixrQkFBYSxHQUFrQixJQUFJLENBQUM7Ozs7Ozs7O1FBU3BDLGlCQUFZLEdBQWtCLElBQUksQ0FBQzs7Ozs7Ozs7UUFTbkMsd0JBQW1COzs7OztRQUFHLFVBQUMsT0FBd0IsRUFBRSxJQUE2QztZQUM1RixPQUFBLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFBN0MsQ0FBNkMsRUFBQTtLQUNoRDs7Z0JBdENBLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzswQkFwQkQ7Q0F3REMsQUF0Q0QsSUFzQ0M7U0FuQ1ksZUFBZTs7Ozs7OztJQU0xQixzQ0FBOEI7Ozs7Ozs7OztJQVM5Qix3Q0FBb0M7Ozs7Ozs7OztJQVNwQyx1Q0FBbUM7Ozs7Ozs7OztJQVNuQyw4Q0FDK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIENvbnRyb2xDb250YWluZXIsIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIFRoZSBkaXNwbGF5IG1vZGUgb2YgdGhlIHZhbGlkYXRpb24gZXJyb3JzLiBGb3IgYSBnaXZlbiBjb250cm9sLCBlaXRoZXIgYWxsIHRoZSB2YWxpZGF0aW9uIGVycm9yc1xuICogYXJlIGRpc3BsYXllZCwgb3Igb25seSB0aGUgZmlyc3Qgb25lLlxuICovXG5leHBvcnQgZW51bSBEaXNwbGF5TW9kZSB7XG4gIEFMTCwgT05FXG59XG5cbi8qKlxuICogVGhlIGNvbmZpZ3VyYXRpb24gc2VydmljZSB1c2VkIGJ5IHRoZSB2YWxpZGF0aW9uIGVycm9ycyBjb21wb25lbnQgdG8gYXBwbHkgY29tbW9uIHJ1bGVzIGZvciBhbGxcbiAqIGZvcm0gY29udHJvbHMuXG4gKlxuICogVG8gY2hhbmdlIGl0cyBkZWZhdWx0IGJlaGF2aW9yLCB5b3UgY2FuIGVpdGhlciBpbmplY3QgdGhpcyBzZXJ2aWNlIGluIHlvdXIgcm9vdCBtb2R1bGUgb3IgY29tcG9uZW50IGFuZCBtdXRhdGUgaXQsXG4gKiBvciBkZWZpbmUgeW91ciBvd24gaW1wbGVtZW50YXRpb24gYW5kIHByb3ZpZGUgaXQuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFZhbGRlbW9ydENvbmZpZyB7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXNwbGF5IG1vZGUgb2YgdGhlIGVycm9ycy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgQUxMLCBtZWFuaW5nIHRoYXQgYWxsIHRoZSBlcnJvcnMgZXhpc3Rpbmcgb24gYSBjb250cm9sXG4gICAqIChhbmQgd2hpY2ggaGF2ZSBhbiBlcnJvciB0ZW1wbGF0ZSBkZWZpbmVkKSBhcmUgZGlzcGxheWVkLlxuICAgKi9cbiAgZGlzcGxheU1vZGUgPSBEaXNwbGF5TW9kZS5BTEw7XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyBvbmUgb3Igc2V2ZXJhbCBDU1MgY2xhc3NlcyAoc2VwYXJhdGVkIGJ5IGEgd2hpdGUgc3BhY2UpIHRoYXQgYXJlIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gdGhlXG4gICAqIHZhbGlkYXRpb24gZXJyb3JzIGVsZW1lbnQuIFRoaXMgY2FuIGJlIHVzZWZ1bCB0byByZXVzZSBhIHN0YW5kYXJkIENTUyBjbGFzcyBvZiB5b3VyIENTUyBmcmFtZXdvcmsgKGxpa2VcbiAgICogLmludmFsaWQtZmVlZGJhY2sgaW4gQm9vdFN0cmFwKSwgcmF0aGVyIHRoYW4gc3R5bGluZyB0aGUgdmFsLWVycm9ycyBlbGVtZW50IGl0c2VsZi5cbiAgICpcbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgbnVsbCAobm8gY2xhc3MgaXMgYWRkZWQpLlxuICAgKi9cbiAgZXJyb3JzQ2xhc3Nlczogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyBvbmUgb3Igc2V2ZXJhbCBDU1MgY2xhc3NlcyAoc2VwYXJhdGVkIGJ5IGEgd2hpdGUgc3BhY2UpIHRoYXQgYXJlIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gdGhlXG4gICAqIGVhY2ggdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlIGVsZW1lbnQuIFRoaXMgY2FuIGJlIHVzZWZ1bCB0byByZXVzZSBhIHN0YW5kYXJkIENTUyBjbGFzcyBvZiB5b3VyIENTUyBmcmFtZXdvcmtcbiAgICogcmF0aGVyIHRoYW4gc3R5bGluZyB0aGUgZGl2IGVsZW1lbnQgaXRzZWxmLlxuICAgKlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBudWxsIChubyBjbGFzcyBpcyBhZGRlZCkuXG4gICAqL1xuICBlcnJvckNsYXNzZXM6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgd2hlbiBlcnJvciBtZXNzYWdlcyBzaG91bGQgYmUgZGlzcGxheWVkLiBiYXNlZCBvbiB0aGUgc3RhdGUgb2YgdGhlIGNvbnRyb2wgaXRzZWxmICh0b3VjaGVkLCBkaXJ0eSwgZXRjLilcbiAgICogYW5kIG9uIHRoZSBzdGF0ZSBvZiB0aGUgZm9ybSBkaXJlY3RpdmUgY29udGFpbmluZyBpdCAoaWYgYW55KS4gVGhpcyBmdW5jdGlvbiBpcyBvbmx5IGNhbGxlZCBpZiB0aGUgY29udHJvbCBpcyBpbnZhbGlkXG4gICAqIGluIHRoZSBmaXJzdCBwbGFjZTogaWYgaXQncyB2YWxpZCwgZXJyb3JzIGFyZSBuZXZlciBkaXNwbGF5ZWQuXG4gICAqXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0cnVlIGlmIHRoZSBjb250cm9sIGlzIHRvdWNoZWQsIG9yIGlmIHRoZSBmb3JtIChpZiBhbnkpIGlzIHN1Ym1pdHRlZC5cbiAgICovXG4gIHNob3VsZERpc3BsYXlFcnJvcnMgPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBmb3JtOiBOZ0Zvcm0gfCBGb3JtR3JvdXBEaXJlY3RpdmUgfCB1bmRlZmluZWQpID0+XG4gICAgY29udHJvbC50b3VjaGVkIHx8ICghIWZvcm0gJiYgZm9ybS5zdWJtaXR0ZWQpXG59XG4iXX0=