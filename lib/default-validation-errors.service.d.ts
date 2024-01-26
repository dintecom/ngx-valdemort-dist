import { ValidationErrorDirective } from './validation-error.directive';
/**
 * Service used by the default validation errors directive to store the default error template references. This
 * service is injected in the validation errors component which displays the appropriate templates and provides their context.
 */
export declare class DefaultValidationErrors {
    directives: Array<ValidationErrorDirective>;
}
