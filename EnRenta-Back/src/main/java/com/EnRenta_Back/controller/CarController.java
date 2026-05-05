package com.EnRenta_Back.controller;

import com.EnRenta_Back.entity.Car;
import com.EnRenta_Back.exception.ResourceNotFoundException;
import com.EnRenta_Back.repository.ICarRepository;
import com.EnRenta_Back.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cars")
@CrossOrigin(origins = "*")
public class CarController {

    final private ICarService carService;

    @Autowired
    public CarController(ICarService carService) {
        this.carService = carService;
    }

    //Endpoint GET por id
    @GetMapping("/{id}")
    public ResponseEntity<Car> findById(@PathVariable Long id) {
        Optional<Car> car = carService.findById(id);
        //IF lo encuantra devuelve el get ELSE devuelve notFound
        return car.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //Endpoint GET all
    @GetMapping
    public ResponseEntity<List<Car>> findAll() {
        return ResponseEntity.ok(carService.findAll());
    }

    //Endpoint GET name
    @GetMapping(params = "carName")
    public ResponseEntity<Car> findByCarName(@RequestParam String carName) {
        Optional<Car> car = carService.findByCarName(carName);
        return car.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //Endpoint POST
    @PostMapping
    public ResponseEntity<Car> save(@RequestBody Car car) {
        Car saved = carService.save(car);
        return ResponseEntity.status(201).body(saved);
    }

    //Endpoint PUT
    @PutMapping("/{id}")
    public ResponseEntity<Car> update(@RequestBody Car car, @PathVariable Long id) {
        car.setId(id);
        Car updatedCar = carService.update(car);

        return ResponseEntity.ok(updatedCar);
    }

    //Endpoint DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        carService.delete(id);
        return ResponseEntity.noContent().build();
    }



}
