import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesImganesComponent } from './pages-imganes.component';

describe('PagesImganesComponent', () => {
  let component: PagesImganesComponent;
  let fixture: ComponentFixture<PagesImganesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesImganesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagesImganesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
