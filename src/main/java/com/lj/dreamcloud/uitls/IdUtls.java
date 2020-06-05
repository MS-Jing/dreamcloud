package com.lj.dreamcloud.uitls;

import java.util.UUID;

public class IdUtls {

    public static String getIdby32(){
        return UUID.randomUUID().toString().replaceAll("-","");
    }

    public static String getIdby8(){
        return UUID.randomUUID().toString().split("-")[0];
    }
}
