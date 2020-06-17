package com.lj.dreamcloud.controller;

import com.lj.dreamcloud.pojo.Admin;
import com.lj.dreamcloud.uitls.Encrypt;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("admin")
public class AdminController {

    @Value("${userpassword}")
    private String password;

    @PostMapping("/tologin")
    public String login(HttpServletRequest request, Model model, Admin admin){
        if("root".equals(admin.getUsername())&&password.equals( Encrypt.md5(admin.getPassword()) )){
            request.getSession().setAttribute("username",admin.getUsername());
            model.addAttribute("username",admin.getUsername());
            return "redirect:/admin/main";
        }else{
            model.addAttribute("msg","账号或者密码错误！");
            return "login";
        }
    }
}
