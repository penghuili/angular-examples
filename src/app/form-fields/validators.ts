import { FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function notAllowAB(fc: FormControl) {
  const value = fc.value || '';
  const matches = value.match(/[ab]/g);
  if (matches) {
    const result = {};
    matches.forEach((letter) => {
      if (!result[letter]) {
        result[letter] = true;
      }
    });
    const letters = Object.keys(result).join(', ');
    return letters ? { notAllowAB: { letters } } : null;
  }
  return null;
}

export function notSame(fieldName1: string, fieldName2: string): ValidatorFn {
  return (group: FormGroup): ValidationErrors | null => {
    const firstValue = group.get(fieldName1).value;
    const secondValue = group.get(fieldName2).value;
    const isSameContent = firstValue && secondValue && firstValue === secondValue;
    return isSameContent ? { [fieldName2 + 'IsSameAs' + upperCaseFirstLetter(fieldName1)]: true } : null;
  };
}

function upperCaseFirstLetter(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}
