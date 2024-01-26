import { QueryList } from '@angular/core';
import { AbstractControl, ControlContainer } from '@angular/forms';
import { ValdemortConfig } from './valdemort-config.service';
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
export declare class ValidationErrorsComponent {
    private config;
    private defaultValidationErrors;
    private controlContainer;
    /**
     * The FormControl, FormGroup or FormArray containing the validation errors.
     * If set, the controlName input is ignored
     */
    control: AbstractControl;
    /**
     * The name (or the index, in case it's contained in a FormArray) of the FormControl, FormGroup or FormArray containing the validation
     * errors.
     * Ignored if the control input is set, and only usable if the control to validate is part of a control container
     */
    controlName: string | number;
    /**
     * The label of the field, exposed to templates so they can use it in the error message.
     */
    label: string;
    /**
     * The list of validation error directives (i.e. <ng-template valError="...">) contained inside the component element.
     */
    errorDirectives: QueryList<ValidationErrorDirective>;
    /**
     * @param config the Config service instance, defining the behavior of this component
     * @param defaultValidationErrors the service holding the default error templates, optionally
     * defined by using the default validation errors directive
     * @param controlContainer one of the 4 form group or form array directives that can "wrap" the control.
     * It's injected so that we can know if it exists and, if it does, if its form directive has been submitted or not:
     * the config service shouldDisplayErrors function can choose (and does by default) to use that information.
     */
    constructor(config: ValdemortConfig, defaultValidationErrors: DefaultValidationErrors, controlContainer: ControlContainer);
    readonly shouldDisplayErrors: boolean;
    readonly errorsClasses: string;
    readonly errorClasses: string;
    readonly errorDirectivesToDisplay: ValidationErrorDirective[];
    readonly actualControl: AbstractControl;
    private hasDisplayableError;
}
