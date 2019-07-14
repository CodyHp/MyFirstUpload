package org.doujiao.pojo;

import java.util.List;

public class Movie {
    private String movieId;
    private List<String> actor;
    private List<String> commit;
    private List<String> count;
    private List<String> date;
    private List<String> director;
    private List<String> grade;
    private List<String> name;
    private List<String> otherLink;
    private List<String> otherName;
    private List<String> reward;
    private List<String> rewardParam;
    private List<String> script;
    private List<String> size;
    private List<String> star;
    private List<String> string;
    private List<String> tagLinks;
    private List<String> tags;
    private List<String> type;
    private List<String> webLink;
    private List<String> winne;

    public String getMovieId() {
        return movieId;
    }

    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    public List<String> getActor() {
        return actor;
    }

    public void setActor(List<String> actor) {
        this.actor = actor;
    }

    public List<String> getCommit() {
        return commit;
    }

    public void setCommit(List<String> commit) {
        this.commit = commit;
    }

    public List<String> getCount() {
        return count;
    }

    public void setCount(List<String> count) {
        this.count = count;
    }

    public List<String> getDate() {
        return date;
    }

    public void setDate(List<String> date) {
        this.date = date;
    }

    public List<String> getDirector() {
        return director;
    }

    public void setDirector(List<String> director) {
        this.director = director;
    }

    public List<String> getGrade() {
        return grade;
    }

    public void setGrade(List<String> grade) {
        this.grade = grade;
    }

    public List<String> getName() {
        return name;
    }

    public void setName(List<String> name) {
        this.name = name;
    }

    public List<String> getOtherLink() {
        return otherLink;
    }

    public void setOtherLink(List<String> otherLink) {
        this.otherLink = otherLink;
    }

    public List<String> getOtherName() {
        return otherName;
    }

    public void setOtherName(List<String> otherName) {
        this.otherName = otherName;
    }

    public List<String> getReward() {
        return reward;
    }

    public void setReward(List<String> reward) {
        this.reward = reward;
    }

    public List<String> getRewardParam() {
        return rewardParam;
    }

    public void setRewardParam(List<String> rewardParam) {
        this.rewardParam = rewardParam;
    }

    public List<String> getScript() {
        return script;
    }

    public void setScript(List<String> script) {
        this.script = script;
    }

    public List<String> getSize() {
        return size;
    }

    public void setSize(List<String> size) {
        this.size = size;
    }

    public List<String> getStar() {
        return star;
    }

    public void setStar(List<String> star) {
        this.star = star;
    }

    public List<String> getString() {
        return string;
    }

    public void setString(List<String> string) {
        this.string = string;
    }

    public List<String> getTagLinks() {
        return tagLinks;
    }

    public void setTagLinks(List<String> tagLinks) {
        this.tagLinks = tagLinks;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public List<String> getType() {
        return type;
    }

    public void setType(List<String> type) {
        this.type = type;
    }

    public List<String> getWebLink() {
        return webLink;
    }

    public void setWebLink(List<String> webLink) {
        this.webLink = webLink;
    }

    public List<String> getWinne() {
        return winne;
    }

    public void setWinne(List<String> winne) {
        this.winne = winne;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "movieId=" + movieId +
                ", actor=" + actor +
                ", commit=" + commit +
                ", count=" + count +
                ", date=" + date +
                ", director=" + director +
                ", grade=" + grade +
                ", name=" + name +
                ", otherLink=" + otherLink +
                ", otherName=" + otherName +
                ", reward=" + reward +
                ", rewardParam=" + rewardParam +
                ", script=" + script +
                ", size=" + size +
                ", star=" + star +
                ", string=" + string +
                ", tagLinks=" + tagLinks +
                ", tags=" + tags +
                ", type=" + type +
                ", webLink=" + webLink +
                ", winne=" + winne +
                '}';
    }
}
