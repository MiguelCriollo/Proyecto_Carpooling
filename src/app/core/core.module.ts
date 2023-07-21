import { NgModule } from '@angular/core';
import { UserAuthService } from './services/user-auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [HttpClientModule],
    providers: [UserAuthService]
})
export class CoreModule {}
