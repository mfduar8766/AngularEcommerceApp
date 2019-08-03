import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render.', () => {
    expect(component).toBeTruthy();
  });

  it('should call onInit.', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalledTimes(1);
  });

  it('should set the arrayOfImages once ngOnInit is called', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.arrayOfImages).not.toBe([]);
  });

  it('should display image tag.', () => {
    const imageTag = fixture.debugElement.query(By.css('.carousel-image'))
      .nativeElement;
    expect(imageTag).toBeDefined();
  });

  it('should call goToNextImage on click', () => {
    const event = new MouseEvent('click');
    const element = fixture.debugElement.query(By.css('.fa-chevron-right'))
      .nativeElement;
    element.dispatchEvent(event);
    fixture.detectChanges();
    spyOn(component, 'goToNextImage');
    component.goToNextImage(event);
    const nextImage = component.arrayOfImages[1];
    expect(component.goToNextImage).toHaveBeenCalledTimes(1);
    expect(component.currentIndex).toBe(1);
    expect(component.arrayOfImages[1]).toBe(nextImage);
  });

  it('should not go to previous image if the current image is index 0.', () => {
    const event = new MouseEvent('click');
    spyOn(event, 'stopImmediatePropagation');
    const element = fixture.debugElement.query(By.css('.fa-chevron-left'))
      .nativeElement;
    element.dispatchEvent(event);
    fixture.detectChanges();
    spyOn(component, 'goToPreviousImage');
    component.goToPreviousImage(event);
    const currentImage = component.arrayOfImages[0];
    expect(component.goToPreviousImage).toHaveBeenCalledTimes(1);
    expect(event.stopImmediatePropagation).toHaveBeenCalled();
    expect(component.currentIndex).toBe(0);
    expect(component.arrayOfImages[0]).toBe(currentImage);
  });
});
