import { Context } from '@nestjs/graphql';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from './../users/models/user.model';
import { ExecutionContext, createParamDecorator } from "@nestjs/common"

export const getCurrentUserByContext = (context: ExecutionContext): User => {
    if (context.getType() === 'http') {
        return context.switchToHttp().getRequest().user;
    }
    const ctx =  GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
}

export const CurrentUser = createParamDecorator(
    (_data: unknown, context: ExecutionContext) => 
        getCurrentUserByContext(context)
);  