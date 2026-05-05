package com.EnRenta_Back.repository;

import com.EnRenta_Back.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ICarRepository extends JpaRepository<Car,Long> {

    Optional<Car> findByCarName(String carName);

}
