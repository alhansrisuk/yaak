import { styleTags, tags as t } from '@lezer/highlight';

export const highlight = styleTags({
  Protocol: t.comment,
  Port: t.attributeName,
  Host: t.variableName,
  Path: t.bool,
  Query: t.string,
});