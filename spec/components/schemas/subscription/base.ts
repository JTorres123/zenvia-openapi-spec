import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as webhookSchemaRef } from './webhook';

const subscriptionBase: SchemaObject = {
  type: 'object',
  properties: {
    id: {
      title: 'Subscription Id',
      type: 'string',
      readOnly: true,
    },
    eventType: {
      title: 'Event type to subscribe',
      type: 'string',
      enum: [
        'MESSAGE',
        'MESSAGE_STATUS',
      ],
    },
    webhook: {
      $ref: webhookSchemaRef,
    },
  },
  required: [
    'eventType',
    'webhook',
  ],
};

export const ref = createComponentRef(__filename);
export default subscriptionBase;
