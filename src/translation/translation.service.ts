import { Injectable } from '@nestjs/common';
// import md5 from '@types/md5';
import * as md5 from 'md5';
import {
  translationDeletDTO,
  TranslationEntity,
  translationUpdateDTO,
} from './entities/translation.entity';

@Injectable()
export class TranslationService {

  constructor() {
    console.log('translationSrervis');
  }

  insert(translation: TranslationEntity) {
    translation.id = md5(translation.phrase);
    translation.createdAt = new Date();
    console.log(translation);
    return translation;
  }

  updateTranslation(translation: translationUpdateDTO) {
    return translation;
  }

  deletTranslation(translation: translationDeletDTO) {
    return translation;
  }
}
