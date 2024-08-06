import { Component, createComponent } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './Inicio/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TrayComponent } from './tray/tray.component';
import { VideoComponent } from "./video/video.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddComponent, CreateComponent, HomeComponent, ProfileComponent, TrayComponent, VideoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'supletorio';
}
