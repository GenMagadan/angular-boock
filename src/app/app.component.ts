import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project_boock';

  constructor(
    private matIconRegistry: MatIconRegistry,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.matIconRegistry.setDefaultFontSetClass('material-symbols-rounded')
  }

  public linkBoocks: number = 5;
  public linkAuthors: number = 6;
  public linkJournals: number = 7;
  public linkArticles: number = 8;

}
