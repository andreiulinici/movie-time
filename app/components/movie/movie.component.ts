import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
    moduleId: module.id,
    selector: 'movie',
    templateUrl: 'movie.component.html',
    providers: [MovieService],
    styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
    movie: Object;
    movieFileName: String;

    constructor(private router: ActivatedRoute, private _movieService: MovieService) {

    }

    ngOnInit() {
        this.router.params.subscribe((params) => {
            let id = params['id'];
            this._movieService.getMovie(id).subscribe(movie => {
                console.log(movie);
                this.movie = movie;

                this.movieFileName = movie.title.replace(/ +/g, "");    // replace whitespace
                this.movieFileName = this.movieFileName.replace(/-+/g, ""); // replace whitespace
                this.movieFileName = this.movieFileName.replace(/:+/g, ""); // replace colon
            })
        })
    }
}
