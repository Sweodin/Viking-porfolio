import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';

export function isRichText(value: unknown): value is Document {
  return (
    typeof value === 'object' &&
    value !== null &&
    'nodeType' in value &&
    (value as any).nodeType === 'document' &&
    'content' in value &&
    Array.isArray((value as any).content)
  );
}
