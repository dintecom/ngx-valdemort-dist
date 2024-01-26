/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:use-host-property-decorator */
import { Component, ContentChildren, Input, Optional, QueryList } from '@angular/core';
import { AbstractControl, ControlContainer } from '@angular/forms';
import { ValdemortConfig, DisplayMode } from './valdemort-config.service';
import { DefaultValidationErrors } from './default-validation-errors.service';
import { ValidationErrorDirective } from './validation-error.directive';
/**
 * Component allowing to display validation error messages associated to a given form control, form group or form array.
 * The control is provided using the `control` input of the component. If it's used inside an enclosing form group or
 * form array, it can instead be provided using the `controlName` input of the component.
 *
 * Example usage where the control itself is being passed as input:
 * ```
 *   <val-errors [control]="form.get('birthDate')">
 *     <ng-template valError="required">The birth date is mandatory</ng-template>
 *     <ng-template valError="max" let-error="error">The max value for the birth date is {{ error.max | number }}</ng-template>
 *   </val-errors>
 * ```
 *
 * Example usage where the control name is being passed as input:
 * ```
 *   <val-errors controlName="birthDate">
 *     <ng-template valError="required">The birth date is mandatory</ng-template>
 *     <ng-template valError="max" let-error="error">The max value for the birth date is {{ error.max | number }}</ng-template>
 *   </val-errors>
 * ```
 *
 * This component, if the control is invalid, displays its validation errors using the provided templates.
 * The templates, as shown in the above example, have access to the validation error itself.
 *
 * The label of the control can also be provided as input, and then used in the templates:
 * ```
 *   <val-errors controlName="birthDate" label="the birth date">
 *     <ng-template valError="required" let-label>{{ label }} is mandatory</ng-template>
 *     <ng-template valError="max" let-error="error" let-label>The max value for {{ label }} is {{ error.max | number }}</ng-template>
 *   </val-errors>
 * ```
 *
 * The component‘s behavior is configured globally by the Config service (see its documentation for more details). It can
 * - display the first error, or all the errors
 * - add CSS classes to its host `<val-errors>` element
 * - add CSS classes to each error message element being displayed
 * - choose when to display the errors (dirty, touched, touched and submitted, etc.)
 *
 * Global, default templates can be defined (and used by this component) using the default validation errors directive
 * (see its documentation for details). So, if the default error messages are defined and sufficient for a given control, all you
 * need is
 *
 * ```
 * <val-errors controlName="birthDate"></val-errors>
 * ```
 *
 * or, if the default templates expect a label:
 *
 * ```
 * <val-errors controlName="birthDate" label="the birth date"></val-errors>
 * ```
 *
 * If, however, you want to override one or several error messages by custom ones, you can do so by simply defining them inside the
 * component:
 *
 * ```
 * <val-errors controlName="birthDate" label="the birth date">
 *   <ng-template valError="max">You're too young, sorry</ng-template>
 * </val-errors>
 * ```
 *
 * If an error is present on the control, but doesn't have any template or default template defined for its type, then it's not
 * displayed. If the control is valid, or if none of the errors of the component has a matching template or default template,
 * then this component itself is hidden.
 */
