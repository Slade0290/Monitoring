import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebterminalComponent } from './webterminal.component';

describe('WebterminalComponent', () => {
  let component: WebterminalComponent;
  let fixture: ComponentFixture<WebterminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebterminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebterminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
