import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as whatsappMessageRef } from '../../components/schemas/message/whatsapp';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
  description: 'Send a WhatsApp message',
  tags: ['WhatsApp'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: whatsappMessageRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created message',
      content: {
        'application/json': {
          schema: {
            $ref: whatsappMessageRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  },
};

const path: PathItemObject = {
  post,
};

export default path;
