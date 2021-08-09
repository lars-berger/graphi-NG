[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/lars-berger/graphy-ng/LICENSE.md)
[![npm version](https://img.shields.io/npm/v/graphy-ng.svg?style=flat)](https://www.npmjs.com/package/graphy-ng)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/lars-berger/graphy-ng/pulls)
======

[![graphy-ng logo](logo.png)](https://lars-berger.github.io/graphy-ng)

`graphy-ng` is a library for rendering directed graphs in Angular. Under the hood, [Dagre](https://github.com/dagrejs/dagre) is used as a layout engine and the graph is drawn using SVGs.

**The library is compiled with Ivy and requires Angular 12+**

[📚 Documentation](https://lars-berger.github.io/graphy-ng)

## Interactive example

A simple interactive demo can be found on StackBlitz. It showcases how nodes and edges can be added dynamically and some features like making use of custom templates, re-rendering on create/update, and navigating the graph through panning or zooming.

[⚡ StackBlitz link](https://stackblitz.com/github/lars-berger/graphy-ng/tree/main/example)

![demo-recording](https://user-images.githubusercontent.com/34844898/128693533-a807ccfc-4d89-4e08-9f58-aca92b3cf0d8.gif)

## Installation

Using npm:

```
$ npm i graphy-ng && npm i -D @types/d3-shape
```

Using yarn:

```
$ yarn add graphy-ng && yarn add -D @types/d3-shape
```

## Basic usage

Import `GraphyModule` into your feature module.

`family-tree.module.ts`

```ts
@NgModule({
  imports: [GraphyModule],
  ...
})
export class FamilyTreeModule {}
```

Consume `graphy-ng` in your component, providing templates for how nodes and edges should be rendered.

`family-tree.component.html`

```html
<p>Here's my pretty graph:</p>
<graphy-ng>
  <ng-container *defsTemplate>
    <svg:marker
      id="arrow"
      viewBox="0 -5 10 10"
      refX="8"
      refY="0"
      markerWidth="4"
      markerHeight="4"
      orient="auto"
    >
      <svg:path d="M0,-5L10,0L0,5" />
    </svg:marker>
  </ng-container>

  <ng-container *nodeTemplate="let node; nodes: nodes">
    <svg:circle cx="25" cy="25" r="25" />
    <svg:text fill="blue" transform="translate(0 30)">{{ node.data.name }}</svg:text>
  </ng-container>

  <ng-container *edgeTemplate="let edge; edges: edges">
    <svg:path marker-end="url(#arrow)" [attr.d]="edge.pathDefinition"></svg:path>
  </ng-container>
</graphy-ng>
```

`family-tree.component.ts`

```ts
@Component({
  ...
})
export class FamilyTreeComponent {
  nodes: InputNode<{ name: string }>[] = [
    { id: '1', data: { name: 'Carl' } },
    { id: '2', data: { name: 'Robin' } },
    { id: '3', data: { name: 'Jeremy' } },
  ];

  edges: InputEdge[] = [
    { sourceId: '1', targetId: '3', },
    { sourceId: '2', targetId: '3', },
  ];
}
```

## Comparison vs. [ngx-graph](https://github.com/swimlane/ngx-graph)

**Pros:**

- Significantly more lightweight. Production bundle size of a fresh Angular app decreased from `490kb` to `255kb` by switching libraries (**36% overall decrease** in app size).
- Input nodes and edges are not modified by the library.
- Avoids requiring certain CSS classes to be hard-coded when using custom templates.
- Full TypeScript support when using custom templates.

**Cons:**

- Lacks more advanced and niche features — namely clusters, custom/force-directed layouts, and graph minimaps.

## License

`graphy-ng` is licensed under the terms of the [MIT License](https://github.com/lars-berger/graphy-ng/blob/main/LICENSE.md).
