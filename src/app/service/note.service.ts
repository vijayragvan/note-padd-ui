import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../model/note.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
    private apiUrl = 'http://localhost:8080/api/notes';

    constructor(private http: HttpClient) {}
  
    getNotes(): Observable<Note[]> {
      return this.http.get<Note[]>(this.apiUrl);
    }
  
    createNote(note: Note): Observable<Note> {
      return this.http.post<Note>(this.apiUrl, note);
    }
  
    deleteNoteById(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}