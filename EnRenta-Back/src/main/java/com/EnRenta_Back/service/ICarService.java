package com.EnRenta_Back.service;

import com.EnRenta_Back.dto.CarDTO;
import com.EnRenta_Back.entity.Car;

import java.util.List;
import java.util.Optional;

public interface ICarService {

    CarDTO findById(Long id);

    Optional<CarDTO> findByCarName(String carName);

    List<CarDTO> findAll();

    List<CarDTO> findRandomCars();

    CarDTO save(CarDTO carDTO);

    CarDTO update(CarDTO carDTO);

    void delete(Long id);


}
