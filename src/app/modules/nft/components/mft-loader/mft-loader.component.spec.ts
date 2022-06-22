import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MftLoaderComponent } from './mft-loader.component';

describe('MftLoaderComponent', () => {
  let component: MftLoaderComponent;
  let fixture: ComponentFixture<MftLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MftLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MftLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
