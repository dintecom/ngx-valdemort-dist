import { ɵɵdefineInjectable, Injectable, Directive, TemplateRef, Input, ContentChildren, Component, Optional, NgModule } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Service used by the default validation errors directive to store the default error template references. This
 * service is injected in the validation errors component which displays the appropriate templates and provides their context.
 */
var DefaultValidationErrors = /** @class */ (function () {
    function DefaultValidationErrors() {
        this.directives = [];
    }
    DefaultValidationErrors.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DefaultValidationErrors.ngInjectableDef = ɵɵdefineInjectable({ factory: function DefaultValidationErrors_Factory() { return new DefaultValidationErrors(); }, token: DefaultValidationErrors, providedIn: "root" });
    return DefaultValidationErrors;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var DisplayMode = {
    ALL: 0, ONE: 1,
};
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
    /** @nocollapse */ ValdemortConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function ValdemortConfig_Factory() { return new ValdemortConfig(); }, token: ValdemortConfig, providedIn: "root" });
    return ValdemortConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValdemortModule = /** @class */ (function () {
    function ValdemortModule() {
    }
    ValdemortModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        ValidationErrorsComponent,
                        ValidationErrorDirective,
                        DefaultValidationErrorsDirective
                    ],
                    exports: [
                        ValidationErrorsComponent,
                        ValidationErrorDirective,
                        DefaultValidationErrorsDirective
                    ]
                },] }
    ];
    return ValdemortModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DefaultValidationErrorsDirective, DisplayMode, ValdemortConfig, ValdemortModule, ValidationErrorDirective, ValidationErrorsComponent, DefaultValidationErrors as ɵa };
//# sourceMappingURL=ngx-valdemort.js.map
