package com.lj.dreamcloud.service;

import com.lj.dreamcloud.pojo.ImgOrder;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ImgOrderService {

    boolean addImgOrder(ImgOrder imgOrder);

    List<ImgOrder> getImgUndisposed();

    List<ImgOrder> getImgdisposed();
}
