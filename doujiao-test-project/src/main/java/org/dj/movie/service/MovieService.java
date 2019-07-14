package org.dj.movie.service;

import org.doujiao.pojo.Movie;
import org.doujiao.utils.InfoUtil;
import org.doujiao.vo.DJResult;
import org.springframework.stereotype.Service;

@Service
public class MovieService {

    public DJResult queryMovie(String movieId) {
        return InfoUtil.queryInfo(movieId);
    }

    public DJResult updateMovie(Movie movie) {
        return InfoUtil.updateInfo(movie);
    }
}
