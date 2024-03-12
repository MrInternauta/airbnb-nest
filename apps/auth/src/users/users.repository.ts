import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository, UserSchemaDocument } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository extends AbstractRepository<UserSchemaDocument> {
  protected readonly logger = new Logger(UsersRepository.name);
  constructor(
    @InjectModel(UserSchemaDocument.name) userModel: Model<UserSchemaDocument>,
  ) {
    super(userModel);
  }
}
