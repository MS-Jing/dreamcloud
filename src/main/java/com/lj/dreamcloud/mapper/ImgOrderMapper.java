package com.lj.dreamcloud.mapper;

import com.lj.dreamcloud.pojo.ImgOrder;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository //这个注解别忘啦
public interface ImgOrderMapper {

    int addImgOrder(ImgOrder imgOrder);

    List<ImgOrder> getImgUndisposed();

    List<ImgOrder> getImgdisposed();
}
