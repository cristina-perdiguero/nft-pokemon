import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftLayoutComponent } from './nft-layout.component';

describe('NftLayoutComponent', () => {
  let component: NftLayoutComponent;
  let fixture: ComponentFixture<NftLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
