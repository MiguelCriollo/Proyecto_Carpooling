import { NgModule } from '@angular/core';
import { UserAuthService } from './services/user-auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UserRegisterService } from './services/user-register.service';

@NgModule({
    imports: [HttpClientModule],
    providers: [UserAuthService, UserRegisterService]
})
export class CoreModule {}
