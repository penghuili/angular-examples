import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// Query elements:
export function queryDebugElement(de: DebugElement, selector: string) {
  return de.query(By.css(selector));
}
export function queryDebugElements(de: DebugElement, selector: string) {
  return de.queryAll(By.css(selector));
}

// Check if there are elements:
export function hasElement(de: DebugElement, selector: string, failedMessage?: string) {
  failedMessage = failedMessage || '';
  expect(!!queryDebugElement(de, selector)).toBe(true, failedMessage);
}
export function hasNoElement(de: DebugElement, selector: string, failedMessage?: string) {
  failedMessage = failedMessage || '';
  expect(!!queryDebugElement(de, selector)).toBe(false, failedMessage);
}

// Check if there are content:
export function hasContent(el: DebugElement | string, content: string, failedMessage?: string) {
  failedMessage = failedMessage || '';
  if (typeof el === "string") {
    expect(el).toContain(content, failedMessage);
  } else {
    expect(el.nativeElement.textContent).toContain(content, failedMessage);
  }
}
export function hasNoContent(el: DebugElement | string, content: string, failedMessage?: string) {
  failedMessage = failedMessage || '';
  if (typeof el === "string") {
    expect(el).not.toContain(content, failedMessage);
  } else {
    expect(el.nativeElement.textContent).not.toContain(content, failedMessage);
  }
}

// Check if there are css classes:
export function hasCssClass(el: DebugElement, cssClass: string, failedMessage?: string) {
  failedMessage = failedMessage || '';
  expect(getCssClassArray(el).indexOf(cssClass) > -1).toBe(true, failedMessage);
}
export function hasNoCssClass(el: DebugElement, cssClass: string, failedMessage?: string) {
  failedMessage = failedMessage || '';
  expect(getCssClassArray(el).indexOf(cssClass) === -1).toBe(true, failedMessage);
}
export function getCssClassLength(de: DebugElement) {
  return getCssClassArray(de).length;
}
export function getCssClassArray(de: DebugElement) {
  return de.nativeElement.className.split(" ");
}
