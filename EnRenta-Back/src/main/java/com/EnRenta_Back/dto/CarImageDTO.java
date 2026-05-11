package com.EnRenta_Back.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarImageDTO {

    private Long id;

    private String imageUrl;

    private Boolean mainImage;

}