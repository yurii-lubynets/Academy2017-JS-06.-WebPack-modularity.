### Academy 17: WebPack, modularity. JS - 06.2

Настроить webpack для мульти-модульного проекта использующего ES2015 modules таким образом: 
1. Узнать какой параметр объекта rule используется для создания pre/post loaderов.
2. Добавить в качестве preLoadera auto-prefixer для стилей.
3. Добавить в качестве preLoadera какой-либо hint-/linter для кода.
4. Добавить loader для картинок. 
5. Использовать в проекте как минимум одну загруженную картинку.
6. Написать стили при помощи sass (*.scss) и применить соответствующий loader. 
7. Писать код в соответствии со стандартом ES2015 и выше, применить babel loader. 
8. Добавить и настроить UglifyJSPlugin Включить minification Включить uglification Сделать так, чтобы все комментарии из проекта не попали в bundle (естественно код должен быть хоть с 1 комментарием).
9. Рекомендую использовать пример из лекции, переписанный под ES2015 modules, чтобы вы не тратили время на придумывание чего-то сложного. Стили оценивать не буду. Добавить дефолтный аватар каждому пользователю (необходимая картинка).

Пример:
https://bitbucket.org/oleksandrkovalov/modularity_webpack_example/src

Проект сдавать в виде репозитория на github/bitbucket/etc, в котором должны быть webpack.config.js, код приложения и package.json с необходимыми зависимостями.