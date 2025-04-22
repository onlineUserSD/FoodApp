package com.saad.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.saad.model.Food;
@Repository
public interface FoodRepository extends JpaRepository<Food, String>{

}
