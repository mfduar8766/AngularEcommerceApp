import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render.', () => {
    expect(component).toBeTruthy();
  });

  it('should have the thankYouMessage be null on init.', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.thankYouMessage).toBe(null);
  });

  it('should have the errorMessage be null on init.', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.errorMessage).toBe(null);
  });

  it('should display thankYouMessage once sign up button is clicked.', () => {
    const event = new MouseEvent('click');
    spyOn(component, 'signUp');
    component.signUp(event, 'bob');
    const element = fixture.debugElement.query(By.css('.signin-button'))
      .nativeElement;
    element.dispatchEvent(event);
    fixture.detectChanges();
    fixture.detectChanges();
    component.thankYouMessage = 'Thanks for signig up!';
    expect(component.signUp).toHaveBeenCalled();
    expect(component.thankYouMessage).toEqual('Thanks for signig up!');
  });

  it('should show errorMessage if input is blank', () => {
    const event = new MouseEvent('click');
    spyOn(component, 'signUp');
    component.signUp(event, '');
    component.errorMessage = 'Invalid email';
    fixture.detectChanges();
    const errorMessageDisplay = fixture.debugElement.query(
      By.css('.error-message-display')
    ).nativeElement;
    expect(component.signUp).toHaveBeenCalledTimes(1);
    expect(component.errorMessage).toEqual('Invalid email');
    expect(errorMessageDisplay).toBeTruthy();
  });
});
