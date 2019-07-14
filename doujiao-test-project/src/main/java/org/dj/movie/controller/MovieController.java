package org.dj.movie.controller;

import org.dj.movie.service.MovieService;
import org.doujiao.pojo.Movie;
import org.doujiao.vo.DJResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movie")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @RequestMapping("/query/{movie_id}")
    public DJResult queryMovie(@PathVariable("movie_id") String movieId) {
        try {
            return movieService.queryMovie(movieId);
        } catch (Exception e) {
            e.printStackTrace();
            return DJResult.build(630, e.getMessage(), null);
        }
    }

    @RequestMapping("/update/movie")
    public DJResult updateMovie(Movie movie) {
        try {
            return movieService.updateMovie(movie);
        } catch (Exception e) {
            e.printStackTrace();
            return DJResult.build(5000, e.getMessage(), null);
        }
    }
}
