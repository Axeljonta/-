package com.EnRenta_Back.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
@Table(name = "car_images")
public class CarImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private Long id;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "image_main")
    private Boolean mainImage;

    @ManyToOne
    @JoinColumn(name = "car_id")
    private Car car;

}
