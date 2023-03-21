/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */

import { Controller } from "@nestjs/common";
import { Body, Get, Param, Post } from "@nestjs/common/decorators";

@Controller('products')
export class ProdutosController{
    @Get()
    obterTodos(): string {
      return ('Listar todos os produtos');
    }

    @Get(':id')
    obterUm(@Param() params): string {
      return (`Retornar os dados do produto ${params.id}`);
    }

    @Post() 
    criar(@Body() produto): string {
      console.log(produto);
      return ('Produto Criado');
    }

}