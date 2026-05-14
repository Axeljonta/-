package com.EnRenta_Back.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
@Table(name = "car_images")
public class CarImages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private Long id;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "image_main")
    private Boolean mainImage;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "car_id")
    private Car car;

}
