import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MyComponentTestComponent } from "./my-component-test/my-component-test.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive]
})
export class AppComponent {
  title = 'Ex-01';


}
