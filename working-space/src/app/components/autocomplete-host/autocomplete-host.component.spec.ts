import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteHostComponent } from './autocomplete-host.component';

describe('AutocompleteHostComponent', () => {
  let component: AutocompleteHostComponent;
  let fixture: ComponentFixture<AutocompleteHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
