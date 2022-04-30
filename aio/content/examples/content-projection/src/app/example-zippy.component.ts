import { Component, Input, ContentChild } from '@angular/core';

let nextId = 0;

@Component({
  selector: 'app-example-zippy',
  templateUrl: 'example-zippy.template.html',
})
export class ZippyComponent {
  contentId = `zippy-${nextId++}`;
  @Input() expanded = false;
  // #docregion contentchild
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
  // #enddocregion contentchild
}
