import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  let elementRefMock: ElementRef;

  beforeEach(() => {
    elementRefMock = {
      nativeElement: document.createElement('div'),
    };
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });

  it('should highlight the background color to yellow', () => {
    const directive = new HighlightDirective(elementRefMock);
    expect(elementRefMock.nativeElement.style.backgroundColor).toBe('yellow');
  });
});
