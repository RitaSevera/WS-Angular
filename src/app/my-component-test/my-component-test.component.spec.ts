import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentTestComponent } from './my-component-test.component';

describe('MyComponentTestComponent', () => {
  let component: MyComponentTestComponent;
  let fixture: ComponentFixture<MyComponentTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyComponentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
