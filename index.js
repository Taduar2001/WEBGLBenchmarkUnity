System.register(["./application.js"], function (_export, _context) {
  "use strict";

  var Application, canvas, application;
  
  function topLevelImport(url) {
    return System["import"](url);
  }

  return {
    setters: [
      function (_applicationJs) {
        Application = _applicationJs.Application;
      }
    ],
    execute: function () {
      // Получаем Canvas
      canvas = document.getElementById('GameCanvas');

      // Фиксированные размеры 500x500
      canvas.width = 500;
      canvas.height = 500;

      // Создаём экземпляр приложения
      application = new Application();

      // Импорт движка Cocos Creator и инициализация приложения
      topLevelImport('cc').then(function (engine) {
        return application.init(engine);
      }).then(function () {
        return application.start();
      }).then(function () {
        // Отмечаем, что игра готова
        window.GAME_READY = true;
        console.log('Игра Cocos Creator готова и запущена');
      }).catch(function (err) {
        console.error(err);
      });
    }
  };
});
