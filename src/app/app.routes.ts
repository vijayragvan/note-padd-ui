import { RouterModule, Routes } from '@angular/router';
import { NoteFormComponent } from './controller/note-form/note-form.component';
import { NgModule } from '@angular/core';
import { NoteListComponent } from './controller/note-list/note-list.component';

export const routes: Routes = [
    { path: 'notes', component: NoteListComponent },
    { path: 'create-note', component: NoteFormComponent },
    { path: '', redirectTo: '/notes', pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }