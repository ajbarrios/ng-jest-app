import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderComponent } from './app-header.component';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  @Component({
    selector: 'app-header-test',
    template: ` <app-header [title]="title">
      <nav start class="navigation">
        <a class="item" href="https://www.w3schools.com/html/" target="_blank"
          >HTML</a
        >
        <a class="item" href="https://www.w3schools.com/css/" target="_blank"
          >CSS</a
        >
        <a class="item" href="https://www.w3schools.com/js/" target="_blank"
          >JavaScript</a
        >
        <a class="item" href="https://www.w3schools.com/python/" target="_blank"
          >Python</a
        >
      </nav>
      <button end>Login</button>
    </app-header>`,
  })
  class AppHeaderTestComponent extends AppHeaderComponent {}

  @Component({
    selector: 'app-header-test-2',
    template: `<app-header title="just a title">
    </app-header>`,
  })
  class AppHeaderTestComponent2 extends AppHeaderComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppHeaderComponent,
        AppHeaderTestComponent,
        AppHeaderTestComponent2,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppHeaderTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render default title if not provided', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.title') as HTMLElement;
    expect(title.textContent).toMatchSnapshot();
  });

  it('should render a provided title', () => {
    const expectedTitle = 'just a title';
    component.title = expectedTitle;
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.title') as HTMLElement;
    expect(title).toMatchSnapshot();
  });

  it('should render slotted content in the start slot', () => {
    fixture.detectChanges();
    const startContent = fixture.nativeElement.querySelector(
      '[start]'
    ) as HTMLElement;
    expect(startContent).toMatchSnapshot();
  });

  it('should render slotted content in the end slot', () => {
    fixture.detectChanges();
    const endContent = fixture.nativeElement.querySelector(
      '[end]'
    ) as HTMLElement;
    expect(endContent).toMatchSnapshot();
  });

  it('should not render slotted content in the start slot', () => {
    fixture = TestBed.createComponent(AppHeaderTestComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const startContent = fixture.nativeElement.querySelector(
      '[start]'
    ) as HTMLElement;
    expect(startContent).toMatchSnapshot();
  });

  it('should not render slotted content in the end slot', () => {
    fixture = TestBed.createComponent(AppHeaderTestComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const startContent = fixture.nativeElement.querySelector(
      '[end]'
    ) as HTMLElement;
    expect(startContent).toMatchSnapshot();
  });
});
