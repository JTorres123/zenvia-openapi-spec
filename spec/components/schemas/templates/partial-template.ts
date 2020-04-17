// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as localeSchemaRef } from './template-locale';
import { ref as categorySchemaRef } from './template-category';
import { ref as componentsSchemaRef } from './template-components';
import { ref as notificationEmailSchemaRef } from './template-notification-email';

const partial: SchemaObject = {
  title: 'Template Object',
  description: 'This is a Template object model.',
  type: 'object',
  properties: {
    locale: {
      $ref: localeSchemaRef,
    },
    category: {
      $ref: categorySchemaRef,
    },
    components: {
      $ref: componentsSchemaRef,
    },
    notificationEmail: {
      $ref: notificationEmailSchemaRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default partial;
