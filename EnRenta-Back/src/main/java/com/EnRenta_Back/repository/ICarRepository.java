package com.EnRenta_Back.repository;

import com.EnRenta_Back.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICarRepository extends JpaRepository<Car,Integer> {
}
