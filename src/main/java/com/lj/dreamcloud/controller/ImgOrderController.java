package com.lj.dreamcloud.controller;

import com.lj.dreamcloud.pojo.ImgOrder;
import com.lj.dreamcloud.pojo.UpLoidImg;
import com.lj.dreamcloud.service.impl.ImgOrderServiceImpl;
import com.lj.dreamcloud.uitls.IdUtls;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileOutputStream;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("img")
public class ImgOrderController {

    @Value("${uploadfilepath}")
    private String imgfilePath;

    @Autowired
    private ImgOrderServiceImpl imgOrderService;

    @PostMapping("/uploid")
    @CrossOrigin
    public Map upLoidImg(UpLoidImg upLoidImg){
        HashMap<String, Object> map = new HashMap<>();

        //new一个imgOrder对象用于将数据存入数据库
        ImgOrder imgOrder = new ImgOrder();
        imgOrder.setUsername(upLoidImg.getUsername());
        imgOrder.setTel(upLoidImg.getTel());
        imgOrder.setQq(upLoidImg.getQq());

        Base64.Decoder decoder = Base64.getDecoder();

        //去掉base编码的头部
        String file = upLoidImg.getFile().substring(23);
//        System.out.println(file);
        //解码
        byte[] imgByte = decoder.decode(file);

        File filePath = new File(imgfilePath);
        if (!filePath.exists()){
            filePath.mkdir();
        }
        String fileName = upLoidImg.getUsername()+"_"+upLoidImg.getTel()+"-"+ IdUtls.getIdby8() +".jpg";
        imgOrder.setImgname(fileName);
        try {
            FileOutputStream out = new FileOutputStream(filePath+"/"+fileName);
            out.write(imgByte);
            out.close();
            map.put("imgUpLoidStatus","ok");
            //写出文件成功之后再将数据写入数据库
            if (imgOrderService.addImgOrder(imgOrder)){
                map.put("infoStatus","ok");
            };
        }catch (Exception e){
            e.printStackTrace();
            map.put("status","error");
        }
        return map;
    }
}
