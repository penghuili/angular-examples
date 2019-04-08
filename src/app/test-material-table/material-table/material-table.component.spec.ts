import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material';
import { queryDebugElements } from 'src/testing/helper-functions';

import { MaterialTableComponent } from './material-table.component';

describe('MaterialTableComponent', () => {
  let fixture: ComponentFixture<MaterialTableComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [ MaterialTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTableComponent);
    de = fixture.debugElement;
  });

  it('should has correct rows', () => {
    fixture.detectChanges();
    
    // query debug elements doesn't work
    const rowDebugElements = queryDebugElements(de, 'tbody tr');
    expect(rowDebugElements.length).toBe(0);

    // has to fallback to query DOM elements
    const rowHtmlElements = de.nativeElement.querySelectorAll('tbody tr');
    expect(rowHtmlElements.length).toBe(1);
  });
});
