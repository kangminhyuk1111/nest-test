import { Module } from '@nestjs/common';
import { InfraService } from './service/infra.service';

@Module({
  providers: [InfraService],
  exports: [InfraService],
})
export class InfraModule {}
