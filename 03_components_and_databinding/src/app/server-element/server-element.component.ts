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

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('%cngOnChanges called', 'color: green');
    // console.log(changes);
  }

  ngOnInit() {
    console.log('%cngOnInit called', 'color: red');
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
  }

  ngAfterViewChecked() {
    console.log('%cngAfterViewChecked is called', 'color: purple');
  }

  ngOnDestroy() {
    console.log('%cngOnDestroy is called', 'color: lightgreen');
  }
}
