import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { generateTodos } from 'src/testing/generators/todo.generator';
import { hasContent, queryDebugElements } from 'src/testing/helper-functions';
import { testcheck } from 'src/testing/testcheck';

import { PropertyBasedComponent } from './property-based.component';

describe('PropertyBasedComponent', () => {
  let component: PropertyBasedComponent;
  let fixture: ComponentFixture<PropertyBasedComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBasedComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  testcheck.it(
    'should show todo',
    [
      generateTodos(5),
    ],
    (todos) => {
      fixture.detectChanges();
      component.todos = todos;
      fixture.detectChanges();

      queryDebugElements(de, '.mst-todo-item').forEach((el, index) => {
        hasContent(el, todos[index].title);
      });
    }
  );
});
