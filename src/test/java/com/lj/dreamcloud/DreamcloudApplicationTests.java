package com.lj.dreamcloud;

import com.lj.dreamcloud.mapper.ImgOrderMapper;
import com.lj.dreamcloud.pojo.ImgOrder;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DreamcloudApplicationTests {

    @Value("${uploadfilepath}")
    private String filePath;

    @Autowired
    private ImgOrderMapper imgOrderMapper;
    @Test
    void contextLoads() {
        System.out.println(imgOrderMapper.getImgUndisposed());
    }

}
