export type CoreNode =
  | ParagraphBlockNode
  | QuoteBlockNode
  | CodeBlockNode
  | HeadingBlockNode
  | ListBlockNode
  | ImageBlockNode;

export enum StrapiNodeTypes {
  Paragraph = 'paragraph',
  Quote = 'quote',
  Code = 'code',
  Heading = 'heading',
  List = 'list',
  ListItem = 'list-item',
  Text = 'text',
  Link = 'link',
  Image = 'image',
}
export type StrapiNode = CoreNode | InlineNode;

export interface ParagraphBlockNode {
  type: 'paragraph';
  children: InlineNode[];
}

export interface QuoteBlockNode {
  type: 'quote';
  children: InlineNode[];
}

export interface CodeBlockNode {
  type: 'code';
  children: InlineNode[];
}

export interface HeadingBlockNode {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: InlineNode[];
}

export interface ListBlockNode {
  type: 'list';
  format: 'ordered' | 'unordered';
  children: (ListItemInlineNode | ListBlockNode)[];
}

export interface ListItemInlineNode {
  type: 'list-item';
  children: InlineNode[];
}
export interface TextInlineNode {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}
export interface LinkInlineNode {
  type: 'link';
  url: string;
  children: TextInlineNode[];
}
export type InlineNode = TextInlineNode | LinkInlineNode | ListItemInlineNode;

export interface ImageBlockNode {
  type: 'image';
  image: {
    name: string;
    alternativeText?: string | null;
    url: string;
    caption?: string | null;
    width: number;
    height: number;
    formats?: Record<string, unknown>;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: unknown | null;
    createdAt: string;
    updatedAt: string;
  };
  children: InlineNode[];
}

export interface StrapiNodeComponent {
  node?: StrapiNode;
}
