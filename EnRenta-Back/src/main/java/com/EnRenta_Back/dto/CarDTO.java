package com.EnRenta_Back.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarDTO {

    private Long id;

    private String carName;

    private String carDescription;

    private List<CarImageDTO> images;

    private String mainImageUrl;

}
