import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing requirement 3
  it('clicking the color button should change the colorToggle boolean', () => {
    expect(component.colorToggle).toBe(false);

    let button = fixture.debugElement.nativeElement.querySelector('.colorToggle');
    button.click();

    expect(component.colorToggle).toBe(true);
  });

  it('if the colorToggle button is clicked once the blue text is shown', () => {
    let redText = fixture.debugElement.nativeElement.querySelector('#red');
    expect(redText).toBeTruthy();

    let button = fixture.debugElement.nativeElement.querySelector('.colorToggle');
    button.click();
    fixture.detectChanges(); // trigger ngOnInit here

    let blueText = fixture.debugElement.nativeElement.querySelector('#blue');
    expect(blueText).toBeTruthy();

  });

  // testing requirement 4
  it('the printed colors match those in the otherColors list', () => {
    const compiled = fixture.debugElement.nativeElement;
    for(var i = 0; i < component.otherColors.length; i++) {
      expect(compiled.querySelector('#color' + i).textContent).toContain(component.otherColors[i]);
    }
  });

  // testing requirement 5
  it('the correct length of the otherColors list is shown in the interpolationText', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.interpolationText').textContent).toContain(component.otherColors.length);
  });

  // testing requirement 6
  it('clicking the addColor button calls the addColor method', () => {
    spyOn(component, 'addColor');
    fixture.detectChanges(); // trigger ngOnInit here

    let button = fixture.debugElement.nativeElement.querySelector('.addColor');
    button.click();

    expect(component.addColor).toHaveBeenCalled();
  });

  it('the input value is added to the otherColors list on clicking the addColor button', () => {
    let newColor = "yellow";
    let input = fixture.debugElement.nativeElement.querySelector('input');
    input.value = newColor;

    let button = fixture.debugElement.nativeElement.querySelector('.addColor');
    button.click();

    expect(component.otherColors[4]).toBe(newColor);
  });

});
