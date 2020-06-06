package com.lj.dreamcloud.service.impl;

import com.lj.dreamcloud.mapper.ImgOrderMapper;
import com.lj.dreamcloud.pojo.ImgOrder;
import com.lj.dreamcloud.service.ImgOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ImgOrderServiceImpl implements ImgOrderService {

    @Autowired
    private ImgOrderMapper imgOrderMapper;

    @Override
    @Transactional
    public boolean addImgOrder(ImgOrder imgOrder) {
        if (imgOrderMapper.addImgOrder(imgOrder)==1){
            return true;
        };
        return false;
    }

    @Override
    public List<ImgOrder> getImgUndisposed() {
        return imgOrderMapper.getImgUndisposed();
    }

    @Override
    public List<ImgOrder> getImgdisposed() {
        return imgOrderMapper.getImgdisposed();
    }
}
