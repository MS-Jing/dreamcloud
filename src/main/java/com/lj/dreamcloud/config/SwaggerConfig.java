package com.lj.dreamcloud.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.core.env.Profiles;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;

@Configuration
@EnableSwagger2 //开启swagger2
public class SwaggerConfig {

    //配置swagger的Docket的bean实例
    @Bean
    public Docket mydocket(Environment environment){

        //设置需要显示的环境
        Profiles profiles = Profiles.of("test","dev");
        //判断是否处在设置的环境中  在为true
        boolean flag = environment.acceptsProfiles(profiles);

        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .enable(flag)  //配置是否启用swagger 默认为true
                .groupName("罗静")    //设置分组
                .select()
                    //RequestHandlerSelectors 配置要扫描接口的方式
                        //basePackage基于包去扫描
                    .apis(RequestHandlerSelectors.basePackage("com.lj.dreamcloud"))
                    //PathSelectors 配置如何过滤路径
//                    .paths(PathSelectors.ant("/jing/comtroller/**"))
                .build();
    }


    //配置swagger信息 ==>ApiInfo
    public ApiInfo apiInfo(){

        //作者信息
        Contact contact = new Contact("罗静", "https://www.baidu.com/", "1126184155@qq.com");

        return new ApiInfo("my swagger API",
                "筑梦云项目",
                "1.0",
                "https://www.baidu.com/",
                contact,
                "Apache 2.0",
                "http://www.apache.org/licenses/LICENSE-2.0",
                new ArrayList()
        );
    }

}