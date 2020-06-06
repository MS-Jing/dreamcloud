package com.lj.dreamcloud.controller;

import com.lj.dreamcloud.pojo.ImgOrder;
import com.lj.dreamcloud.service.impl.ImgOrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.List;

@Controller
@RequestMapping("admin")
public class ImgManageController {

    @Autowired
    private ImgOrderServiceImpl imgOrderService;

    @Value("${uploadfilepath}")
    private String imgfilePath;

    @GetMapping("/main")
    public String getImgInfo(Model model){
        List<ImgOrder> imgdisposed = imgOrderService.getImgdisposed();
        List<ImgOrder> imgUndisposed = imgOrderService.getImgUndisposed();

        model.addAttribute("imgdisposed",imgdisposed);
        model.addAttribute("imgUndisposed",imgUndisposed);
        return "/main";
    }

    @GetMapping("/download/{fliename}")
    public String downloads(@PathVariable("fliename") String fliename, HttpServletResponse response) throws IOException {
        System.out.println(fliename);
        //下载地址
        String path = imgfilePath+fliename;
        //设置response响应头
        response.reset();//设置页面不缓存，清空buffer
        response.setCharacterEncoding("UTF-8");//字符编码
        //设置响应头
        response.setHeader("Content-Disposition","attachment;fileName="+ URLEncoder.encode(fliename,"UTF-8"));

        File file = new File(path);
        //读取文件---输入流
        FileInputStream input = new FileInputStream(file);
        OutputStream out = response.getOutputStream();

        byte[] buff = new byte[1024];
        int index = 0;
        //执行写出操作
        while ((index = input.read(buff))!=-1){
            out.write(buff,0,index);
            out.flush();
        }

        out.close();
        input.close();

        return null;
    }
}
