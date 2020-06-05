package com.lj.dreamcloud.pojo;

import lombok.Data;

import java.util.Date;

@Data
public class ImgOrder {
    private Integer id;
    private String username;
    private String tel;
    private String qq;
    private String imgname;
    private Integer sta;
    private Date creattime;
}
