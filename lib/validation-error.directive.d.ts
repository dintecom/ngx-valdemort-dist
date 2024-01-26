import { TemplateRef } from '@angular/core';
/**
 * Directive allowing to define the template for an error of a given type (using the `valError` input), using an ng-template.
 * It's used inside the body of the validation errors component, or inside the body of the default validation errors directive.
 * See the documentation of these two for example usages.
 */
export declare class ValidationErrorDirective {
    templateRef: TemplateRef<any>;
    /**
     * The type of the error that the content of the template must display.
     */
    type: string;
    constructor(templateRef: TemplateRef<any>);
}
