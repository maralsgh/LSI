import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make theme dark', () => {
    const example = {value: 'dark-blue'}
    component.switchTheme(example);
    expect(component.selectedTheme).toBe('dark-blue')
  });

  it('should make theme light', () => {
    const example = {value: 'light-blue'}
    component.switchTheme(example);
    expect(component.selectedTheme).toBe('light-blue')
  });

});
