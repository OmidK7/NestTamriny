import { Body, Controller, Delete, Post, Put ,  } from '@nestjs/common';
import { TranslationService } from './translation.service'
import { TranslationEntity , translationDeletDTO , translationUpdateDTO } from './entities/translation.entity'

@Controller('translation')
export class TranslationController {
    constructor(private readonly TranslationService : TranslationService){
        console.log('translationControler');
    }

    @Post()
    insertTranslation(@Body() translation:TranslationEntity): TranslationEntity{
        console.log(translation);
        return this.TranslationService.insert(translation)
    }

    @Put()
    updateTranslation(@Body() traslation:translationUpdateDTO){
        return this.TranslationService.updateTranslation(traslation)
    }

    @Delete()
    deletTranslation(@Body() traslation:translationDeletDTO){
        return this.TranslationService.deletTranslation(traslation)
    }

}
