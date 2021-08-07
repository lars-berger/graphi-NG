---
sidebar_position: 1
---

# Introduction

`graphy-ng` is a renderer for directed graphs in Angular. Under the hood, [Dagre](https://github.com/dagrejs/dagre) is used as a layout engine and the graph is rendered using SVGs.

**The library is compiled with Ivy and requires Angular 12+**

## Installation

Using npm:

```
$ npm i graphy-ng
```

Using yarn:

```
$ yarn add graphy-ng
```

## Basic usage

Import `GraphModule` into your feature module.

```ts title="hello.module.ts"
@NgModule({
  imports: [GraphModule],
})
export class HelloModule {}
```

Consume `lib-graph` in your component, passing `edges` and `nodes` as input.

```html title="hello.component.html"
<p>Here's my pretty graph:</p>
<lib-graph>
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
</lib-graph>
```

```ts title="hello.component.ts"
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  nodes: InputNode<{ name: string }>[] = [
    { id: '1', data: { name: 'Jeremy' } },
    { id: '2', data: { name: 'Robin' } },
  ];

  edges: InputEdge[] = [
    {
      sourceId: '1',
      targetId: '2',
    },
  ];
}
```

## Comparison vs. ngx-graph

**Pros:**

[//]: # 'TODO: Get exact % decrease.'

- Significantly more light-weight. About a `200kb`/`2mb` decrease in production/development bundle sizes respectively (about a **XX% overall decrease** in a fresh Angular app).
- Input nodes and edges are not modified by the library.
- Avoids requiring certain CSS classes to be hard-coded when using custom templates.
- Full TypeScript support when using custom templates.

**Cons:**

- Lacks more advanced and niche features — namely clusters, custom/force-directed layouts, and graph minimaps.
