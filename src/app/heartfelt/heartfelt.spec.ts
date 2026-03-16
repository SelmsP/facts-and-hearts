import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Heartfelt } from './heartfelt';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { CommonModule } from '@angular/common';

describe('HeartfeltComponent', () => {
  let component: Heartfelt;
  let fixture: ComponentFixture<Heartfelt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports: [Heartfelt, CommonModule, HttpClientTestingModule] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(Heartfelt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
