import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from 'src/roles.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  
  async canActivate(context: ExecutionContext){
    const roles = this.reflector.get(Roles, context.getHandler());
    const req = context.switchToHttp().getRequest();
    const user = req.user;
    if (!roles) {
      return true;
    }
    if(roles === user.role) return true
    return false
  }
}
