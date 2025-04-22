package com.saad.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saad.model.Food;
import com.saad.repository.FoodRepository;

@Service
public class FoodService {
@Autowired
private FoodRepository frepo;

 //ADD FOOD
 public void addData(Food f) {
	 frepo.save(f);
 }
 
 //GET FOOD
   public List<Food> getFood(){
	   return frepo.findAll();
   }
   //GET FOOD BY ID
   public Food getFoodByID(String fid) {
	   return frepo.findById(fid).orElse(null);
   }
   
   //DELETE FOOD 
   public void deleteFood(String fid) {
	   Food f=frepo.findById(fid).orElse(null);
	   if(f!=null) {
		   frepo.delete(f);
	   }
   }
   // UPDATE FOOD
   public Food updateData(String fid,Food food) {
	   Food f=frepo.findById(fid).orElse(null);
	   if(f!=null) {
		   f.setFname(food.getFname());
		   f.setPrice(food.getPrice());
		   frepo.save(f);
	   }
	   return f;
   }
}
