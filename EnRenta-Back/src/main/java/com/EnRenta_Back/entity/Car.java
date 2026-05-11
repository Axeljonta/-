package com.EnRenta_Back.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Optional;


@Entity
@Getter
@Setter
@Table(name = "cars")
public class Car {

    //GETTERS Y SETTERS

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "car_id")
    private Long id;

    @Column(unique = true, name = "car_name")
    private String carName;

    @Column(name= "car_description" )
    private String carDescription;

    @OneToMany(mappedBy = "car",  cascade = CascadeType.ALL)
    private List<CarImages> carImages;

}


