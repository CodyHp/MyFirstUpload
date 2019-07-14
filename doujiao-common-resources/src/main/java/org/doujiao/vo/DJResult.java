package org.doujiao.vo;

public class DJResult {
    private Integer status;
    private String msg;
    private Object data;

    public DJResult(Integer status, String msg, Object data) {
        this.status = status;
        this.msg = msg;
        this.data = data;
    }

    public DJResult() {
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public static DJResult ok() {
        return new DJResult(200, "ok", null);
    }

    public static DJResult build(Integer status, String msg, Object data) {
        return new DJResult(status, msg, data);
    }
}
