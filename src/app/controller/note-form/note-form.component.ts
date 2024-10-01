import { Component } from '@angular/core';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.scss'
})
export class NoteFormComponent {

  note: Note = new Note();

  constructor(private noteService: NoteService, private router: Router) { }

  saveNote(): void {
    this.noteService.createNote(this.note).subscribe(() => {
      this.router.navigate(['/notes']);
    });
  }
}
