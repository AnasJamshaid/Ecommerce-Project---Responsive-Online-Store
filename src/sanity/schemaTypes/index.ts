import { type SchemaTypeDefinition } from 'sanity';
import chef from './chefs';
import food from './foods';
import blog from './blog';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef, blog],
};