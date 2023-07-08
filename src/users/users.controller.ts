import { Patch , Body, Controller, Get , Headers, Post , Param, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Post()
    async creatUser( @Body() body){
        return body
    }
    @Get(':id')
    getUser( @Param('id') param, @Body() body ){
        return  {param , body}
    }
    @Patch(':id')
    updateuser(@Param('id') param){
        return param        
    }
}
