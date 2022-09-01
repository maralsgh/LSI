import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {DatePipe} from "@angular/common";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[NoopAnimationsModule],
      declarations: [ TableComponent ],
      providers: [HttpClient,HttpHandler, MessageService, DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if date valid format (YYY-MM-DD)', () => {
   expect(component.dateIsValid('2020/09/11')).toBeFalse();
  });


  it('should check if date valid format (YYY-MM-DD)', () => {
    expect(component.dateIsValid('hello')).toBeFalse();
  });

  it('should check if date valid format (YYY-MM-DD)', () => {
    expect(component.dateIsValid('2020-09-11')).toBeTruthy();
  });

  it('should close the card', () => {
    component.start();
    expect(component.preview).toBeFalse();
  });

  it('should make dateValue empty', () => {
    const example : { target: { value : string } } =  { target: {value : ''} }
    component.onInput(example);
    expect(component.dateValue).toBeUndefined();
  });



});
