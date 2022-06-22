import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftLoaderComponent } from './nft-loader.component';

describe('NftLoaderComponent', () => {
  let component: NftLoaderComponent;
  let fixture: ComponentFixture<NftLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
