import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyAppRegionMySuffixModule } from './region/region-my-suffix.module';
import { MyAppCountryMySuffixModule } from './country/country-my-suffix.module';
import { MyAppLocationMySuffixModule } from './location/location-my-suffix.module';
import { MyAppDepartmentMySuffixModule } from './department/department-my-suffix.module';
import { MyAppTaskMySuffixModule } from './task/task-my-suffix.module';
import { MyAppEmployeeMySuffixModule } from './employee/employee-my-suffix.module';
import { MyAppJobMySuffixModule } from './job/job-my-suffix.module';
import { MyAppJobHistoryMySuffixModule } from './job-history/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        MyAppRegionMySuffixModule,
        MyAppCountryMySuffixModule,
        MyAppLocationMySuffixModule,
        MyAppDepartmentMySuffixModule,
        MyAppTaskMySuffixModule,
        MyAppEmployeeMySuffixModule,
        MyAppJobMySuffixModule,
        MyAppJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyAppEntityModule {}
