import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDownloadComponent } from './card-download.component';

describe('CardDownloadComponent', () => {
  let component: CardDownloadComponent;
  let fixture: ComponentFixture<CardDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDownloadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
