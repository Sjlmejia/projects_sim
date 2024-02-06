import { ComponentFixture, TestBed } from '@angular/core/testing';

import  ItemsFirebaseComponent  from './items-firebase.component';

describe('ItemsFirebaseComponent', () => {
  let component: ItemsFirebaseComponent;
  let fixture: ComponentFixture<ItemsFirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsFirebaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
