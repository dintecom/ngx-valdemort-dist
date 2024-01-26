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
var ValidationErrorsComponent = /** @class */ (function () {
    /**
     * @param config the Config service instance, defining the behavior of this component
     * @param defaultValidationErrors the service holding the default error templates, optionally
     * defined by using the default validation errors directive
     * @param controlContainer one of the 4 form group or form array directives that can "wrap" the control.
     * It's injected so that we can know if it exists and, if it does, if its form directive has been submitted or not:
     * the config service shouldDisplayErrors function can choose (and does by default) to use that information.
     */
    function ValidationErrorsComponent(config, defaultValidationErrors, controlContainer) {
        this.config = config;
        this.defaultValidationErrors = defaultValidationErrors;
        this.controlContainer = controlContainer;
    }
    Object.defineProperty(ValidationErrorsComponent.prototype, "shouldDisplayErrors", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var ctrl = this.actualControl;
            if (!ctrl || !ctrl.invalid || !this.hasDisplayableError(ctrl)) {
                return false;
            }
            /** @type {?} */
            var form = this.controlContainer && ((/** @type {?} */ (this.controlContainer.formDirective)));
            return this.config.shouldDisplayErrors(ctrl, form);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationErrorsComponent.prototype, "errorsClasses", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.errorsClasses || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationErrorsComponent.prototype, "errorClasses", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.errorClasses || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationErrorsComponent.prototype, "errorDirectivesToDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var mergedDirectives = [];
            /** @type {?} */
            var alreadyMetTypes = new Set();
            /** @type {?} */
            var shouldContinue = (/**
             * @return {?}
             */
            function () { return (_this.config.displayMode === DisplayMode.ALL || mergedDirectives.length === 0); });
            /** @type {?} */
            var ctrl = this.actualControl;
            var _loop_1 = function (i) {
                /** @type {?} */
                var defaultDirective = this_1.defaultValidationErrors.directives[i];
                alreadyMetTypes.add(defaultDirective.type);
                if (ctrl.hasError(defaultDirective.type)) {
                    /** @type {?} */
                    var customDirectiveOfSameType = this_1.errorDirectives.find((/**
                     * @param {?} dir
                     * @return {?}
                     */
                    function (dir) { return dir.type === defaultDirective.type; }));
                    mergedDirectives.push(customDirectiveOfSameType || defaultDirective);
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.defaultValidationErrors.directives.length && shouldContinue(); i++) {
                _loop_1(i);
            }
            /** @type {?} */
            var customDirectives = this.errorDirectives.toArray();
            for (var i = 0; i < customDirectives.length && shouldContinue(); i++) {
                /** @type {?} */
                var customDirective = customDirectives[i];
                if (ctrl.hasError(customDirective.type) && !alreadyMetTypes.has(customDirective.type)) {
                    mergedDirectives.push(customDirective);
                }
            }
            return mergedDirectives;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationErrorsComponent.prototype, "actualControl", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control ||
                ((this.controlName || ((/** @type {?} */ (this.controlName)) === 0)) &&
                    this.controlContainer &&
                    this.controlContainer.control &&
                    ((/** @type {?} */ (((/** @type {?} */ (this.controlContainer.control))).controls)))[this.controlName]);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} ctrl
     * @return {?}
     */
    ValidationErrorsComponent.prototype.hasDisplayableError = /**
     * @private
     * @param {?} ctrl
     * @return {?}
     */
    function (ctrl) {
        var _this = this;
        return ctrl.errors && Object.keys(ctrl.errors).some((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            return _this.defaultValidationErrors.directives.some((/**
             * @param {?} dir
             * @return {?}
             */
            function (dir) { return dir.type === type; }))
                || _this.errorDirectives.some((/**
                 * @param {?} dir
                 * @return {?}
                 */
                function (dir) { return dir.type === type; }));
        }));
    };
    ValidationErrorsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'val-errors',
                    template: "<ng-container *ngIf=\"shouldDisplayErrors\">\n  <div [class]=\"errorClasses\" *ngFor=\"let errorDirective of errorDirectivesToDisplay\">\n    <ng-container *ngTemplateOutlet=\"errorDirective!.templateRef; context: {\n      $implicit: label,\n      error: actualControl.errors![errorDirective.type]\n    }\"></ng-container>\n  </div>\n</ng-container>\n",
                    host: {
                        '[class]': 'errorsClasses',
                        '[style.display]': "shouldDisplayErrors ? '' : 'none'"
                    }
                }] }
    ];
    /** @nocollapse */
    ValidationErrorsComponent.ctorParameters = function () { return [
        { type: ValdemortConfig },
        { type: DefaultValidationErrors },
        { type: ControlContainer, decorators: [{ type: Optional }] }
    ]; };
    ValidationErrorsComponent.propDecorators = {
        control: [{ type: Input }],
        controlName: [{ type: Input }],
        label: [{ type: Input }],
        errorDirectives: [{ type: ContentChildren, args: [ValidationErrorDirective,] }]
    };
    return ValidationErrorsComponent;
}());
export { ValidationErrorsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXZhbGRlbW9ydC8iLCJzb3VyY2VzIjpbImxpYi92YWxpZGF0aW9uLWVycm9ycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFvRCxNQUFNLGdCQUFnQixDQUFDO0FBQ3JILE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FeEU7SUFxQ0U7Ozs7Ozs7T0FPRztJQUNILG1DQUFvQixNQUF1QixFQUN2Qix1QkFBZ0QsRUFDcEMsZ0JBQWtDO1FBRjlDLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFdkUsc0JBQUksMERBQW1COzs7O1FBQXZCOztnQkFDUSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWE7WUFDL0IsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7O2dCQUNLLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FB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Q0FBQzs7O09BQUE7Ozs7OztJQUVPLHVEQUFtQjs7Ozs7SUFBM0IsVUFBNEIsSUFBcUI7UUFBakQsaUJBS0M7UUFKQyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsSUFBSTtZQUN0RCxPQUFBLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWpCLENBQWlCLEVBQUM7bUJBQ25FLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSTs7OztnQkFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFqQixDQUFpQixFQUFDO1FBRHRELENBQ3NELEVBQ3ZELENBQUM7SUFDSixDQUFDOztnQkF2R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QiwyV0FBaUQ7b0JBQ2pELElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsZUFBZTt3QkFDMUIsaUJBQWlCLEVBQUUsbUNBQW1DO3FCQUN2RDtpQkFDRjs7OztnQkE1RVEsZUFBZTtnQkFDZix1QkFBdUI7Z0JBRk4sZ0JBQWdCLHVCQXFIM0IsUUFBUTs7OzBCQWpDcEIsS0FBSzs4QkFRTCxLQUFLO3dCQU1MLEtBQUs7a0NBTUwsZUFBZSxTQUFDLHdCQUF3Qjs7SUFzRTNDLGdDQUFDO0NBQUEsQUF4R0QsSUF3R0M7U0FoR1kseUJBQXlCOzs7Ozs7O0lBTXBDLDRDQUN5Qjs7Ozs7OztJQU96QixnREFDNkI7Ozs7O0lBSzdCLDBDQUNjOzs7OztJQUtkLG9EQUNzRDs7Ozs7SUFVMUMsMkNBQStCOzs7OztJQUMvQiw0REFBd0Q7Ozs7O0lBQ3hELHFEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvciAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIElucHV0LCBPcHRpb25hbCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIENvbnRyb2xDb250YWluZXIsIEZvcm1BcnJheSwgRm9ybUdyb3VwLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFZhbGRlbW9ydENvbmZpZywgRGlzcGxheU1vZGUgfSBmcm9tICcuL3ZhbGRlbW9ydC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBEZWZhdWx0VmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJy4vZGVmYXVsdC12YWxpZGF0aW9uLWVycm9ycy5zZXJ2aWNlJztcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvckRpcmVjdGl2ZSB9IGZyb20gJy4vdmFsaWRhdGlvbi1lcnJvci5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIENvbXBvbmVudCBhbGxvd2luZyB0byBkaXNwbGF5IHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXMgYXNzb2NpYXRlZCB0byBhIGdpdmVuIGZvcm0gY29udHJvbCwgZm9ybSBncm91cCBvciBmb3JtIGFycmF5LlxuICogVGhlIGNvbnRyb2wgaXMgcHJvdmlkZWQgdXNpbmcgdGhlIGBjb250cm9sYCBpbnB1dCBvZiB0aGUgY29tcG9uZW50LiBJZiBpdCdzIHVzZWQgaW5zaWRlIGFuIGVuY2xvc2luZyBmb3JtIGdyb3VwIG9yXG4gKiBmb3JtIGFycmF5LCBpdCBjYW4gaW5zdGVhZCBiZSBwcm92aWRlZCB1c2luZyB0aGUgYGNvbnRyb2xOYW1lYCBpbnB1dCBvZiB0aGUgY29tcG9uZW50LlxuICpcbiAqIEV4YW1wbGUgdXNhZ2Ugd2hlcmUgdGhlIGNvbnRyb2wgaXRzZWxmIGlzIGJlaW5nIHBhc3NlZCBhcyBpbnB1dDpcbiAqIGBgYFxuICogICA8dmFsLWVycm9ycyBbY29udHJvbF09XCJmb3JtLmdldCgnYmlydGhEYXRlJylcIj5cbiAqICAgICA8bmctdGVtcGxhdGUgdmFsRXJyb3I9XCJyZXF1aXJlZFwiPlRoZSBiaXJ0aCBkYXRlIGlzIG1hbmRhdG9yeTwvbmctdGVtcGxhdGU+XG4gKiAgICAgPG5nLXRlbXBsYXRlIHZhbEVycm9yPVwibWF4XCIgbGV0LWVycm9yPVwiZXJyb3JcIj5UaGUgbWF4IHZhbHVlIGZvciB0aGUgYmlydGggZGF0ZSBpcyB7eyBlcnJvci5tYXggfCBudW1iZXIgfX08L25nLXRlbXBsYXRlPlxuICogICA8L3ZhbC1lcnJvcnM+XG4gKiBgYGBcbiAqXG4gKiBFeGFtcGxlIHVzYWdlIHdoZXJlIHRoZSBjb250cm9sIG5hbWUgaXMgYmVpbmcgcGFzc2VkIGFzIGlucHV0OlxuICogYGBgXG4gKiAgIDx2YWwtZXJyb3JzIGNvbnRyb2xOYW1lPVwiYmlydGhEYXRlXCI+XG4gKiAgICAgPG5nLXRlbXBsYXRlIHZhbEVycm9yPVwicmVxdWlyZWRcIj5UaGUgYmlydGggZGF0ZSBpcyBtYW5kYXRvcnk8L25nLXRlbXBsYXRlPlxuICogICAgIDxuZy10ZW1wbGF0ZSB2YWxFcnJvcj1cIm1heFwiIGxldC1lcnJvcj1cImVycm9yXCI+VGhlIG1heCB2YWx1ZSBmb3IgdGhlIGJpcnRoIGRhdGUgaXMge3sgZXJyb3IubWF4IHwgbnVtYmVyIH19PC9uZy10ZW1wbGF0ZT5cbiAqICAgPC92YWwtZXJyb3JzPlxuICogYGBgXG4gKlxuICogVGhpcyBjb21wb25lbnQsIGlmIHRoZSBjb250cm9sIGlzIGludmFsaWQsIGRpc3BsYXlzIGl0cyB2YWxpZGF0aW9uIGVycm9ycyB1c2luZyB0aGUgcHJvdmlkZWQgdGVtcGxhdGVzLlxuICogVGhlIHRlbXBsYXRlcywgYXMgc2hvd24gaW4gdGhlIGFib3ZlIGV4YW1wbGUsIGhhdmUgYWNjZXNzIHRvIHRoZSB2YWxpZGF0aW9uIGVycm9yIGl0c2VsZi5cbiAqXG4gKiBUaGUgbGFiZWwgb2YgdGhlIGNvbnRyb2wgY2FuIGFsc28gYmUgcHJvdmlkZWQgYXMgaW5wdXQsIGFuZCB0aGVuIHVzZWQgaW4gdGhlIHRlbXBsYXRlczpcbiAqIGBgYFxuICogICA8dmFsLWVycm9ycyBjb250cm9sTmFtZT1cImJpcnRoRGF0ZVwiIGxhYmVsPVwidGhlIGJpcnRoIGRhdGVcIj5cbiAqICAgICA8bmctdGVtcGxhdGUgdmFsRXJyb3I9XCJyZXF1aXJlZFwiIGxldC1sYWJlbD57eyBsYWJlbCB9fSBpcyBtYW5kYXRvcnk8L25nLXRlbXBsYXRlPlxuICogICAgIDxuZy10ZW1wbGF0ZSB2YWxFcnJvcj1cIm1heFwiIGxldC1lcnJvcj1cImVycm9yXCIgbGV0LWxhYmVsPlRoZSBtYXggdmFsdWUgZm9yIHt7IGxhYmVsIH19IGlzIHt7IGVycm9yLm1heCB8IG51bWJlciB9fTwvbmctdGVtcGxhdGU+XG4gKiAgIDwvdmFsLWVycm9ycz5cbiAqIGBgYFxuICpcbiAqIFRoZSBjb21wb25lbnTigJhzIGJlaGF2aW9yIGlzIGNvbmZpZ3VyZWQgZ2xvYmFsbHkgYnkgdGhlIENvbmZpZyBzZXJ2aWNlIChzZWUgaXRzIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgZGV0YWlscykuIEl0IGNhblxuICogLSBkaXNwbGF5IHRoZSBmaXJzdCBlcnJvciwgb3IgYWxsIHRoZSBlcnJvcnNcbiAqIC0gYWRkIENTUyBjbGFzc2VzIHRvIGl0cyBob3N0IGA8dmFsLWVycm9ycz5gIGVsZW1lbnRcbiAqIC0gYWRkIENTUyBjbGFzc2VzIHRvIGVhY2ggZXJyb3IgbWVzc2FnZSBlbGVtZW50IGJlaW5nIGRpc3BsYXllZFxuICogLSBjaG9vc2Ugd2hlbiB0byBkaXNwbGF5IHRoZSBlcnJvcnMgKGRpcnR5LCB0b3VjaGVkLCB0b3VjaGVkIGFuZCBzdWJtaXR0ZWQsIGV0Yy4pXG4gKlxuICogR2xvYmFsLCBkZWZhdWx0IHRlbXBsYXRlcyBjYW4gYmUgZGVmaW5lZCAoYW5kIHVzZWQgYnkgdGhpcyBjb21wb25lbnQpIHVzaW5nIHRoZSBkZWZhdWx0IHZhbGlkYXRpb24gZXJyb3JzIGRpcmVjdGl2ZVxuICogKHNlZSBpdHMgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlscykuIFNvLCBpZiB0aGUgZGVmYXVsdCBlcnJvciBtZXNzYWdlcyBhcmUgZGVmaW5lZCBhbmQgc3VmZmljaWVudCBmb3IgYSBnaXZlbiBjb250cm9sLCBhbGwgeW91XG4gKiBuZWVkIGlzXG4gKlxuICogYGBgXG4gKiA8dmFsLWVycm9ycyBjb250cm9sTmFtZT1cImJpcnRoRGF0ZVwiPjwvdmFsLWVycm9ycz5cbiAqIGBgYFxuICpcbiAqIG9yLCBpZiB0aGUgZGVmYXVsdCB0ZW1wbGF0ZXMgZXhwZWN0IGEgbGFiZWw6XG4gKlxuICogYGBgXG4gKiA8dmFsLWVycm9ycyBjb250cm9sTmFtZT1cImJpcnRoRGF0ZVwiIGxhYmVsPVwidGhlIGJpcnRoIGRhdGVcIj48L3ZhbC1lcnJvcnM+XG4gKiBgYGBcbiAqXG4gKiBJZiwgaG93ZXZlciwgeW91IHdhbnQgdG8gb3ZlcnJpZGUgb25lIG9yIHNldmVyYWwgZXJyb3IgbWVzc2FnZXMgYnkgY3VzdG9tIG9uZXMsIHlvdSBjYW4gZG8gc28gYnkgc2ltcGx5IGRlZmluaW5nIHRoZW0gaW5zaWRlIHRoZVxuICogY29tcG9uZW50OlxuICpcbiAqIGBgYFxuICogPHZhbC1lcnJvcnMgY29udHJvbE5hbWU9XCJiaXJ0aERhdGVcIiBsYWJlbD1cInRoZSBiaXJ0aCBkYXRlXCI+XG4gKiAgIDxuZy10ZW1wbGF0ZSB2YWxFcnJvcj1cIm1heFwiPllvdSdyZSB0b28geW91bmcsIHNvcnJ5PC9uZy10ZW1wbGF0ZT5cbiAqIDwvdmFsLWVycm9ycz5cbiAqIGBgYFxuICpcbiAqIElmIGFuIGVycm9yIGlzIHByZXNlbnQgb24gdGhlIGNvbnRyb2wsIGJ1dCBkb2Vzbid0IGhhdmUgYW55IHRlbXBsYXRlIG9yIGRlZmF1bHQgdGVtcGxhdGUgZGVmaW5lZCBmb3IgaXRzIHR5cGUsIHRoZW4gaXQncyBub3RcbiAqIGRpc3BsYXllZC4gSWYgdGhlIGNvbnRyb2wgaXMgdmFsaWQsIG9yIGlmIG5vbmUgb2YgdGhlIGVycm9ycyBvZiB0aGUgY29tcG9uZW50IGhhcyBhIG1hdGNoaW5nIHRlbXBsYXRlIG9yIGRlZmF1bHQgdGVtcGxhdGUsXG4gKiB0aGVuIHRoaXMgY29tcG9uZW50IGl0c2VsZiBpcyBoaWRkZW4uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZhbC1lcnJvcnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdmFsaWRhdGlvbi1lcnJvcnMuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzc10nOiAnZXJyb3JzQ2xhc3NlcycsXG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6IGBzaG91bGREaXNwbGF5RXJyb3JzID8gJycgOiAnbm9uZSdgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkVycm9yc0NvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIFRoZSBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIG9yIEZvcm1BcnJheSBjb250YWluaW5nIHRoZSB2YWxpZGF0aW9uIGVycm9ycy5cbiAgICogSWYgc2V0LCB0aGUgY29udHJvbE5hbWUgaW5wdXQgaXMgaWdub3JlZFxuICAgKi9cbiAgQElucHV0KClcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSAob3IgdGhlIGluZGV4LCBpbiBjYXNlIGl0J3MgY29udGFpbmVkIGluIGEgRm9ybUFycmF5KSBvZiB0aGUgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCBvciBGb3JtQXJyYXkgY29udGFpbmluZyB0aGUgdmFsaWRhdGlvblxuICAgKiBlcnJvcnMuXG4gICAqIElnbm9yZWQgaWYgdGhlIGNvbnRyb2wgaW5wdXQgaXMgc2V0LCBhbmQgb25seSB1c2FibGUgaWYgdGhlIGNvbnRyb2wgdG8gdmFsaWRhdGUgaXMgcGFydCBvZiBhIGNvbnRyb2wgY29udGFpbmVyXG4gICAqL1xuICBASW5wdXQoKVxuICBjb250cm9sTmFtZTogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgb2YgdGhlIGZpZWxkLCBleHBvc2VkIHRvIHRlbXBsYXRlcyBzbyB0aGV5IGNhbiB1c2UgaXQgaW4gdGhlIGVycm9yIG1lc3NhZ2UuXG4gICAqL1xuICBASW5wdXQoKVxuICBsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiB2YWxpZGF0aW9uIGVycm9yIGRpcmVjdGl2ZXMgKGkuZS4gPG5nLXRlbXBsYXRlIHZhbEVycm9yPVwiLi4uXCI+KSBjb250YWluZWQgaW5zaWRlIHRoZSBjb21wb25lbnQgZWxlbWVudC5cbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oVmFsaWRhdGlvbkVycm9yRGlyZWN0aXZlKVxuICBlcnJvckRpcmVjdGl2ZXMhOiBRdWVyeUxpc3Q8VmFsaWRhdGlvbkVycm9yRGlyZWN0aXZlPjtcblxuICAvKipcbiAgICogQHBhcmFtIGNvbmZpZyB0aGUgQ29uZmlnIHNlcnZpY2UgaW5zdGFuY2UsIGRlZmluaW5nIHRoZSBiZWhhdmlvciBvZiB0aGlzIGNvbXBvbmVudFxuICAgKiBAcGFyYW0gZGVmYXVsdFZhbGlkYXRpb25FcnJvcnMgdGhlIHNlcnZpY2UgaG9sZGluZyB0aGUgZGVmYXVsdCBlcnJvciB0ZW1wbGF0ZXMsIG9wdGlvbmFsbHlcbiAgICogZGVmaW5lZCBieSB1c2luZyB0aGUgZGVmYXVsdCB2YWxpZGF0aW9uIGVycm9ycyBkaXJlY3RpdmVcbiAgICogQHBhcmFtIGNvbnRyb2xDb250YWluZXIgb25lIG9mIHRoZSA0IGZvcm0gZ3JvdXAgb3IgZm9ybSBhcnJheSBkaXJlY3RpdmVzIHRoYXQgY2FuIFwid3JhcFwiIHRoZSBjb250cm9sLlxuICAgKiBJdCdzIGluamVjdGVkIHNvIHRoYXQgd2UgY2FuIGtub3cgaWYgaXQgZXhpc3RzIGFuZCwgaWYgaXQgZG9lcywgaWYgaXRzIGZvcm0gZGlyZWN0aXZlIGhhcyBiZWVuIHN1Ym1pdHRlZCBvciBub3Q6XG4gICAqIHRoZSBjb25maWcgc2VydmljZSBzaG91bGREaXNwbGF5RXJyb3JzIGZ1bmN0aW9uIGNhbiBjaG9vc2UgKGFuZCBkb2VzIGJ5IGRlZmF1bHQpIHRvIHVzZSB0aGF0IGluZm9ybWF0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IFZhbGRlbW9ydENvbmZpZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkZWZhdWx0VmFsaWRhdGlvbkVycm9yczogRGVmYXVsdFZhbGlkYXRpb25FcnJvcnMsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgY29udHJvbENvbnRhaW5lcjogQ29udHJvbENvbnRhaW5lcikgeyB9XG5cbiAgZ2V0IHNob3VsZERpc3BsYXlFcnJvcnMoKSB7XG4gICAgY29uc3QgY3RybCA9IHRoaXMuYWN0dWFsQ29udHJvbDtcbiAgICBpZiAoIWN0cmwgfHwgIWN0cmwuaW52YWxpZCB8fCAhdGhpcy5oYXNEaXNwbGF5YWJsZUVycm9yKGN0cmwpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGZvcm0gPSB0aGlzLmNvbnRyb2xDb250YWluZXIgJiYgKHRoaXMuY29udHJvbENvbnRhaW5lci5mb3JtRGlyZWN0aXZlIGFzIE5nRm9ybSB8IEZvcm1Hcm91cERpcmVjdGl2ZSk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnNob3VsZERpc3BsYXlFcnJvcnMoY3RybCwgZm9ybSk7XG4gIH1cblxuICBnZXQgZXJyb3JzQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lcnJvcnNDbGFzc2VzIHx8ICcnO1xuICB9XG5cbiAgZ2V0IGVycm9yQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lcnJvckNsYXNzZXMgfHwgJyc7XG4gIH1cblxuICBnZXQgZXJyb3JEaXJlY3RpdmVzVG9EaXNwbGF5KCkge1xuICAgIGNvbnN0IG1lcmdlZERpcmVjdGl2ZXM6IEFycmF5PFZhbGlkYXRpb25FcnJvckRpcmVjdGl2ZT4gPSBbXTtcbiAgICBjb25zdCBhbHJlYWR5TWV0VHlwZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBjb25zdCBzaG91bGRDb250aW51ZSA9ICgpID0+ICh0aGlzLmNvbmZpZy5kaXNwbGF5TW9kZSA9PT0gRGlzcGxheU1vZGUuQUxMIHx8IG1lcmdlZERpcmVjdGl2ZXMubGVuZ3RoID09PSAwKTtcbiAgICBjb25zdCBjdHJsID0gdGhpcy5hY3R1YWxDb250cm9sO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWZhdWx0VmFsaWRhdGlvbkVycm9ycy5kaXJlY3RpdmVzLmxlbmd0aCAmJiBzaG91bGRDb250aW51ZSgpOyBpKyspIHtcbiAgICAgIGNvbnN0IGRlZmF1bHREaXJlY3RpdmUgPSB0aGlzLmRlZmF1bHRWYWxpZGF0aW9uRXJyb3JzLmRpcmVjdGl2ZXNbaV07XG4gICAgICBhbHJlYWR5TWV0VHlwZXMuYWRkKGRlZmF1bHREaXJlY3RpdmUudHlwZSk7XG4gICAgICBpZiAoY3RybC5oYXNFcnJvcihkZWZhdWx0RGlyZWN0aXZlLnR5cGUpKSB7XG4gICAgICAgIGNvbnN0IGN1c3RvbURpcmVjdGl2ZU9mU2FtZVR5cGUgPSB0aGlzLmVycm9yRGlyZWN0aXZlcy5maW5kKGRpciA9PiBkaXIudHlwZSA9PT0gZGVmYXVsdERpcmVjdGl2ZS50eXBlKTtcbiAgICAgICAgbWVyZ2VkRGlyZWN0aXZlcy5wdXNoKGN1c3RvbURpcmVjdGl2ZU9mU2FtZVR5cGUgfHwgZGVmYXVsdERpcmVjdGl2ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tRGlyZWN0aXZlcyA9IHRoaXMuZXJyb3JEaXJlY3RpdmVzLnRvQXJyYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1c3RvbURpcmVjdGl2ZXMubGVuZ3RoICYmIHNob3VsZENvbnRpbnVlKCk7IGkrKykge1xuICAgICAgY29uc3QgY3VzdG9tRGlyZWN0aXZlID0gY3VzdG9tRGlyZWN0aXZlc1tpXTtcbiAgICAgIGlmIChjdHJsLmhhc0Vycm9yKGN1c3RvbURpcmVjdGl2ZS50eXBlKSAmJiAhYWxyZWFkeU1ldFR5cGVzLmhhcyhjdXN0b21EaXJlY3RpdmUudHlwZSkpIHtcbiAgICAgICAgbWVyZ2VkRGlyZWN0aXZlcy5wdXNoKGN1c3RvbURpcmVjdGl2ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXJnZWREaXJlY3RpdmVzO1xuICB9XG5cbiAgZ2V0IGFjdHVhbENvbnRyb2woKTogQWJzdHJhY3RDb250cm9sIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sIHx8XG4gICAgICAoKHRoaXMuY29udHJvbE5hbWUgfHwgKHRoaXMuY29udHJvbE5hbWUgYXMgYW55ID09PSAwKSkgJiZcbiAgICAgICAgdGhpcy5jb250cm9sQ29udGFpbmVyICYmXG4gICAgICAgIHRoaXMuY29udHJvbENvbnRhaW5lci5jb250cm9sICYmXG4gICAgICAgICgodGhpcy5jb250cm9sQ29udGFpbmVyLmNvbnRyb2wgYXMgRm9ybUdyb3VwIHwgRm9ybUFycmF5KS5jb250cm9scyBhcyBhbnkpW3RoaXMuY29udHJvbE5hbWVdKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzRGlzcGxheWFibGVFcnJvcihjdHJsOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICByZXR1cm4gY3RybC5lcnJvcnMgJiYgT2JqZWN0LmtleXMoY3RybC5lcnJvcnMpLnNvbWUodHlwZSA9PlxuICAgICAgdGhpcy5kZWZhdWx0VmFsaWRhdGlvbkVycm9ycy5kaXJlY3RpdmVzLnNvbWUoZGlyID0+IGRpci50eXBlID09PSB0eXBlKVxuICAgICAgfHwgdGhpcy5lcnJvckRpcmVjdGl2ZXMuc29tZShkaXIgPT4gZGlyLnR5cGUgPT09IHR5cGUpXG4gICAgKTtcbiAgfVxufVxuIl19