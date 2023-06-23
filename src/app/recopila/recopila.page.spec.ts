import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecopilaPage } from './recopila.page';

describe('RecopilaPage', () => {
  let component: RecopilaPage;
  let fixture: ComponentFixture<RecopilaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecopilaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
