// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as messageStatusRef } from './message-status';
import { createComponentRef } from '../../../../utils/ref';

const messageEvent: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        example: 'MESSAGE_STATUS',
      },
      channel: {
        title: 'Message channel',
        type: 'string',
      },
      messageId: {
        title: 'Message ID',
        description: 'The ID of the message whose status is being delived',
        type: 'string',
      },
      contentIndex: {
        title: 'Index of content that is receiving the status update',
        type: 'number',
      },
      messageStatus: {
        $ref: messageStatusRef,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default messageEvent;
