import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';

const httpOptions={
  headers:new HttpHeaders({
  'Content-Type':'application/json'
})
};
@Injectable()
export class HeroService {

  private heroesUrl='api/heroes';


  constructor(private httpClient: HttpClient, private messageService: MessageService){};

  getHeroes():Observable<Hero[]>{
    this.messageService.add("Héros récupérés");
    return this.httpClient.get<Hero[]>(this.heroesUrl).pipe(catchError(this.handleError('getHeroes',[])));

  };

  getHero(id: number): Observable<Hero>{
    const url=`${this.heroesUrl}/${id}`;
    return this.httpClient.get<Hero>(url).pipe(tap(
      _=>this.log(`Héros récupéré id:${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`)
    ));


  }

  private log(message:string){
    this.messageService.add('HeroService:' + message);
  }

  private handleError<T>(operation='operation',result?:T){
    return(error:any): Observable<T>=>{
      //renvoi à la console, l'envoi à une infrastructure spécifique serait mieux
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      //renvoi d'un résultat bidon pour que l'appli continue à fonctionner...
      return of(result as T);
    }
  }

  updateHero(hero:Hero):Observable<any>{
    return this.httpClient.put(this.heroesUrl,hero,httpOptions).pipe(
      tap(_=>this.log(`héros mis à jour, id=${hero.id}`)),
    catchError(this.handleError<any>("updateHero")));
  }

}
