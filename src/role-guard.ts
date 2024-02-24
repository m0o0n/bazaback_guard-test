
import { CanActivate, ExecutionContext, Injectable, Request } from '@nestjs/common';
// import { UserService } from './user/user.service';

@Injectable()
export class RoleGuard implements CanActivate {
    // constructor(private readonly userService: UserService){}
 
    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest()
        // const user = await this.userService.findOne(req.user.email)  
        const user = req.user
        console.log(req.user)
        if(user.role === 'admin'){
             return true
        }
        return false
    }
}