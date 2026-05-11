package com.EnRenta_Back.dto;

import com.EnRenta_Back.entity.CarImages;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarDTO {

    private Long id;

    private String carName;

    private String carDescription;

    private List<CarImageDTO> carImges;

}
