package j.y.service.mapper;

import j.y.domain.*;
import j.y.service.dto.RegionDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Region and its DTO RegionDTO.
 */
@Mapper(componentModel = "spring", uses = {CountryMapper.class})
public interface RegionMapper extends EntityMapper <RegionDTO, Region> {


    default Region fromId(Long id) {
        if (id == null) {
            return null;
        }
        Region region = new Region();
        region.setId(id);
        return region;
    }
}
