import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:projeto/src/app/components/first-component/first-component.spec.ts
import { FirstComponentComponent } from './first-component.component';

describe('NewComponentComponent', () => {
  let component: FirstComponentComponent;
  let fixture: ComponentFixture<FirstComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponentComponent]
    });
    fixture = TestBed.createComponent(FirstComponentComponent);
=======
import { NewComponentComponent } from './new-component.component';

describe('NewComponentComponent', () => {
  let component: NewComponentComponent;
  let fixture: ComponentFixture<NewComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewComponentComponent]
    });
    fixture = TestBed.createComponent(NewComponentComponent);
>>>>>>> 9e27f6f0ee869a6663d65b53dfa4c7c470f9796f:projeto/src/app/components/new-component/new-component.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
