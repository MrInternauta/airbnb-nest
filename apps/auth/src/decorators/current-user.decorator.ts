import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserSchemaDocument } from '../users/models/users.schema';

const getCurrentUserByContext = (
  context: ExecutionContext,
): UserSchemaDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (__data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
