import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './entities/role.entity';
import { RoleService } from './role.service';

@Module({
  providers: [RoleService],
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  exports: [RoleService]
})
export class RoleModule {}