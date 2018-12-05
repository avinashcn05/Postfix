import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PostFixCalculatorComponent } from './post-fix-calculator.component';
import { ResultComponentComponent } from '../result-component/result-component.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PostFixCalculatorComponent', () => {
  let component: PostFixCalculatorComponent;
  let fixture: ComponentFixture<PostFixCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFixCalculatorComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFixCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    
  });

  it('should check for valid expression', () => {
    expect(component.checkValidExpression).toBeDefined();
    let result = component.checkValidExpression("1 2 +");
    expect(result).toBeUndefined();
    
  });

  it('should be able to generate stack of operators and operands', () => {
    expect(component).toBeTruthy();
    
  });
  
});
 