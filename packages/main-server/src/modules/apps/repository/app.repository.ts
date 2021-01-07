import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { App } from '../entities/app.entity';
@EntityRepository(App)
export class AppRepository extends Repository<App> {}
