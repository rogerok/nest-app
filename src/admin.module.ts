// import AdminJS from 'adminjs';
// import '@adminjs/express';
// // без этого `@adminjs/nestjs` по какой-то причине "не видит" `@aminjs/express`, необходимый ему для работы
// // мы не можем использовать `User` и `Post` из `@prisma/client`,
// // поскольку нам нужны модели, а не типы,
// // поэтому приходится делать так
// import { PrismaClient } from '@prisma/client';
// import { DMMFClass } from '@prisma/client/runtime/library';
// import { AdminModule } from '@adminjs/nestjs/types';
// import { Database, Resource } from '@adminjs/prisma/lib';
//
// const prisma = new PrismaClient();
// const dmmf = (prisma as any)._dmmf as DMMFClass;
//
// AdminJS.registerAdapter({ Database, Resource });
//
// export default AdminModule.createAdmin({
//   adminJsOptions: {
//     // путь к админке
//     rootPath: '/admin',
//     // в этом списке должны быть указаны все модели/таблицы БД,
//     // доступные для редактирования
//     resources: [
//       {
//         resource: { model: dmmf.modelMap.User, client: prisma },
//       },
//       {
//         resource: { model: dmmf.modelMap.Bookmark, client: prisma },
//       },
//     ],
//   },
// });
