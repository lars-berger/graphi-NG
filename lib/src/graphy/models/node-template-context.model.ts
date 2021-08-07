import { TransformedNode } from './transformed-node.model';

export type NodeContext<T> = Pick<TransformedNode<T>, 'id' | 'data'>;

/** The context object passed to node templates. */
export interface NodeTemplateContext<T> {
  $implicit: NodeContext<T>;
}
