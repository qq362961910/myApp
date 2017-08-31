package j.y.service.mapper;

import j.y.domain.*;
import j.y.service.dto.CountryDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Country and its DTO CountryDTO.
 */
@Mapper(componentModel = "spring", uses = {RegionMapper.class, UserMapper.class})
public interface CountryMapper extends EntityMapper <CountryDTO, Country> {

    @Mapping(source = "region.id", target = "regionId")
    @Mapping(source = "creator.id", target = "creatorId")
    CountryDTO toDto(Country country);

    @Mapping(source = "regionId", target = "region")
    @Mapping(source = "creatorId", target = "creator")
    Country toEntity(CountryDTO countryDTO);

    default Country fromId(Long id) {
        if (id == null) {
            return null;
        }
        Country country = new Country();
        country.setId(id);
        return country;
    }
}
