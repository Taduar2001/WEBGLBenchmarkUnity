System.register(["./application.js"], function (_export, _context) {
  "use strict";

  var Application, canvas, $p, bcr, application;
  function topLevelImport(url) {
    return System["import"](url);
  }

  return {
    setters: [function (_applicationJs) {
      Application = _applicationJs.Application;
    }],
    execute: function () {
      canvas = document.getElementById('GameCanvas');
      $p = canvas.parentElement;
      bcr = $p.getBoundingClientRect();
      canvas.width = bcr.width;
      canvas.height = bcr.height;

      // ==== Новый код для фокуса canvas ====
      canvas.tabIndex = 0;    // делаем фокусируемым
      canvas.focus();         // сразу фокусируем

      // Если браузер блокирует фокус, то фокусируем при клике по body
      document.body.addEventListener('click', () => {
        canvas.focus();
      });

      // ==== Создаём приложение ====
      application = new Application();
      topLevelImport('cc').then(function (engine) {
        return application.init(engine);
      }).then(function () {
        return application.start();
      })["catch"](function (err) {
        console.error(err);
      });

      // ==== Пример прослушивания клавиш через Cocos ====
      topLevelImport('cc').then((cc) => {
        const { systemEvent, SystemEvent } = cc;
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, (event) => {
          console.log('Key pressed:', event.keyCode);
        });
        systemEvent.on(SystemEvent.EventType.KEY_UP, (event) => {
          console.log('Key released:', event.keyCode);
        });
      });
    }
  };
});
