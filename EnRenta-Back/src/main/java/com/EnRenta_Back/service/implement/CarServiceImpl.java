package com.EnRenta_Back.service.implement;

import com.EnRenta_Back.dto.CarDTO;
import com.EnRenta_Back.dto.CarImageDTO;
import com.EnRenta_Back.entity.Car;
import com.EnRenta_Back.repository.ICarRepository;
import com.EnRenta_Back.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarServiceImpl implements ICarService {

    @Autowired
    private final ICarRepository carRepository;

    public CarServiceImpl(ICarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public CarDTO findById(Long id) {

        Car car = carRepository.findById(id).orElseThrow();

        return mapToDTO(car);
    }

    private CarDTO mapToDTO(Car car) {

        List<CarImageDTO> images = car.getCarImages()
                .stream()
                .map(image -> new CarImageDTO(
                        image.getId(),
                        image.getImageUrl(),
                        image.getMainImage()
                ))
                .toList();

        return new CarDTO(
                car.getId(),
                car.getCarName(),
                car.getCarDescription(),
                images
        );
    }

    @Override
    public Car save(Car car) {
        if (carRepository.findByCarName(car.getCarName()).isPresent()) {
            throw new RuntimeException("Auto ya exista");
        }
        return carRepository.save(car);
    }

    @Override
    public Optional<Car> findByCarName(String carName) {
        return Optional.empty();
    }

    @Override
    public Car update(Car car) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public List<Car> findAll() {
        return List.of();
    }

    @Override
    public List<Car> findRandomCars() {
        return carRepository.findRandomCars();
    }
}
