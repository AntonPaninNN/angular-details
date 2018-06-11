# AngularDetails

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Examples

## 1. Parent-child components binding. 
Allows to set data from parent component to child by marking any child component property with @Input() . For example:

```typescript
@Input() items: InputItem[];
```

allows to put the items from parent component:

```html
<complex-input [items]="items">
</complex-input>
```

## 2. EventEmitter example.
EventEmitter allows to fire child event on parent component. First of all need to declare the EventEmitter in the child component:

```javascript
@Output() changeNameEmitter = new EventEmitter<string>();
```

Next, declare the EventEmitter usage as a custom event (changeNameEmitter) in the parent component:

```html
<child-component (changeNameEmitter)="changeParentName($event)">
</child-component>
```

Next, implement some function called from child component event:

```javascript
changeParentName(newName: string) {
    this.parentName = newName;
  }
```

## 3. ViewChild example.
ViewChild allows to use child component as a variable inside a parent class. First, need to declare the child variable:

```javascript
@ViewChild("childComponent") child: ChildComponent;
```

Next, mark child tag with the declared child variable:

```html
<child #childComponent></child>
```

So now it's possible to call the child component variable from the parent component:

```javascript
this.child.name = "Barbara";
this.child.age = 33;
```

## 4. ng-template example.

ng-template allows to declare some template which will be inserted to some other component. So, the template is:

```html
<ng-template #parentTemplate>
  <div>Parent Button</div>
  <button (click)="changeParentLabel()">Change</button>
  <div>{{name}}</div>
</ng-template>
```

And than insert it to ng-container by #parentTemplate ID to ngTemplateOutlet:

```html
<div class="parent-section">
    <ng-container [ngTemplateOutlet]="template"></ng-container> 
  </div>
```