export class ValidationErrorsComponent {
    /**
     * @param {?} config the Config service instance, defining the behavior of this component
     * @param {?} defaultValidationErrors the service holding the default error templates, optionally
     * defined by using the default validation errors directive
     * @param {?} controlContainer one of the 4 form group or form array directives that can "wrap" the control.
     * It's injected so that we can know if it exists and, if it does, if its form directive has been submitted or not:
     * the config service shouldDisplayErrors function can choose (and does by default) to use that information.
     */
    constructor(config, defaultValidationErrors, controlContainer) {
        this.config = config;
        this.defaultValidationErrors = defaultValidationErrors;
        this.controlContainer = controlContainer;
    }
    /**
     * @return {?}
     */
    get shouldDisplayErrors() {
        /** @type {?} */
        const ctrl = this.actualControl;
        if (!ctrl || !ctrl.invalid || !this.hasDisplayableError(ctrl)) {
            return false;
        }
        /** @type {?} */
        const form = this.controlContainer && ((/** @type {?} */ (this.controlContainer.formDirective)));
        return this.config.shouldDisplayErrors(ctrl, form);
    }
    /**
     * @return {?}
     */
    get errorsClasses() {
        return this.config.errorsClasses || '';
    }
    /**
     * @return {?}
     */
    get errorClasses() {
        return this.config.errorClasses || '';
    }
    /**
     * @return {?}
     */
    get errorDirectivesToDisplay() {
        /** @type {?} */
        const mergedDirectives = [];
        /** @type {?} */
        const alreadyMetTypes = new Set();
        /** @type {?} */
        const shouldContinue = (/**
         * @return {?}
         */
        () => (this.config.displayMode === DisplayMode.ALL || mergedDirectives.length === 0));
        /** @type {?} */
        const ctrl = this.actualControl;
        for (let i = 0; i < this.defaultValidationErrors.directives.length && shouldContinue(); i++) {
            /** @type {?} */
            const defaultDirective = this.defaultValidationErrors.directives[i];
            alreadyMetTypes.add(defaultDirective.type);
            if (ctrl.hasError(defaultDirective.type)) {
                /** @type {?} */
                const customDirectiveOfSameType = this.errorDirectives.find((/**
                 * @param {?} dir
                 * @return {?}
                 */
                dir => dir.type === defaultDirective.type));
                mergedDirectives.push(customDirectiveOfSameType || defaultDirective);
            }
        }
        /** @type {?} */
        const customDirectives = this.errorDirectives.toArray();
        for (let i = 0; i < customDirectives.length && shouldContinue(); i++) {
            /** @type {?} */
            const customDirective = customDirectives[i];
            if (ctrl.hasError(customDirective.type) && !alreadyMetTypes.has(customDirective.type)) {
                mergedDirectives.push(customDirective);
            }
        }
        return mergedDirectives;
    }
    /**
     * @return {?}
     */
    get actualControl() {
        return this.control ||
            ((this.controlName || ((/** @type {?} */ (this.controlName)) === 0)) &&
                this.controlContainer &&
                this.controlContainer.control &&
                ((/** @type {?} */ (((/** @type {?} */ (this.controlContainer.control))).controls)))[this.controlName]);
    }
    /**
     * @private
     * @param {?} ctrl
     * @return {?}
     */
    hasDisplayableError(ctrl) {
        return ctrl.errors && Object.keys(ctrl.errors).some((/**
         * @param {?} type
         * @return {?}
         */
        type => this.defaultValidationErrors.directives.some((/**
         * @param {?} dir
         * @return {?}
         */
        dir => dir.type === type))
            || this.errorDirectives.some((/**
             * @param {?} dir
             * @return {?}
             */
            dir => dir.type === type))));
    }
}
ValidationErrorsComponent.decorators = [
    { type: Component, args: [{
                selector: 'val-errors',
                template: "<ng-container *ngIf=\"shouldDisplayErrors\">\n  <div [class]=\"errorClasses\" *ngFor=\"let errorDirective of errorDirectivesToDisplay\">\n    <ng-container *ngTemplateOutlet=\"errorDirective!.templateRef; context: {\n      $implicit: label,\n      error: actualControl.errors![errorDirective.type]\n    }\"></ng-container>\n  </div>\n</ng-container>\n",
                host: {
                    '[class]': 'errorsClasses',
                    '[style.display]': `shouldDisplayErrors ? '' : 'none'`
                }
            }] }
];
/** @nocollapse */
ValidationErrorsComponent.ctorParameters = () => [
    { type: ValdemortConfig },
    { type: DefaultValidationErrors },
    { type: ControlContainer, decorators: [{ type: Optional }] }
];
ValidationErrorsComponent.propDecorators = {
    control: [{ type: Input }],
    controlName: [{ type: Input }],
    label: [{ type: Input }],
    errorDirectives: [{ type: ContentChildren, args: [ValidationErrorDirective,] }]
};
if (false) {
    /**
     * The FormControl, FormGroup or FormArray containing the validation errors.
     * If set, the controlName input is ignored
     * @type {?}
     */
    ValidationErrorsComponent.prototype.control;
    /**
     * The name (or the index, in case it's contained in a FormArray) of the FormControl, FormGroup or FormArray containing the validation
     * errors.
     * Ignored if the control input is set, and only usable if the control to validate is part of a control container
     * @type {?}
     */
    ValidationErrorsComponent.prototype.controlName;
    /**
     * The label of the field, exposed to templates so they can use it in the error message.
     * @type {?}
     */
    ValidationErrorsComponent.prototype.label;
    /**
     * The list of validation error directives (i.e. <ng-template valError="...">) contained inside the component element.
     * @type {?}
     */
    ValidationErrorsComponent.prototype.errorDirectives;
    /**
     * @type {?}
     * @private
     */
    ValidationErrorsComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ValidationErrorsComponent.prototype.defaultValidationErrors;
    /**
     * @type {?}
     * @private
     */
    ValidationErrorsComponent.prototype.controlContainer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXZhbGRlbW9ydC8iLCJzb3VyY2VzIjpbImxpYi92YWxpZGF0aW9uLWVycm9ycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFvRCxNQUFNLGdCQUFnQixDQUFDO0FBQ3JILE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJFeEUsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7Ozs7O0lBcUNwQyxZQUFvQixNQUF1QixFQUN2Qix1QkFBZ0QsRUFDcEMsZ0JBQWtDO1FBRjlDLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7Ozs7SUFFdkUsSUFBSSxtQkFBbUI7O2NBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhO1FBQy9CLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O2NBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFD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QUk7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUN6RCxJQUFJLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFDO2VBQ25FLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSTs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUMsRUFDdkQsQ0FBQztJQUNKLENBQUM7OztZQXZHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDJXQUFpRDtnQkFDakQsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxlQUFlO29CQUMxQixpQkFBaUIsRUFBRSxtQ0FBbUM7aUJBQ3ZEO2FBQ0Y7Ozs7WUE1RVEsZUFBZTtZQUNmLHVCQUF1QjtZQUZOLGdCQUFnQix1QkFxSDNCLFFBQVE7OztzQkFqQ3BCLEtBQUs7MEJBUUwsS0FBSztvQkFNTCxLQUFLOzhCQU1MLGVBQWUsU0FBQyx3QkFBd0I7Ozs7Ozs7O0lBcEJ6Qyw0Q0FDeUI7Ozs7Ozs7SUFPekIsZ0RBQzZCOzs7OztJQUs3QiwwQ0FDYzs7Ozs7SUFLZCxvREFDc0Q7Ozs7O0lBVTFDLDJDQUErQjs7Ozs7SUFDL0IsNERBQXdEOzs7OztJQUN4RCxxREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTp1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3IgKi9cbmltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBJbnB1dCwgT3B0aW9uYWwsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBDb250cm9sQ29udGFpbmVyLCBGb3JtQXJyYXksIEZvcm1Hcm91cCwgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWYWxkZW1vcnRDb25maWcsIERpc3BsYXlNb2RlIH0gZnJvbSAnLi92YWxkZW1vcnQtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGVmYXVsdFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICcuL2RlZmF1bHQtdmFsaWRhdGlvbi1lcnJvcnMuc2VydmljZSc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JEaXJlY3RpdmUgfSBmcm9tICcuL3ZhbGlkYXRpb24tZXJyb3IuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBDb21wb25lbnQgYWxsb3dpbmcgdG8gZGlzcGxheSB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzIGFzc29jaWF0ZWQgdG8gYSBnaXZlbiBmb3JtIGNvbnRyb2wsIGZvcm0gZ3JvdXAgb3IgZm9ybSBhcnJheS5cbiAqIFRoZSBjb250cm9sIGlzIHByb3ZpZGVkIHVzaW5nIHRoZSBgY29udHJvbGAgaW5wdXQgb2YgdGhlIGNvbXBvbmVudC4gSWYgaXQncyB1c2VkIGluc2lkZSBhbiBlbmNsb3NpbmcgZm9ybSBncm91cCBvclxuICogZm9ybSBhcnJheSwgaXQgY2FuIGluc3RlYWQgYmUgcHJvdmlkZWQgdXNpbmcgdGhlIGBjb250cm9sTmFtZWAgaW5wdXQgb2YgdGhlIGNvbXBvbmVudC5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlIHdoZXJlIHRoZSBjb250cm9sIGl0c2VsZiBpcyBiZWluZyBwYXNzZWQgYXMgaW5wdXQ6XG4gKiBgYGBcbiAqICAgPHZhbC1lcnJvcnMgW2NvbnRyb2xdPVwiZm9ybS5nZXQoJ2JpcnRoRGF0ZScpXCI+XG4gKiAgICAgPG5nLXRlbXBsYXRlIHZhbEVycm9yPVwicmVxdWlyZWRcIj5UaGUgYmlydGggZGF0ZSBpcyBtYW5kYXRvcnk8L25nLXRlbXBsYXRlPlxuICogICAgIDxuZy10ZW1wbGF0ZSB2YWxFcnJvcj1cIm1heFwiIGxldC1lcnJvcj1cImVycm9yXCI+VGhlIG1heCB2YWx1ZSBmb3IgdGhlIGJpcnRoIGRhdGUgaXMge3sgZXJyb3IubWF4IHwgbnVtYmVyIH19PC9uZy10ZW1wbGF0ZT5cbiAqICAgPC92YWwtZXJyb3JzPlxuICogYGBgXG4gKlxuICogRXhhbXBsZSB1c2FnZSB3aGVyZSB0aGUgY29udHJvbCBuYW1lIGlzIGJlaW5nIHBhc3NlZCBhcyBpbnB1dDpcbiAqIGBgYFxuICogICA8dmFsLWVycm9ycyBjb250cm9sTmFtZT1cImJpcnRoRGF0ZVwiPlxuICogICAgIDxuZy10ZW1wbGF0ZSB2YWxFcnJvcj1cInJlcXVpcmVkXCI+VGhlIGJpcnRoIGRhdGUgaXMgbWFuZGF0b3J5PC9uZy10ZW1wbGF0ZT5cbiAqICAgICA8bmctdGVtcGxhdGUgdmFsRXJyb3I9XCJtYXhcIiBsZXQtZXJyb3I9XCJlcnJvclwiPlRoZSBtYXggdmFsdWUgZm9yIHRoZSBiaXJ0aCBkYXRlIGlzIHt7IGVycm9yLm1heCB8IG51bWJlciB9fTwvbmctdGVtcGxhdGU+XG4gKiAgIDwvdmFsLWVycm9ycz5cbiAqIGBgYFxuICpcbiAqIFRoaXMgY29tcG9uZW50LCBpZiB0aGUgY29udHJvbCBpcyBpbnZhbGlkLCBkaXNwbGF5cyBpdHMgdmFsaWRhdGlvbiBlcnJvcnMgdXNpbmcgdGhlIHByb3ZpZGVkIHRlbXBsYXRlcy5cbiAqIFRoZSB0ZW1wbGF0ZXMsIGFzIHNob3duIGluIHRoZSBhYm92ZSBleGFtcGxlLCBoYXZlIGFjY2VzcyB0byB0aGUgdmFsaWRhdGlvbiBlcnJvciBpdHNlbGYuXG4gKlxuICogVGhlIGxhYmVsIG9mIHRoZSBjb250cm9sIGNhbiBhbHNvIGJlIHByb3ZpZGVkIGFzIGlucHV0LCBhbmQgdGhlbiB1c2VkIGluIHRoZSB0ZW1wbGF0ZXM6XG4gKiBgYGBcbiAqICAgPHZhbC1lcnJvcnMgY29udHJvbE5hbWU9XCJiaXJ0aERhdGVcIiBsYWJlbD1cInRoZSBiaXJ0aCBkYXRlXCI+XG4gKiAgICAgPG5nLXRlbXBsYXRlIHZhbEVycm9yPVwicmVxdWlyZWRcIiBsZXQtbGFiZWw+e3sgbGFiZWwgfX0gaXMgbWFuZGF0b3J5PC9uZy10ZW1wbGF0ZT5cbiAqICAgICA8bmctdGVtcGxhdGUgdmFsRXJyb3I9XCJtYXhcIiBsZXQtZXJyb3I9XCJlcnJvclwiIGxldC1sYWJlbD5UaGUgbWF4IHZhbHVlIGZvciB7eyBsYWJlbCB9fSBpcyB7eyBlcnJvci5tYXggfCBudW1iZXIgfX08L25nLXRlbXBsYXRlPlxuICogICA8L3ZhbC1lcnJvcnM+XG4gKiBgYGBcbiAqXG4gKiBUaGUgY29tcG9uZW504oCYcyBiZWhhdmlvciBpcyBjb25maWd1cmVkIGdsb2JhbGx5IGJ5IHRoZSBDb25maWcgc2VydmljZSAoc2VlIGl0cyBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGRldGFpbHMpLiBJdCBjYW5cbiAqIC0gZGlzcGxheSB0aGUgZmlyc3QgZXJyb3IsIG9yIGFsbCB0aGUgZXJyb3JzXG4gKiAtIGFkZCBDU1MgY2xhc3NlcyB0byBpdHMgaG9zdCBgPHZhbC1lcnJvcnM+YCBlbGVtZW50XG4gKiAtIGFkZCBDU1MgY2xhc3NlcyB0byBlYWNoIGVycm9yIG1lc3NhZ2UgZWxlbWVudCBiZWluZyBkaXNwbGF5ZWRcbiAqIC0gY2hvb3NlIHdoZW4gdG8gZGlzcGxheSB0aGUgZXJyb3JzIChkaXJ0eSwgdG91Y2hlZCwgdG91Y2hlZCBhbmQgc3VibWl0dGVkLCBldGMuKVxuICpcbiAqIEdsb2JhbCwgZGVmYXVsdCB0ZW1wbGF0ZXMgY2FuIGJlIGRlZmluZWQgKGFuZCB1c2VkIGJ5IHRoaXMgY29tcG9uZW50KSB1c2luZyB0aGUgZGVmYXVsdCB2YWxpZGF0aW9uIGVycm9ycyBkaXJlY3RpdmVcbiAqIChzZWUgaXRzIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMpLiBTbywgaWYgdGhlIGRlZmF1bHQgZXJyb3IgbWVzc2FnZXMgYXJlIGRlZmluZWQgYW5kIHN1ZmZpY2llbnQgZm9yIGEgZ2l2ZW4gY29udHJvbCwgYWxsIHlvdVxuICogbmVlZCBpc1xuICpcbiAqIGBgYFxuICogPHZhbC1lcnJvcnMgY29udHJvbE5hbWU9XCJiaXJ0aERhdGVcIj48L3ZhbC1lcnJvcnM+XG4gKiBgYGBcbiAqXG4gKiBvciwgaWYgdGhlIGRlZmF1bHQgdGVtcGxhdGVzIGV4cGVjdCBhIGxhYmVsOlxuICpcbiAqIGBgYFxuICogPHZhbC1lcnJvcnMgY29udHJvbE5hbWU9XCJiaXJ0aERhdGVcIiBsYWJlbD1cInRoZSBiaXJ0aCBkYXRlXCI+PC92YWwtZXJyb3JzPlxuICogYGBgXG4gKlxuICogSWYsIGhvd2V2ZXIsIHlvdSB3YW50IHRvIG92ZXJyaWRlIG9uZSBvciBzZXZlcmFsIGVycm9yIG1lc3NhZ2VzIGJ5IGN1c3RvbSBvbmVzLCB5b3UgY2FuIGRvIHNvIGJ5IHNpbXBseSBkZWZpbmluZyB0aGVtIGluc2lkZSB0aGVcbiAqIGNvbXBvbmVudDpcbiAqXG4gKiBgYGBcbiAqIDx2YWwtZXJyb3JzIGNvbnRyb2xOYW1lPVwiYmlydGhEYXRlXCIgbGFiZWw9XCJ0aGUgYmlydGggZGF0ZVwiPlxuICogICA8bmctdGVtcGxhdGUgdmFsRXJyb3I9XCJtYXhcIj5Zb3UncmUgdG9vIHlvdW5nLCBzb3JyeTwvbmctdGVtcGxhdGU+XG4gKiA8L3ZhbC1lcnJvcnM+XG4gKiBgYGBcbiAqXG4gKiBJZiBhbiBlcnJvciBpcyBwcmVzZW50IG9uIHRoZSBjb250cm9sLCBidXQgZG9lc24ndCBoYXZlIGFueSB0ZW1wbGF0ZSBvciBkZWZhdWx0IHRlbXBsYXRlIGRlZmluZWQgZm9yIGl0cyB0eXBlLCB0aGVuIGl0J3Mgbm90XG4gKiBkaXNwbGF5ZWQuIElmIHRoZSBjb250cm9sIGlzIHZhbGlkLCBvciBpZiBub25lIG9mIHRoZSBlcnJvcnMgb2YgdGhlIGNvbXBvbmVudCBoYXMgYSBtYXRjaGluZyB0ZW1wbGF0ZSBvciBkZWZhdWx0IHRlbXBsYXRlLFxuICogdGhlbiB0aGlzIGNvbXBvbmVudCBpdHNlbGYgaXMgaGlkZGVuLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2YWwtZXJyb3JzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZhbGlkYXRpb24tZXJyb3JzLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ2Vycm9yc0NsYXNzZXMnLFxuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgc2hvdWxkRGlzcGxheUVycm9ycyA/ICcnIDogJ25vbmUnYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25FcnJvcnNDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBUaGUgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCBvciBGb3JtQXJyYXkgY29udGFpbmluZyB0aGUgdmFsaWRhdGlvbiBlcnJvcnMuXG4gICAqIElmIHNldCwgdGhlIGNvbnRyb2xOYW1lIGlucHV0IGlzIGlnbm9yZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICAvKipcbiAgICogVGhlIG5hbWUgKG9yIHRoZSBpbmRleCwgaW4gY2FzZSBpdCdzIGNvbnRhaW5lZCBpbiBhIEZvcm1BcnJheSkgb2YgdGhlIEZvcm1Db250cm9sLCBGb3JtR3JvdXAgb3IgRm9ybUFycmF5IGNvbnRhaW5pbmcgdGhlIHZhbGlkYXRpb25cbiAgICogZXJyb3JzLlxuICAgKiBJZ25vcmVkIGlmIHRoZSBjb250cm9sIGlucHV0IGlzIHNldCwgYW5kIG9ubHkgdXNhYmxlIGlmIHRoZSBjb250cm9sIHRvIHZhbGlkYXRlIGlzIHBhcnQgb2YgYSBjb250cm9sIGNvbnRhaW5lclxuICAgKi9cbiAgQElucHV0KClcbiAgY29udHJvbE5hbWU6IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGxhYmVsIG9mIHRoZSBmaWVsZCwgZXhwb3NlZCB0byB0ZW1wbGF0ZXMgc28gdGhleSBjYW4gdXNlIGl0IGluIHRoZSBlcnJvciBtZXNzYWdlLlxuICAgKi9cbiAgQElucHV0KClcbiAgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvciBkaXJlY3RpdmVzIChpLmUuIDxuZy10ZW1wbGF0ZSB2YWxFcnJvcj1cIi4uLlwiPikgY29udGFpbmVkIGluc2lkZSB0aGUgY29tcG9uZW50IGVsZW1lbnQuXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKFZhbGlkYXRpb25FcnJvckRpcmVjdGl2ZSlcbiAgZXJyb3JEaXJlY3RpdmVzITogUXVlcnlMaXN0PFZhbGlkYXRpb25FcnJvckRpcmVjdGl2ZT47XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBjb25maWcgdGhlIENvbmZpZyBzZXJ2aWNlIGluc3RhbmNlLCBkZWZpbmluZyB0aGUgYmVoYXZpb3Igb2YgdGhpcyBjb21wb25lbnRcbiAgICogQHBhcmFtIGRlZmF1bHRWYWxpZGF0aW9uRXJyb3JzIHRoZSBzZXJ2aWNlIGhvbGRpbmcgdGhlIGRlZmF1bHQgZXJyb3IgdGVtcGxhdGVzLCBvcHRpb25hbGx5XG4gICAqIGRlZmluZWQgYnkgdXNpbmcgdGhlIGRlZmF1bHQgdmFsaWRhdGlvbiBlcnJvcnMgZGlyZWN0aXZlXG4gICAqIEBwYXJhbSBjb250cm9sQ29udGFpbmVyIG9uZSBvZiB0aGUgNCBmb3JtIGdyb3VwIG9yIGZvcm0gYXJyYXkgZGlyZWN0aXZlcyB0aGF0IGNhbiBcIndyYXBcIiB0aGUgY29udHJvbC5cbiAgICogSXQncyBpbmplY3RlZCBzbyB0aGF0IHdlIGNhbiBrbm93IGlmIGl0IGV4aXN0cyBhbmQsIGlmIGl0IGRvZXMsIGlmIGl0cyBmb3JtIGRpcmVjdGl2ZSBoYXMgYmVlbiBzdWJtaXR0ZWQgb3Igbm90OlxuICAgKiB0aGUgY29uZmlnIHNlcnZpY2Ugc2hvdWxkRGlzcGxheUVycm9ycyBmdW5jdGlvbiBjYW4gY2hvb3NlIChhbmQgZG9lcyBieSBkZWZhdWx0KSB0byB1c2UgdGhhdCBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBWYWxkZW1vcnRDb25maWcsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGVmYXVsdFZhbGlkYXRpb25FcnJvcnM6IERlZmF1bHRWYWxpZGF0aW9uRXJyb3JzLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGNvbnRyb2xDb250YWluZXI6IENvbnRyb2xDb250YWluZXIpIHsgfVxuXG4gIGdldCBzaG91bGREaXNwbGF5RXJyb3JzKCkge1xuICAgIGNvbnN0IGN0cmwgPSB0aGlzLmFjdHVhbENvbnRyb2w7XG4gICAgaWYgKCFjdHJsIHx8ICFjdHJsLmludmFsaWQgfHwgIXRoaXMuaGFzRGlzcGxheWFibGVFcnJvcihjdHJsKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBmb3JtID0gdGhpcy5jb250cm9sQ29udGFpbmVyICYmICh0aGlzLmNvbnRyb2xDb250YWluZXIuZm9ybURpcmVjdGl2ZSBhcyBOZ0Zvcm0gfCBGb3JtR3JvdXBEaXJlY3RpdmUpO1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5zaG91bGREaXNwbGF5RXJyb3JzKGN0cmwsIGZvcm0pO1xuICB9XG5cbiAgZ2V0IGVycm9yc0NsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZXJyb3JzQ2xhc3NlcyB8fCAnJztcbiAgfVxuXG4gIGdldCBlcnJvckNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZXJyb3JDbGFzc2VzIHx8ICcnO1xuICB9XG5cbiAgZ2V0IGVycm9yRGlyZWN0aXZlc1RvRGlzcGxheSgpIHtcbiAgICBjb25zdCBtZXJnZWREaXJlY3RpdmVzOiBBcnJheTxWYWxpZGF0aW9uRXJyb3JEaXJlY3RpdmU+ID0gW107XG4gICAgY29uc3QgYWxyZWFkeU1ldFR5cGVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgY29uc3Qgc2hvdWxkQ29udGludWUgPSAoKSA9PiAodGhpcy5jb25maWcuZGlzcGxheU1vZGUgPT09IERpc3BsYXlNb2RlLkFMTCB8fCBtZXJnZWREaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCk7XG4gICAgY29uc3QgY3RybCA9IHRoaXMuYWN0dWFsQ29udHJvbDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGVmYXVsdFZhbGlkYXRpb25FcnJvcnMuZGlyZWN0aXZlcy5sZW5ndGggJiYgc2hvdWxkQ29udGludWUoKTsgaSsrKSB7XG4gICAgICBjb25zdCBkZWZhdWx0RGlyZWN0aXZlID0gdGhpcy5kZWZhdWx0VmFsaWRhdGlvbkVycm9ycy5kaXJlY3RpdmVzW2ldO1xuICAgICAgYWxyZWFkeU1ldFR5cGVzLmFkZChkZWZhdWx0RGlyZWN0aXZlLnR5cGUpO1xuICAgICAgaWYgKGN0cmwuaGFzRXJyb3IoZGVmYXVsdERpcmVjdGl2ZS50eXBlKSkge1xuICAgICAgICBjb25zdCBjdXN0b21EaXJlY3RpdmVPZlNhbWVUeXBlID0gdGhpcy5lcnJvckRpcmVjdGl2ZXMuZmluZChkaXIgPT4gZGlyLnR5cGUgPT09IGRlZmF1bHREaXJlY3RpdmUudHlwZSk7XG4gICAgICAgIG1lcmdlZERpcmVjdGl2ZXMucHVzaChjdXN0b21EaXJlY3RpdmVPZlNhbWVUeXBlIHx8IGRlZmF1bHREaXJlY3RpdmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbURpcmVjdGl2ZXMgPSB0aGlzLmVycm9yRGlyZWN0aXZlcy50b0FycmF5KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXN0b21EaXJlY3RpdmVzLmxlbmd0aCAmJiBzaG91bGRDb250aW51ZSgpOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1c3RvbURpcmVjdGl2ZSA9IGN1c3RvbURpcmVjdGl2ZXNbaV07XG4gICAgICBpZiAoY3RybC5oYXNFcnJvcihjdXN0b21EaXJlY3RpdmUudHlwZSkgJiYgIWFscmVhZHlNZXRUeXBlcy5oYXMoY3VzdG9tRGlyZWN0aXZlLnR5cGUpKSB7XG4gICAgICAgIG1lcmdlZERpcmVjdGl2ZXMucHVzaChjdXN0b21EaXJlY3RpdmUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VkRGlyZWN0aXZlcztcbiAgfVxuXG4gIGdldCBhY3R1YWxDb250cm9sKCk6IEFic3RyYWN0Q29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbCB8fFxuICAgICAgKCh0aGlzLmNvbnRyb2xOYW1lIHx8ICh0aGlzLmNvbnRyb2xOYW1lIGFzIGFueSA9PT0gMCkpICYmXG4gICAgICAgIHRoaXMuY29udHJvbENvbnRhaW5lciAmJlxuICAgICAgICB0aGlzLmNvbnRyb2xDb250YWluZXIuY29udHJvbCAmJlxuICAgICAgICAoKHRoaXMuY29udHJvbENvbnRhaW5lci5jb250cm9sIGFzIEZvcm1Hcm91cCB8IEZvcm1BcnJheSkuY29udHJvbHMgYXMgYW55KVt0aGlzLmNvbnRyb2xOYW1lXSk7XG4gIH1cblxuICBwcml2YXRlIGhhc0Rpc3BsYXlhYmxlRXJyb3IoY3RybDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgcmV0dXJuIGN0cmwuZXJyb3JzICYmIE9iamVjdC5rZXlzKGN0cmwuZXJyb3JzKS5zb21lKHR5cGUgPT5cbiAgICAgIHRoaXMuZGVmYXVsdFZhbGlkYXRpb25FcnJvcnMuZGlyZWN0aXZlcy5zb21lKGRpciA9PiBkaXIudHlwZSA9PT0gdHlwZSlcbiAgICAgIHx8IHRoaXMuZXJyb3JEaXJlY3RpdmVzLnNvbWUoZGlyID0+IGRpci50eXBlID09PSB0eXBlKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==