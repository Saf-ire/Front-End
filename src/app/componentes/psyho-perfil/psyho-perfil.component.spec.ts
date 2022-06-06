import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsyhoPerfilComponent } from './psyho-perfil.component';

describe('PsyhoPerfilComponent', () => {
  let component: PsyhoPerfilComponent;
  let fixture: ComponentFixture<PsyhoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsyhoPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsyhoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
