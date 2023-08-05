import { Component } from '@angular/core';
import { PageComponentModule } from '../../page-component/page-component.module';
import { BodyTemplateModule } from '../../body-template/body-template.module';
import { FormTemplateModule } from '../../form-template/form-template.module';

@Component({
  standalone: true,
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styleUrls: ['./usertype.component.css'],
  imports: [PageComponentModule, BodyTemplateModule, FormTemplateModule],
})
export class UsertypeComponent {}
