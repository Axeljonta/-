package com.EnRenta_Back.service;

import com.EnRenta_Back.dto.CarDTO;
import com.EnRenta_Back.entity.Car;

import java.util.List;
import java.util.Optional;

public interface ICarService {

    Car save(Car car);

    CarDTO findById(Long id);

    Optional<Car> findByCarName(String carName);

    Car update(Car car);

    void delete(Long id);

    List<Car> findAll();

    List<Car> findRandomCars();
}
