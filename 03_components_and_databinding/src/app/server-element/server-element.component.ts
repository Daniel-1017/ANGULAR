import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('%cngOnChanges called', 'color: green');
    // console.log(changes);
  }

  ngOnInit() {
    console.log('%cngOnInit called', 'color: red');
    console.log(this.header.nativeElement.textContent);
    console.log(
      'paragraph content: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log('%cngDoCheck is called', 'color: yellow');
  }

  ngAfterContentInit() {
    console.log('%cngAfterContentInit is called', 'color: orange');
  }

  ngAfterContentChecked() {
    console.log('%cngAfterContentChecked is called', 'color: lightblue');
  }

  ngAfterViewInit() {
    console.log('%cngAfterViewInit is called', 'color: cyan');
    console.log(this.header.nativeElement.textContent);
    console.log(
      'paragraph content: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterViewChecked() {
    console.log('%cngAfterViewChecked is called', 'color: purple');
  }

  ngOnDestroy() {
    console.log('%cngOnDestroy is called', 'color: lightgreen');
  }
}
