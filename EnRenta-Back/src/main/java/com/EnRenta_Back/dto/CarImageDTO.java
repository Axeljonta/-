package com.EnRenta_Back.dto;

import lombok.*;

@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarImageDTO {

    private Long id;

    private String imageUrl;

    private Boolean mainImage;

}