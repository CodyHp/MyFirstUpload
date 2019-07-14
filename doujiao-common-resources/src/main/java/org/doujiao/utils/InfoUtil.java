package org.doujiao.utils;

import com.mongodb.*;
import org.doujiao.pojo.Movie;
import org.doujiao.vo.DJResult;

/**
 * queryInfo:查询电影详情
 * insertInfo:插入电影详情
 * updateInfo：更新电影详情
 * removeInfo：删除电影
 */
public class InfoUtil {

    private static MongoClient mongoClient = new MongoClient(new MongoClientURI("mongodb://127.0.0.1:27017"));
    private static DB database = mongoClient.getDB("DoubanMovie");
    private static DBCollection collection = database.getCollection("Douban");

    public static DJResult queryInfo(String id) {
        try {
            Object object = collection.find(new BasicDBObject("id", id)).one();
            return DJResult.build(200, "ok", object);
        } catch (Exception e) {
            e.printStackTrace();
            return DJResult.build(2000, e.getMessage(), null);
        }
    }


    public static DJResult insertInfo(Movie movie) {
        try {
            collection.insert(MovieAdapter.toDBOBJECT(movie));
            return DJResult.build(200, "ok", movie.getMovieId());
        } catch (Exception e) {
            e.printStackTrace();
            return DJResult.build(1000, e.getMessage(), null);
        }
    }

    public static DJResult updateInfo(Movie movie) {
        try {
            WriteResult result = collection.update(new BasicDBObject("id", movie.getMovieId()), new BasicDBObject
                    ("$set", MovieAdapter.toDBOBJECT(movie)), true, true);
            return DJResult.build(200, "ok", result.toString());
        } catch (Exception e) {
            e.printStackTrace();
            return DJResult.build(3000, e.getMessage(), null);
        }
    }

    public static DJResult removeInfo(Movie movie) {
        try {
            collection.remove(new BasicDBObject("id", movie.getMovieId()));
            return DJResult.ok();
        } catch (Exception e) {
            e.printStackTrace();
            return DJResult.build(4000, e.getMessage(), null);
        }
    }
}

class MovieAdapter {
    public static final DBObject toDBOBJECT(Movie movie) {
        return new BasicDBObject("id", movie.getMovieId()).append("name", movie.getName())
                .append("director", movie.getDirector()).append("script", movie.getScript())
                .append("actor", movie.getActor()).append("grade", movie.getGrade())
                .append("date", movie.getDate()).append("count", movie.getCount())
                .append("commit", movie.getCommit()).append("reward", movie.getReward())
                .append("otherLink", movie.getOtherLink()).append("otherName", movie.getOtherName())
                .append("rewardParam", movie.getRewardParam()).append("size", movie.getSize())
                .append("star", movie.getStar()).append("tagLink", movie.getTagLinks())
                .append("tags", movie.getTags()).append("type", movie.getType())
                .append("winner", movie.getWinne()).append("webLink", movie.getWebLink())
                .append("string", movie.getString());
    }
}
