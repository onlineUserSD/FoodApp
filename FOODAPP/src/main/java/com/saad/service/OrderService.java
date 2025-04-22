package com.saad.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saad.model.Order;
import com.saad.repository.OrderRepository;

@Service
public class OrderService {
@Autowired
private OrderRepository orepo;

public void addData(Order or) {
	orepo.save(or);
}
public List billing() {
	return orepo.billing();
}
}
