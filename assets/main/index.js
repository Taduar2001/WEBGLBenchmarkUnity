System.register("chunks:///_virtual/AddCake.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "bf9e8dig6dG5784T9aSK/VS", "AddCake", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CakeCreator = exports('CakeCreator', (_dec = ccclass('CakeCreator'), _dec2 = property({
        tooltip: '������ URL �� ��������� API (�������� �����)'
      }), _dec3 = property({
        tooltip: '����. id ������� (�������� 1..N)'
      }), _dec4 = property({
        tooltip: '��������� �� # ����� ������ (��� � ������� "#999999")'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CakeCreator, _Component);
        function CakeCreator() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "endpoint", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxFillingId", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hexWithHash", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CakeCreator.prototype;
        _proto.start = function start() {
          // ������������ ������� ��� ������
          this.createCake();
        };
        _proto.createCake = /*#__PURE__*/function () {
          var _createCake = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var payload, res, data;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (this.endpoint) {
                    _context.next = 3;
                    break;
                  }
                  console.error('�� ������ endpoint');
                  return _context.abrupt("return");
                case 3:
                  payload = {
                    user_id: this.uuidV4(),
                    // ����������, ������ UUID v4
                    hex_color: this.randHexColor(this.hexWithHash),
                    // ����������
                    // ���� � �� ������������ ����, �� �������� ��������
                    name: this.pickRandom(['����', '���', '����', '����', '����', '������', '���']),
                    title: this.pickRandom(['���������� ����', '���������� ����', '��������� ����', '������� ����', '����������� ����']),
                    greeting_text: this.pickRandom(['����������!', '������� � �������!', '����� ������� ������������...', '����� ���������� �����!', '������� �����!']),
                    filling_id: this.randInt(1, Math.max(1, Math.floor(this.maxFillingId))) // �����������
                    // file � �� ����������
                  };

                  _context.prev = 4;
                  _context.next = 7;
                  return fetch(this.endpoint, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                  });
                case 7:
                  res = _context.sent;
                  _context.next = 10;
                  return res.json()["catch"](function () {
                    return {};
                  });
                case 10:
                  data = _context.sent;
                  console.log('����� API:', data);
                  _context.next = 17;
                  break;
                case 14:
                  _context.prev = 14;
                  _context.t0 = _context["catch"](4);
                  console.error('������ ��� �������� �����:', _context.t0);
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[4, 14]]);
          }));
          function createCake() {
            return _createCake.apply(this, arguments);
          }
          return createCake;
        }() // ===== ������� =====
        ;

        _proto.pickRandom = function pickRandom(arr) {
          return arr[Math.floor(Math.random() * arr.length)];
        };
        _proto.randInt = function randInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        _proto.randHexColor = function randHexColor(withHash) {
          if (withHash === void 0) {
            withHash = true;
          }
          var hex = '0123456789ABCDEF';
          var out = withHash ? '#' : '';
          for (var i = 0; i < 6; i++) out += hex[Math.floor(Math.random() * 16)];
          return out;
        };
        _proto.uuidV4 = function uuidV4() {
          if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
            return crypto.randomUUID();
          }
          // �������� ��� padStart
          var bytes = [];
          for (var i = 0; i < 16; i++) bytes.push(Math.floor(Math.random() * 256));
          bytes[6] = bytes[6] & 0x0f | 0x40; // version 4
          bytes[8] = bytes[8] & 0x3f | 0x80; // variant

          var b2h = function b2h(b) {
            var s = b.toString(16);
            return s.length === 1 ? '0' + s : s;
          };
          var hex = bytes.map(b2h).join('');
          return hex.slice(0, 8) + '-' + hex.slice(8, 12) + '-' + hex.slice(12, 16) + '-' + hex.slice(16, 20) + '-' + hex.slice(20);
        };
        return CakeCreator;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "endpoint", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxFillingId", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hexWithHash", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ArcTextMesh.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Enum, JsonAsset, Texture2D, Material, Color, Layers, MeshRenderer, Vec3, gfx, Mesh, math, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      JsonAsset = module.JsonAsset;
      Texture2D = module.Texture2D;
      Material = module.Material;
      Color = module.Color;
      Layers = module.Layers;
      MeshRenderer = module.MeshRenderer;
      Vec3 = module.Vec3;
      gfx = module.gfx;
      Mesh = module.Mesh;
      math = module.math;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35;
      cclegacy._RF.push({}, "28184xX3rNPcJTTJ6RRKcou", "ArcTextMesh", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode,
        disallowMultiple = _decorator.disallowMultiple;
      var ArcPlane = /*#__PURE__*/function (ArcPlane) {
        ArcPlane[ArcPlane["XY"] = 0] = "XY";
        ArcPlane[ArcPlane["XZ"] = 1] = "XZ";
        ArcPlane[ArcPlane["YZ"] = 2] = "YZ";
        return ArcPlane;
      }(ArcPlane || {});
      Enum(ArcPlane);
      var ArcAlign = /*#__PURE__*/function (ArcAlign) {
        ArcAlign[ArcAlign["Left"] = 0] = "Left";
        ArcAlign[ArcAlign["Center"] = 1] = "Center";
        ArcAlign[ArcAlign["Right"] = 2] = "Right";
        return ArcAlign;
      }(ArcAlign || {});
      Enum(ArcAlign);
      var ArcBend = /*#__PURE__*/function (ArcBend) {
        ArcBend[ArcBend["Convex"] = 1] = "Convex";
        ArcBend[ArcBend["Concave"] = -1] = "Concave";
        return ArcBend;
      }(ArcBend || {});
      Enum(ArcBend);
      var BendMode = /*#__PURE__*/function (BendMode) {
        BendMode[BendMode["Radius"] = 0] = "Radius";
        BendMode[BendMode["ArcAngle"] = 1] = "ArcAngle";
        return BendMode;
      }(BendMode || {});
      Enum(BendMode);
      var ArcTextMSDFTwoLinesSubmesh = exports('ArcTextMSDFTwoLinesSubmesh', (_dec = ccclass('ArcTextMSDFTwoLinesSubmesh'), _dec2 = executeInEditMode(), _dec3 = disallowMultiple(), _dec4 = property({
        tooltip: 'В редакторе автоматически пересобирать при изменении свойств'
      }), _dec5 = property({
        tooltip: 'В рантайме собрать в start()'
      }), _dec6 = property({
        tooltip: 'После сборки отключить компонент (0 оверхеда)'
      }), _dec7 = property({
        tooltip: 'Поставь true -> пересборка прямо сейчас'
      }), _dec8 = property({
        tooltip: 'Текст 1-й строки'
      }), _dec9 = property({
        type: JsonAsset
      }), _dec10 = property({
        type: Texture2D
      }), _dec11 = property({
        type: Material
      }), _dec12 = property({
        tooltip: 'Размер шрифта 1 (px→мир)'
      }), _dec13 = property({
        tooltip: 'Шаг 1 (xadvance множитель)'
      }), _dec14 = property({
        type: Color
      }), _dec15 = property({
        tooltip: 'Текст 2-й строки'
      }), _dec16 = property({
        type: JsonAsset
      }), _dec17 = property({
        type: Texture2D
      }), _dec18 = property({
        type: Material
      }), _dec19 = property({
        tooltip: 'Размер шрифта 2 (px→мир)'
      }), _dec20 = property({
        tooltip: 'Шаг 2 (xadvance множитель)'
      }), _dec21 = property({
        type: Color
      }), _dec22 = property({
        type: BendMode
      }), _dec23 = property({
        type: ArcPlane
      }), _dec24 = property({
        type: ArcAlign
      }), _dec25 = property({
        type: ArcBend
      }), _dec26 = property({
        slide: true,
        range: [2, 64],
        step: 1
      }), _dec27 = property({
        slide: true,
        range: [1, 32],
        step: 1
      }), _dec28 = property({
        slide: true,
        range: [1, 128],
        step: 1
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ArcTextMSDFTwoLinesSubmesh, _Component);
        function ArcTextMSDFTwoLinesSubmesh() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // -------- редактор/рантайм поведение
          _initializerDefineProperty(_this, "editorLiveUpdate", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buildOnStart", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freezeAfterBuild", _descriptor3, _assertThisInitialized(_this));
          // Кнопка-переключатель в инспекторе
          _this._forceRebuild = false;
          // -------- строка 1 (верхняя)
          _initializerDefineProperty(_this, "text1", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fontJson1", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "atlas1", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "material1", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pixelScale1", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spacingScale1", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "color1", _descriptor10, _assertThisInitialized(_this));
          // -------- строка 2 (нижняя)
          _initializerDefineProperty(_this, "text2", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fontJson2", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "atlas2", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "material2", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pixelScale2", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spacingScale2", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "color2", _descriptor17, _assertThisInitialized(_this));
          // Вертикальная дистанция между строками (мировые ед.): text1 ↑ d/2, text2 ↓ d/2
          _initializerDefineProperty(_this, "lineSpacing", _descriptor18, _assertThisInitialized(_this));
          // MSDF/UV
          _initializerDefineProperty(_this, "invertV", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mirrorX", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mirrorY", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoPxRange", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "msdfSoftness", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "alphaClip", _descriptor24, _assertThisInitialized(_this));
          // Кривизна/раскладка
          _initializerDefineProperty(_this, "bendMode", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "radius", _descriptor26, _assertThisInitialized(_this));
          // при ArcAngle может быть 0
          _initializerDefineProperty(_this, "arcAngleDeg", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "plane", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "align", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bend", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "faceOutward", _descriptor31, _assertThisInitialized(_this));
          // Сегментация (колонки)
          _initializerDefineProperty(_this, "segmentWidthPx", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minSegmentsPerGlyph", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxSegmentsPerGlyph", _descriptor34, _assertThisInitialized(_this));
          // Центрирование по видимой высоте (Y для XY/XZ, Z для YZ)
          _initializerDefineProperty(_this, "centerVertByBounds", _descriptor35, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ArcTextMSDFTwoLinesSubmesh.prototype;
        // ---------- lifecycle ----------
        _proto.onLoad = function onLoad() {
          this.node.layer = 1 << Layers.Enum.DEFAULT;
          if (!this.node.getComponent(MeshRenderer)) this.node.addComponent(MeshRenderer);
        };
        _proto.start = function start() {
          if (this.buildOnStart) {
            this._rebuild();
            if (this.freezeAfterBuild) this.enabled = false;
          }
        };
        _proto.onValidate = function onValidate() {}

        // ---------- сборка: 1 меш, 1–2 сабмеша ----------
        ;

        _proto._rebuild = function _rebuild() {
          var ok1 = !!(this.text1 && this.fontJson1 && this.atlas1 && this.material1);
          var ok2 = !!(this.text2 && this.fontJson2 && this.atlas2 && this.material2);
          var mr = this.node.getComponent(MeshRenderer);
          if (!ok1 && !ok2) {
            mr.mesh = null;
            mr.materials = [];
            return;
          }
          var half = this.lineSpacing * 0.5;
          var geo1 = ok1 ? this._buildLine(this.text1, this.fontJson1, this.atlas1, this.pixelScale1, this.spacingScale1, +half) : null;
          var geo2 = ok2 ? this._buildLine(this.text2, this.fontJson2, this.atlas2, this.pixelScale2, this.spacingScale2, -half) : null;
          var canMerge = ok1 && ok2 && this.atlas1 === this.atlas2 && this.material1 === this.material2;
          var oneSub = canMerge || !ok2;
          var positions = [];
          var normals = [];
          var uvs = [];
          var indices0 = [];
          var indices1 = [];
          var minPos = new Vec3(1e9, 1e9, 1e9);
          var maxPos = new Vec3(-1e9, -1e9, -1e9);
          if (geo1) {
            positions.push.apply(positions, geo1.positions);
            normals.push.apply(normals, geo1.normals);
            uvs.push.apply(uvs, geo1.uvs);
            indices0 = geo1.indices;
            minPos.x = Math.min(minPos.x, geo1.minPos.x);
            minPos.y = Math.min(minPos.y, geo1.minPos.y);
            minPos.z = Math.min(minPos.z, geo1.minPos.z);
            maxPos.x = Math.max(maxPos.x, geo1.maxPos.x);
            maxPos.y = Math.max(maxPos.y, geo1.maxPos.y);
            maxPos.z = Math.max(maxPos.z, geo1.maxPos.z);
          }
          var vtxOffset1 = positions.length / 3;
          if (geo2) {
            positions.push.apply(positions, geo2.positions);
            normals.push.apply(normals, geo2.normals);
            uvs.push.apply(uvs, geo2.uvs);
            indices1 = geo2.indices.map(function (i) {
              return i + vtxOffset1;
            });
            minPos.x = Math.min(minPos.x, geo2.minPos.x);
            minPos.y = Math.min(minPos.y, geo2.minPos.y);
            minPos.z = Math.min(minPos.z, geo2.minPos.z);
            maxPos.x = Math.max(maxPos.x, geo2.maxPos.x);
            maxPos.y = Math.max(maxPos.y, geo2.maxPos.y);
            maxPos.z = Math.max(maxPos.z, geo2.maxPos.z);
          }

          // Центрирование по видимой высоте
          if (this.centerVertByBounds && positions.length >= 3) {
            var vIdx = this.plane === ArcPlane.YZ ? 2 : 1;
            var vMin = 1e9,
              vMax = -1e9;
            for (var i = vIdx; i < positions.length; i += 3) {
              var v = positions[i];
              if (v < vMin) vMin = v;
              if (v > vMax) vMax = v;
            }
            var vMid = (vMin + vMax) * 0.5;
            for (var _i = vIdx; _i < positions.length; _i += 3) {
              positions[_i] -= vMid;
            }

            // пересчёт bounds
            var minX = 1e9,
              minY = 1e9,
              minZ = 1e9,
              maxX = -1e9,
              maxY = -1e9,
              maxZ = -1e9;
            for (var _i2 = 0; _i2 < positions.length; _i2 += 3) {
              var x = positions[_i2],
                y = positions[_i2 + 1],
                z = positions[_i2 + 2];
              if (x < minX) minX = x;
              if (y < minY) minY = y;
              if (z < minZ) minZ = z;
              if (x > maxX) maxX = x;
              if (y > maxY) maxY = y;
              if (z > maxZ) maxZ = z;
            }
            minPos.set(minX, minY, minZ);
            maxPos.set(maxX, maxY, maxZ);
          }

          // ----- vertex buffer (pos3 normal3 uv2)
          var stride = 8 * 4;
          var vertCount = positions.length / 3;
          var vbAB = new ArrayBuffer(vertCount * stride);
          var vbF32 = new Float32Array(vbAB);
          for (var _i3 = 0; _i3 < vertCount; _i3++) {
            var _normals, _normals2, _normals3, _uvs, _uvs2;
            var dst = _i3 * 8;
            vbF32[dst] = positions[_i3 * 3];
            vbF32[dst + 1] = positions[_i3 * 3 + 1];
            vbF32[dst + 2] = positions[_i3 * 3 + 2];
            vbF32[dst + 3] = (_normals = normals[_i3 * 3]) != null ? _normals : 0;
            vbF32[dst + 4] = (_normals2 = normals[_i3 * 3 + 1]) != null ? _normals2 : 0;
            vbF32[dst + 5] = (_normals3 = normals[_i3 * 3 + 2]) != null ? _normals3 : 1;
            vbF32[dst + 6] = (_uvs = uvs[_i3 * 2]) != null ? _uvs : 0;
            vbF32[dst + 7] = (_uvs2 = uvs[_i3 * 2 + 1]) != null ? _uvs2 : 0;
          }
          var vbBytes = new Uint8Array(vbAB);

          // ----- индексы: ВСЕГДА склеиваем оба списка в один общий буфер
          var totalIdx = indices0.length + indices1.length;
          var indAll = new Uint32Array(totalIdx);
          indAll.set(indices0, 0);
          if (indices1.length) indAll.set(indices1, indices0.length);
          var ibBytes = new Uint8Array(indAll.buffer);

          // общий data буфер
          var joined = new Uint8Array(vbBytes.byteLength + ibBytes.byteLength);
          joined.set(vbBytes, 0);
          joined.set(ibBytes, vbBytes.byteLength);
          var vbOffset = 0,
            ibOffset = vbBytes.byteLength;

          // атрибуты
          var attrs = [new gfx.Attribute(gfx.AttributeName.ATTR_POSITION, gfx.Format.RGB32F, false, 0, false, 0), new gfx.Attribute(gfx.AttributeName.ATTR_NORMAL, gfx.Format.RGB32F, false, 0, false, 1), new gfx.Attribute(gfx.AttributeName.ATTR_TEX_COORD, gfx.Format.RG32F, false, 0, false, 2)];

          // меш
          var mesh = new Mesh();
          mesh.reset({
            struct: {
              vertexBundles: [{
                attributes: attrs,
                view: {
                  offset: vbOffset,
                  length: vbBytes.byteLength,
                  count: vertCount,
                  stride: stride
                }
              }],
              primitives: oneSub ? [{
                primitiveMode: gfx.PrimitiveMode.TRIANGLE_LIST,
                vertexBundelIndices: [0],
                indexView: {
                  offset: ibOffset,
                  length: ibBytes.byteLength,
                  count: indAll.length,
                  stride: 4
                }
              }] : [{
                primitiveMode: gfx.PrimitiveMode.TRIANGLE_LIST,
                vertexBundelIndices: [0],
                indexView: {
                  offset: ibOffset + 0,
                  length: indices0.length * 4,
                  count: indices0.length,
                  stride: 4
                }
              }, {
                primitiveMode: gfx.PrimitiveMode.TRIANGLE_LIST,
                vertexBundelIndices: [0],
                indexView: {
                  offset: ibOffset + indices0.length * 4,
                  length: indices1.length * 4,
                  count: indices1.length,
                  stride: 4
                }
              }],
              minPosition: minPos,
              maxPosition: maxPos
            },
            data: joined
          });

          // материалы
          mr.mesh = mesh;
          mr.materials = oneSub ? [this.material1] : [this.material1, this.material2];
          var mi0 = mr.getMaterialInstance(0);
          this._applyMatProps(mi0, this.fontJson1, this.atlas1, this.color1);
          if (!oneSub) {
            var mi1 = mr.getMaterialInstance(1);
            this._applyMatProps(mi1, this.fontJson2, this.atlas2, this.color2);
          }
        }

        // ---------- геометрия одной строки (минимум аллокаций) ----------
        ;

        _proto._buildLine = function _buildLine(text, json, atlas, pixelScale, spacingScale, baselineOffsetY) {
          var _data$common$base,
            _this2 = this;
          var data = json.json;

          // glyph map
          var glyphMap = new Map();
          if (Array.isArray(data.chars)) {
            for (var _iterator = _createForOfIteratorHelperLoose(data.chars), _step; !(_step = _iterator()).done;) {
              var c = _step.value;
              glyphMap.set(c.id, c);
            }
          } else for (var k in data.chars) glyphMap.set(Number(k), data.chars[k]);

          // kerning
          var kmap = new Map();
          if (Array.isArray(data.kernings)) {
            for (var _iterator2 = _createForOfIteratorHelperLoose(data.kernings), _step2; !(_step2 = _iterator2()).done;) {
              var _k = _step2.value;
              kmap.set(_k.first << 16 | _k.second, _k.amount);
            }
          } else if (data.kernings) for (var key in data.kernings) kmap.set(Number(key), data.kernings[key]);
          var kern = function kern(prev, curr) {
            var _kmap$get;
            return (_kmap$get = kmap.get(prev << 16 | curr)) != null ? _kmap$get : 0;
          };
          var S = Math.max(1e-4, pixelScale);
          var texW = Math.max(1, atlas.width),
            texH = Math.max(1, atlas.height);
          var lineH = data.common.lineHeight || 0;
          var base = (_data$common$base = data.common.base) != null ? _data$common$base : Math.round(lineH * 0.5);
          var baselineY = base * S;
          var infos = [];
          var penX = 0,
            minX = 1e9,
            maxX = -1e9;
          var codes = [];
          for (var _iterator3 = _createForOfIteratorHelperLoose(text), _step3; !(_step3 = _iterator3()).done;) {
            var ch = _step3.value;
            codes.push(ch.codePointAt(0));
          }
          for (var i = 0; i < codes.length; i++) {
            var _glyphMap$get;
            var g = (_glyphMap$get = glyphMap.get(codes[i])) != null ? _glyphMap$get : glyphMap.get(63);
            if (!g) continue;
            var advPx = (g.xadvance + (i > 0 ? kern(codes[i - 1], g.id) : 0)) * S * spacingScale;
            var left = penX + g.xoffset * S;
            var right = left + g.width * S;
            var yTop = (base - g.yoffset) * S;
            var yBot = yTop - g.height * S;
            infos.push({
              g: g,
              left: left,
              right: right,
              yTop: yTop,
              yBot: yBot
            });
            if (left < minX) minX = left;
            if (right > maxX) maxX = right;
            penX += advPx;
          }
          var span = Math.max(1e-4, maxX - minX);

          // кривизна
          var totalArc = 0,
            R = this.radius;
          if (this.bendMode === BendMode.Radius) {
            R = Math.max(1e-3, this.radius);
            totalArc = span / R;
          } else {
            var ang = math.toRadian(this.arcAngleDeg);
            totalArc = Math.max(0, ang);
            R = totalArc < 1e-6 ? 1e12 : span / totalArc;
          }
          var startAngle = 0;
          if (this.align === ArcAlign.Center) startAngle = -totalArc / 2;else if (this.align === ArcAlign.Right) startAngle = -totalArc;
          var sign = this.bend === ArcBend.Convex ? 1 : -1;

          // помощники без аллокаций
          var C0 = new Vec3(),
            C1 = new Vec3();
          var tmpQ0 = new math.Quat(),
            tmpQ1 = new math.Quat();
          var pointOnArcOut = function pointOnArcOut(theta, r, out) {
            switch (_this2.plane) {
              case ArcPlane.XY:
                out.set(Math.cos(theta) * r, Math.sin(theta) * r, 0);
                break;
              case ArcPlane.XZ:
                out.set(Math.cos(theta) * r, 0, Math.sin(theta) * r);
                break;
              case ArcPlane.YZ:
                out.set(0, Math.cos(theta) * r, Math.sin(theta) * r);
                break;
            }
          };
          var rotQuatDegOut = function rotQuatDegOut(deg, out) {
            var add = _this2.faceOutward ? 90 : 0;
            switch (_this2.plane) {
              case ArcPlane.XY:
                math.Quat.fromEuler(out, 0, 0, deg + add);
                break;
              case ArcPlane.XZ:
                math.Quat.fromEuler(out, 0, -(deg + add), 0);
                break;
              case ArcPlane.YZ:
                math.Quat.fromEuler(out, deg + add, 0, 0);
                break;
            }
          };
          var anchor = totalArc < 1e-6 ? new Vec3(minX + span * 0.5, baselineY, 0) : function () {
            var a = new Vec3();
            pointOnArcOut((startAngle + totalArc * 0.5) * sign, R, a);
            return a;
          }();

          // вертикальный вектор и оффсет
          var vAxis = this.plane === ArcPlane.YZ ? new Vec3(0, 0, 1) : new Vec3(0, 1, 0);
          var offX = vAxis.x * baselineOffsetY,
            offY = vAxis.y * baselineOffsetY,
            offZ = vAxis.z * baselineOffsetY;
          var baseNormal = this.plane === ArcPlane.XY ? new Vec3(0, 0, 1) : this.plane === ArcPlane.XZ ? new Vec3(0, 1, 0) : new Vec3(1, 0, 0);
          var n0 = new Vec3(),
            n1 = new Vec3();
          var positions = [];
          var normals = [];
          var uvs = [];
          var indices = [];
          var lt0 = new Vec3(),
            lb0 = new Vec3(),
            rt1 = new Vec3(),
            rb1 = new Vec3();
          var pivot0 = new Vec3(),
            pivot1 = new Vec3();
          for (var _i4 = 0, _infos = infos; _i4 < _infos.length; _i4++) {
            var inf = _infos[_i4];
            var _g = inf.g;
            var gw = Math.max(1e-4, _g.width * S);
            var cols = Math.ceil(_g.width / Math.max(1, Math.floor(this.segmentWidthPx)));
            cols = Math.max(this.minSegmentsPerGlyph, Math.min(this.maxSegmentsPerGlyph, cols));
            for (var ci = 0; ci < cols; ci++) {
              var t0 = ci / cols,
                t1 = (ci + 1) / cols;
              var gx0 = inf.left + gw * t0;
              var gx1 = inf.left + gw * t1;
              var theta0 = (startAngle + (gx0 - minX) / span * totalArc) * sign;
              var theta1 = (startAngle + (gx1 - minX) / span * totalArc) * sign;
              pointOnArcOut(theta0, R, C0);
              pointOnArcOut(theta1, R, C1);
              rotQuatDegOut(math.toDegree(theta0), tmpQ0);
              rotQuatDegOut(math.toDegree(theta1), tmpQ1);
              pivot0.set(gx0, baselineY, 0);
              pivot1.set(gx1, baselineY, 0);
              lt0.set(gx0, inf.yTop, 0);
              lb0.set(gx0, inf.yBot, 0);
              rt1.set(gx1, inf.yTop, 0);
              rb1.set(gx1, inf.yBot, 0);
              var p0 = new Vec3(lt0.x - pivot0.x, lt0.y - pivot0.y, 0);
              Vec3.transformQuat(p0, p0, tmpQ0);
              p0.add(C0).subtract(anchor);
              var p3 = new Vec3(lb0.x - pivot0.x, lb0.y - pivot0.y, 0);
              Vec3.transformQuat(p3, p3, tmpQ0);
              p3.add(C0).subtract(anchor);
              var p1 = new Vec3(rt1.x - pivot1.x, rt1.y - pivot1.y, 0);
              Vec3.transformQuat(p1, p1, tmpQ1);
              p1.add(C1).subtract(anchor);
              var p2 = new Vec3(rb1.x - pivot1.x, rb1.y - pivot1.y, 0);
              Vec3.transformQuat(p2, p2, tmpQ1);
              p2.add(C1).subtract(anchor);

              // вертикальный сдвиг
              p0.x += offX;
              p0.y += offY;
              p0.z += offZ;
              p1.x += offX;
              p1.y += offY;
              p1.z += offZ;
              p2.x += offX;
              p2.y += offY;
              p2.z += offZ;
              p3.x += offX;
              p3.y += offY;
              p3.z += offZ;
              Vec3.transformQuat(n0, baseNormal, tmpQ0);
              Vec3.transformQuat(n1, baseNormal, tmpQ1);

              // UV
              var u0 = (_g.x + _g.width * t0) / texW;
              var u1 = (_g.x + _g.width * t1) / texW;
              var v0 = _g.y / texH;
              var v1 = (_g.y + _g.height) / texH;
              if (!this.invertV) {
                v0 = 1 - v0;
                v1 = 1 - v1;
                var tv = v0;
                v0 = v1;
                v1 = tv;
              }
              if (this.mirrorX) {
                var tu = u0;
                u0 = u1;
                u1 = tu;
              }
              if (this.mirrorY) {
                var _tv = v0;
                v0 = v1;
                v1 = _tv;
              }
              var baseIdx = positions.length / 3;
              positions.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);
              normals.push(n0.x, n0.y, n0.z, n1.x, n1.y, n1.z, n1.x, n1.y, n1.z, n0.x, n0.y, n0.z);
              uvs.push(u0, v0, u1, v0, u1, v1, u0, v1);
              indices.push(baseIdx, baseIdx + 1, baseIdx + 2, baseIdx, baseIdx + 2, baseIdx + 3);
            }
          }

          // bounds
          var min = new Vec3(1e9, 1e9, 1e9),
            max = new Vec3(-1e9, -1e9, -1e9);
          for (var _i5 = 0; _i5 < positions.length; _i5 += 3) {
            var x = positions[_i5],
              y = positions[_i5 + 1],
              z = positions[_i5 + 2];
            if (x < min.x) min.x = x;
            if (y < min.y) min.y = y;
            if (z < min.z) min.z = z;
            if (x > max.x) max.x = x;
            if (y > max.y) max.y = y;
            if (z > max.z) max.z = z;
          }
          return {
            positions: positions,
            normals: normals,
            uvs: uvs,
            indices: indices,
            minPos: min,
            maxPos: max
          };
        }

        // ---------- материал/юниформы ----------
        ;

        _proto._applyMatProps = function _applyMatProps(mat, json, atlas, color) {
          if (!atlas) return;
          if (this.autoPxRange && json != null && json.json) {
            var _j$distanceField$dist, _j$distanceField;
            var j = json.json;
            mat.setProperty('pxRange', (_j$distanceField$dist = (_j$distanceField = j.distanceField) == null ? void 0 : _j$distanceField.distanceRange) != null ? _j$distanceField$dist : 4);
          }
          mat.setProperty('mainTexture', atlas);
          mat.setProperty('tintColor', color);
          mat.setProperty('softness', this.msdfSoftness);
          mat.setProperty('alphaClip', this.alphaClip);
        }

        // внутри ArcTextMSDFTwoLinesSubmesh

        /** Установить текст 1-й строки */;
        _proto.setText1 = function setText1(text) {
          this.text1 = text && text.trim() ? text : '';
          this._rebuild();
        }

        /** Установить текст 2-й строки */;
        _proto.setText2 = function setText2(text) {
          this.text2 = text && text.trim() ? text : '';
          this._rebuild();
        }

        /** Применить данные из API: title → text1, name → text2 */;
        _proto.applyApiData = function applyApiData(data) {
          this.text1 = data.title && data.title.trim() ? data.title : '';
          this.text2 = data.name && data.name.trim() ? data.name : '';
          this._rebuild();
        };
        _createClass(ArcTextMSDFTwoLinesSubmesh, [{
          key: "Force_Rebuild",
          get: function get() {
            return this._forceRebuild;
          },
          set: function set(v) {
            if (v) this._rebuild();
            this._forceRebuild = false;
          }
        }]);
        return ArcTextMSDFTwoLinesSubmesh;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "editorLiveUpdate", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buildOnStart", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "freezeAfterBuild", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "Force_Rebuild", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "Force_Rebuild"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "text1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Ура!';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fontJson1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "atlas1", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "material1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "pixelScale1", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spacingScale1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "color1", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 0, 0, 255);
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "text2", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Михалыч';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "fontJson2", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "atlas2", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "material2", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "pixelScale2", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "spacingScale2", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "color2", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 0, 0, 255);
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "lineSpacing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 80;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "invertV", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "mirrorX", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "mirrorY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "autoPxRange", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "msdfSoftness", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "alphaClip", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "bendMode", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BendMode.ArcAngle;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "radius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "arcAngleDeg", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "plane", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ArcPlane.XZ;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "align", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ArcAlign.Center;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "bend", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ArcBend.Concave;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "faceOutward", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "segmentWidthPx", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "minSegmentsPerGlyph", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "maxSegmentsPerGlyph", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "centerVertByBounds", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AutoScaleCameraPosition.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, view, game, screen, Component, Size;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      view = module.view;
      game = module.game;
      screen = module.screen;
      Component = module.Component;
      Size = module.Size;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "127bfVhJ3NP/LBgnQxROUZd", "AutoScaleCameraPosition", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AutoScaleCameraPositionWithLogs = exports('AutoScaleCameraPositionWithLogs', (_dec = ccclass('AutoScaleCameraPositionWithLogs'), _dec2 = property({
        tooltip: 'Референсное разрешение (под которое выставлена камера в редакторе)'
      }), _dec3 = property({
        tooltip: 'Режим вычисления коэффициента масштаба: average/min/max'
      }), _dec4 = property({
        tooltip: 'Включить подробные логи в консоль'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AutoScaleCameraPositionWithLogs, _Component);
        function AutoScaleCameraPositionWithLogs() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "refResolution", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scaleMode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "debugLogs", _descriptor3, _assertThisInitialized(_this));
          _this._basePos = new Vec3();
          _this._lastScale = 0;
          _this._onResize = function (tag) {
            return function () {
              _this._log("[event] " + tag);
              _this._updateCameraPosition(tag);
            };
          };
          return _this;
        }
        var _proto = AutoScaleCameraPositionWithLogs.prototype;
        _proto.onEnable = function onEnable() {
          this._basePos.set(this.node.position);
          this._log('[onEnable] basePos =', this._basePos);

          // события изменения экрана/окна
          view.on('design-resolution-changed', this._onResize('design-resolution-changed'), this);
          game.on(game.EVENT_GAME_RESIZE, this._onResize('EVENT_GAME_RESIZE'), this);
          if (screen && screen.on) {
            // cocos 3.8+: глобальные события экрана
            screen.on('window-resize', this._onResize('window-resize'), this);
            screen.on('orientation-change', this._onResize('orientation-change'), this);
          }

          // первичный пересчёт
          this._updateCameraPosition('initial');
        };
        _proto.onDisable = function onDisable() {
          view.off('design-resolution-changed', this._onResize('design-resolution-changed'), this);
          game.off(game.EVENT_GAME_RESIZE, this._onResize('EVENT_GAME_RESIZE'), this);
          if (screen && screen.off) {
            screen.off('window-resize', this._onResize('window-resize'), this);
            screen.off('orientation-change', this._onResize('orientation-change'), this);
          }
        };
        _proto._updateCameraPosition = function _updateCameraPosition(source) {
          var visible = view.getVisibleSize(); // логическая видимая область
          var frame = view.getFrameSize(); // физический размер окна/экрана
          var scaleX = visible.width / this.refResolution.width;
          var scaleY = visible.height / this.refResolution.height;
          var scale = 1;
          switch (this.scaleMode) {
            case 'min':
              scale = Math.min(scaleX, scaleY);
              break;
            case 'max':
              scale = Math.max(scaleX, scaleY);
              break;
            default:
              scale = (scaleX + scaleY) * 0.5;
              break;
            // average
          }

          var newPos = new Vec3(this._basePos.x * scale, this._basePos.y * scale, this._basePos.z * scale);
          this.node.setPosition(newPos);
          this._log("[update from: " + source + "]", '\n  visible =', visible.width + "x" + visible.height, '\n  frame   =', frame.width + "x" + frame.height, '\n  ref     =', this.refResolution.width + "x" + this.refResolution.height, '\n  scaleX  =', scaleX.toFixed(4), '\n  scaleY  =', scaleY.toFixed(4), '\n  mode    =', this.scaleMode, '\n  scale   =', scale.toFixed(4), '\n  basePos =', this._basePos, '\n  newPos  =', newPos, this._lastScale !== scale ? '\n  (scale changed ✅)' : '\n  (scale unchanged)');
          this._lastScale = scale;
        };
        _proto._log = function _log() {
          var _console;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          if (this.debugLogs) (_console = console).log.apply(_console, ['[AutoScaleCameraPosition]'].concat(args));
        };
        return AutoScaleCameraPositionWithLogs;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "refResolution", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Size(1920, 1080);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scaleMode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'average';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "debugLogs", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cake.types.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "62c0b/lKX5EKIeXadjVtKpv", "cake.types", undefined);
      /** ===== API-������ ===== */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CakeApiExample.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7844ftwvDpJ44g6amQ0vR1m", "CakeApiExample", undefined);
      var ccclass = _decorator.ccclass;
      var CakeApiExample = exports('CakeApiExample', (_dec = ccclass('CakeApiExample'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CakeApiExample, _Component);
        function CakeApiExample() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = CakeApiExample.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var response, text, data, rawItems, keys, normalized;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return fetch("https://api.demo-stage.ru/cake/list", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({})
                  });
                case 3:
                  response = _context.sent;
                  if (response.ok) {
                    _context.next = 10;
                    break;
                  }
                  _context.next = 7;
                  return safeReadText(response);
                case 7:
                  text = _context.sent;
                  console.error("Ошибка запроса:", response.status, text);
                  return _context.abrupt("return");
                case 10:
                  _context.next = 12;
                  return response.json()["catch"](function () {
                    return null;
                  });
                case 12:
                  data = _context.sent;
                  console.log('Сырой ответ API:', data);

                  // <-- ДОБАВИЛИ cakes
                  rawItems = Array.isArray(data) ? data : Array.isArray(data == null ? void 0 : data.cakes) ? data.cakes : Array.isArray(data == null ? void 0 : data.items) ? data.items : Array.isArray(data == null ? void 0 : data.data) ? data.data : Array.isArray(data == null ? void 0 : data.result) ? data.result : [];
                  if (!(!Array.isArray(rawItems) || rawItems.length === 0)) {
                    _context.next = 19;
                    break;
                  }
                  keys = data && typeof data === 'object' ? Object.keys(data) : [];
                  console.warn('Не нашли массив элементов. Ключи корня ответа:', keys);
                  return _context.abrupt("return");
                case 19:
                  normalized = rawItems.map(function (raw, idx) {
                    var n = normalizeCakePiece(raw);
                    if (!n.user_id) {
                      console.warn("[item " + idx + "] user_id \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043B\u0438 \u043D\u0435 UUID. \u0418\u0441\u0445\u043E\u0434\u043D\u043E\u0435:", pick(raw, 'user_id', 'uniq_id', 'userId', 'userID', 'user.id', 'attributes.user_id', 'attributes.userId'));
                    }
                    if (!n.hex_color) {
                      console.warn("[item " + idx + "] hex_color \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043B\u0438 \u043D\u0435 HEX. \u0418\u0441\u0445\u043E\u0434\u043D\u043E\u0435:", pick(raw, 'hex_color', 'hexColor', 'color', 'attributes.hex_color', 'attributes.color'));
                    }
                    return n;
                  });
                  console.log("Нормализованные элементы (отсутствующие поля = null):", normalized);
                  try {
                    // @ts-ignore
                    console.table(normalized.map(function (x, i) {
                      return {
                        '#': i,
                        user_id: x.user_id,
                        hex_color: x.hex_color,
                        name: x.name,
                        title: x.title,
                        greeting_text: x.greeting_text,
                        filling_id: x.filling_id,
                        file_present: x.file ? 'yes' : 'no'
                      };
                    }));
                  } catch (_unused) {}
                  _context.next = 27;
                  break;
                case 24:
                  _context.prev = 24;
                  _context.t0 = _context["catch"](0);
                  console.error("Ошибка соединения:", _context.t0);
                case 27:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[0, 24]]);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        return CakeApiExample;
      }(Component)) || _class));

      /* ================ Helpers ================ */
      function safeReadText(_x) {
        return _safeReadText.apply(this, arguments);
      } // Достаём значение по альтернативным путям (поддержка вложенности через '.')
      function _safeReadText() {
        _safeReadText = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resp) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return resp.text();
              case 3:
                return _context2.abrupt("return", _context2.sent);
              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", "");
              case 9:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[0, 6]]);
        }));
        return _safeReadText.apply(this, arguments);
      }
      function pick(raw) {
        for (var _len = arguments.length, paths = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          paths[_key - 1] = arguments[_key];
        }
        for (var _i = 0, _paths = paths; _i < _paths.length; _i++) {
          var p = _paths[_i];
          var v = p.split('.').reduce(function (acc, k) {
            return acc ? acc[k] : undefined;
          }, raw);
          if (v !== undefined) return v;
        }
        return undefined;
      }
      function strOrNull(v) {
        if (typeof v === 'string') {
          var s = v.trim();
          return s.length ? s : null;
        }
        return null;
      }
      function numOrNull(v) {
        if (typeof v === 'number' && Number.isFinite(v)) return v;
        if (typeof v === 'string') {
          var s = v.trim();
          if (s === '') return null;
          var n = Number(s);
          return Number.isFinite(n) ? n : null;
        }
        return null;
      }

      // UUID 8-4-4-4-12 (версии не проверяем строго)
      function isUuidLoose(v) {
        var s = v.trim();
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s);
      }

      // HEX: #RGB / #RRGGBB или без '#'
      function isHexColor(v) {
        return /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v.trim());
      }
      function normalizeHex(v) {
        var s = (v.startsWith('#') ? v.slice(1) : v).trim().toLowerCase();
        if (s.length === 3) return '#' + s.split('').map(function (ch) {
          return ch + ch;
        }).join('').toUpperCase();
        if (s.length === 6) return '#' + s.toUpperCase();
        return s ? '#' + s.slice(0, 6).toUpperCase() : '#000000';
      }
      function normalizeCakePiece(raw) {
        // <-- ДОБАВИЛИ uniq_id как источник user_id
        var user_idRaw = pick(raw, 'user_id', 'uniq_id', 'userId', 'userID', 'user.id', 'attributes.user_id', 'attributes.userId');
        var hexColorRaw = pick(raw, 'hex_color', 'hexColor', 'color', 'attributes.hex_color', 'attributes.color');
        var nameRaw = pick(raw, 'name', 'nickname', 'user_name', 'attributes.name');
        var titleRaw = pick(raw, 'title', 'label', 'attributes.title');
        var greetingRaw = pick(raw, 'greeting_text', 'greetingText', 'greeting', 'attributes.greeting_text');
        var fillingRaw = pick(raw, 'filling_id', 'fillingId', 'attributes.filling_id');
        var fileRaw = pick(raw, 'file', 'file_base64', 'attributes.file');
        var user_id = strOrNull(user_idRaw);
        if (user_id && !isUuidLoose(user_id)) {
          console.warn('user_id не прошёл UUID-проверку → null:', user_id);
          user_id = null;
        }
        var hex_color = strOrNull(hexColorRaw);
        if (hex_color && isHexColor(hex_color)) {
          hex_color = normalizeHex(hex_color);
        } else {
          if (hex_color) console.warn('hex_color не прошёл HEX-проверку → null:', hex_color);
          hex_color = null;
        }
        return {
          user_id: user_id,
          hex_color: hex_color,
          name: strOrNull(nameRaw),
          title: strOrNull(titleRaw),
          greeting_text: strOrNull(greetingRaw),
          filling_id: numOrNull(fillingRaw),
          file: strOrNull(fileRaw)
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ClickMoveBinding.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ArcTextMesh.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, MeshRenderer, Component, ArcTextMSDFTwoLinesSubmesh;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }, function (module) {
      ArcTextMSDFTwoLinesSubmesh = module.ArcTextMSDFTwoLinesSubmesh;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "a3b9f30vchC9aP2MSuw/5Bg", "ClickMoveBinding", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ClickMoveBinding = exports('ClickMoveBinding', (_dec = ccclass('ClickMoveBinding'), _dec2 = property({
        type: Node,
        tooltip: '���� ������� ��� ����� �� ����� �������'
      }), _dec3 = property({
        type: MeshRenderer,
        tooltip: '������ �� MeshRenderer (��������, ��� ������ �����)'
      }), _dec4 = property({
        type: Node,
        tooltip: '���� ������, ������� ����� �������� ������� �� Y'
      }), _dec5 = property({
        type: Node,
        tooltip: '�������: ���������� ��� ��������, ����������� ��� ��������'
      }), _dec6 = property({
        type: ArcTextMSDFTwoLinesSubmesh,
        tooltip: '��������� ������ (2 ������)'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ClickMoveBinding, _Component);
        function ClickMoveBinding() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "meshRenderer", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "model", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rim", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arcText", _descriptor5, _assertThisInitialized(_this));
          // --- ����������� ��������� ���������� ---
          _this._startTargetPos = null;
          // ��������� ������� target
          _this._startModelEuler = null;
          // ��������� ������ ������
          _this._captured = false;
          return _this;
        }
        var _proto = ClickMoveBinding.prototype;
        _proto.onEnable = function onEnable() {
          this.ensureCaptured();
        }

        /** �������������� ����������� ��������� ���������� ���� ��� */;
        _proto.ensureCaptured = function ensureCaptured() {
          if (this._captured) return;
          if (this.target) {
            this._startTargetPos = this.target.getPosition().clone();
          }
          if (this.model) {
            this._startModelEuler = this.model.eulerAngles.clone();
          }
          this._captured = !!this.target; // ������� �����������, ���� ���� ���� �������
        };

        _proto.updateFromApi = function updateFromApi(apiData) {
          if (this.arcText) {
            this.arcText.applyApiData(apiData);
          }
        }

        /** ���� ������� ��������� � ����� (��� �������) */;
        _proto.logWorld = function logWorld(label) {
          if (this.target) {
            console.log("[" + label + "] target world pos=", this.target.worldPosition.clone());
          }
          if (this.model) {
            console.log("[" + label + "] model  world pos=", this.model.worldPosition.clone(), 'euler=', this.model.eulerAngles.clone());
          }
        };
        return ClickMoveBinding;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "meshRenderer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "model", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rim", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "arcText", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ColorLibrary.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Color, Texture2D, director, MeshRenderer, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
      Texture2D = module.Texture2D;
      director = module.director;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3;
      cclegacy._RF.push({}, "8daf7NAKxNJnqCgflAGm7av", "ColorLibrary", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ColorTextureLibrary = exports('ColorTextureLibrary', (_dec = ccclass('ColorTextureLibrary'), _dec2 = property({
        type: [Color],
        tooltip: 'Палитра цветов'
      }), _dec3 = property({
        type: [Texture2D],
        tooltip: 'Набор текстур'
      }), _dec4 = property({
        tooltip: 'Имя юниформа для цвета #1'
      }), _dec5 = property({
        tooltip: 'Имя юниформа для цвета #2'
      }), _dec6 = property({
        tooltip: 'Имя юниформа для цвета #3'
      }), _dec7 = property({
        tooltip: 'Имя юниформа для цвета #4'
      }), _dec8 = property({
        tooltip: 'Имя юниформа для текстуры #1'
      }), _dec9 = property({
        tooltip: 'Имя юниформа для текстуры #2'
      }), _dec10 = property({
        tooltip: 'Необязательный seed для псевдослучайности (0 = Math.random)'
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ColorTextureLibrary, _Component);
        function ColorTextureLibrary() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // ---------- данные палитры ----------
          _initializerDefineProperty(_this, "paletteColors", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "paletteTextures", _descriptor2, _assertThisInitialized(_this));
          // ---------- имена юниформов ----------
          _initializerDefineProperty(_this, "colorUniform1", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorUniform2", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorUniform3", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorUniform4", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "textureUniform1", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "textureUniform2", _descriptor8, _assertThisInitialized(_this));
          // Если установлен, все случайности будут повторяемыми
          _initializerDefineProperty(_this, "seed", _descriptor9, _assertThisInitialized(_this));
          _this._rngState = 0;
          return _this;
        }
        var _proto = ColorTextureLibrary.prototype;
        _proto.onLoad = function onLoad() {
          if (ColorTextureLibrary._i) {
            this.destroy();
            return;
          }
          ColorTextureLibrary._i = this;
          director.addPersistRootNode(this.node);
          this._rngState = this.seed || Math.random() * 0x7fffffff | 0;
        }

        // ---------- RNG (линейный конгруэнтный, чтобы можно было фиксировать seed) ----------
        ;

        _proto._rand = function _rand() {
          if (!this.seed) return Math.random();
          // параметры LCG
          this._rngState = 1664525 * this._rngState + 1013904223 >>> 0;
          return (this._rngState & 0xffffffff) / 0x100000000;
        }

        // ---------- helpers для уникальных значений ----------
        ;

        _proto._pickUniqueIndices = function _pickUniqueIndices(total, count) {
          if (total <= 0 || count <= 0) return [];
          var idxs = Array.from({
            length: total
          }, function (_, i) {
            return i;
          });
          // Fisher–Yates с нашим RNG
          for (var i = idxs.length - 1; i > 0; i--) {
            var j = this._rand() * (i + 1) | 0;
            var _ref = [idxs[j], idxs[i]];
            idxs[i] = _ref[0];
            idxs[j] = _ref[1];
          }
          return idxs.slice(0, Math.min(total, count));
        }

        /** Вернёт до 4 уникальных цветов (может быть меньше, если палитра мала) */;
        _proto.get4Colors = function get4Colors() {
          var _this2 = this;
          if (!this.paletteColors.length) {
            console.warn('[CTL] Палитра цветов пуста');
            return [];
          }
          return this._pickUniqueIndices(this.paletteColors.length, 4).map(function (i) {
            return _this2.paletteColors[i];
          });
        }

        /** Вернёт до 2 уникальных текстур (может быть меньше, если палитра мала) */;
        _proto.get2Textures = function get2Textures() {
          var _this3 = this;
          if (!this.paletteTextures.length) {
            console.warn('[CTL] Набор текстур пуст');
            return [];
          }
          return this._pickUniqueIndices(this.paletteTextures.length, 2).map(function (i) {
            return _this3.paletteTextures[i];
          });
        };
        // ---------- низкоуровневые сеттеры ----------
        _proto._getMR = function _getMR(target) {
          return target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
        };
        _proto._getMatInstance = function _getMatInstance(mr, matIndex) {
          var _mr$getMaterialInstan;
          if (matIndex === void 0) {
            matIndex = 0;
          }
          // ВАЖНО: инстанс, а не общий material
          return (_mr$getMaterialInstan = mr.getMaterialInstance(matIndex)) != null ? _mr$getMaterialInstan : null;
        }

        /** Установить один цвет в материал по имени юниформа */;
        _proto.applyColor = function applyColor(target, color, uniform, matIndex) {
          if (matIndex === void 0) {
            matIndex = 0;
          }
          var mr = target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
          if (!mr) return;
          var mat = mr.getMaterialInstance(matIndex);
          if (!mat) return;
          mat.setProperty(uniform, color);
        };
        _proto.applyTexture = function applyTexture(target, tex, uniform, matIndex) {
          if (matIndex === void 0) {
            matIndex = 0;
          }
          var mr = target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
          if (!mr) return;
          var mat = mr.getMaterialInstance(matIndex);
          if (!mat) return;
          mat.setProperty(uniform, tex);
        };
        _proto.applyRandomSet = function applyRandomSet(target, matIndex) {
          if (matIndex === void 0) {
            matIndex = 0;
          }
          var mr = target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
          if (!mr) return;
          var mat = mr.getMaterialInstance(matIndex);
          if (!mat) return;
          var colors = this.get4Colors();
          var textures = this.get2Textures();
          this.colorUniforms.forEach(function (u, i) {
            if (u && colors[i]) mat.setProperty(u, colors[i]);
          });
          this.textureUniforms.forEach(function (u, i) {
            if (u && textures[i]) mat.setProperty(u, textures[i]);
          });
        }

        // маленький LCG для локального RNG
        ;

        _proto._rng = function _rng(seed) {
          var s = seed >>> 0;
          return function () {
            s = 1664525 * s + 1013904223 >>> 0;
            return (s & 0xffffffff) / 0x100000000;
          };
        }

        // выбор уникальных индексов с переданным rng
        ;

        _proto._pickUniqueWithRng = function _pickUniqueWithRng(total, count, rnd) {
          var n = Math.min(total, count);
          var idxs = Array.from({
            length: total
          }, function (_, i) {
            return i;
          });
          for (var i = idxs.length - 1; i > 0; i--) {
            var j = rnd() * (i + 1) | 0;
            var _ref2 = [idxs[j], idxs[i]];
            idxs[i] = _ref2[0];
            idxs[j] = _ref2[1];
          }
          return idxs.slice(0, n);
        }

        // СКОЛЬКО логических «наборов» поддерживаем (фиксируйте одно число на проект)
        ;

        _proto.getSetsCount = function getSetsCount() {
          return 256; // можно другое стабильное значение
        }

        // Применить набор по индексу (детерминированно, без глобального Math.random)
        ;

        _proto.applySetByIndex = function applySetByIndex(target, matIndex, setIndex) {
          var _this4 = this;
          var mr = target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
          if (!mr) return;
          var mat = mr.getMaterialInstance(matIndex);
          if (!mat) return;
          var count = this.getSetsCount();
          var seed = (setIndex % count + count) % count;
          var rnd = this._rng(0x9e3779b9 ^ seed);

          // цвета
          var colors = this._pickUniqueWithRng(this.paletteColors.length, 4, rnd).map(function (i) {
            return _this4.paletteColors[i];
          });
          while (colors.length < 4 && this.paletteColors.length > 0) {
            colors.push(this.paletteColors[rnd() * this.paletteColors.length | 0]);
          }

          // текстуры
          var textures = this._pickUniqueWithRng(this.paletteTextures.length, 2, rnd).map(function (i) {
            return _this4.paletteTextures[i];
          });
          while (textures.length < 2 && this.paletteTextures.length > 0) {
            textures.push(this.paletteTextures[rnd() * this.paletteTextures.length | 0]);
          }
          this.colorUniforms.forEach(function (u, i) {
            if (u && colors[i]) mat.setProperty(u, colors[i]);
          });
          this.textureUniforms.forEach(function (u, i) {
            if (u && textures[i]) mat.setProperty(u, textures[i]);
          });
        }

        /**
         * Применить набор к каждому материалу MeshRenderer (если их несколько).
         * Удобно, если у меша несколько сабмешей/материалов.
         */;
        _proto.applyRandomSetToAllMaterials = function applyRandomSetToAllMaterials(target) {
          var mr = this._getMR(target);
          if (!mr) return;
          for (var i = 0; i < mr.materials.length; i++) {
            this.applyRandomSet(mr, i);
          }
        };
        _createClass(ColorTextureLibrary, [{
          key: "colorUniforms",
          get: function get() {
            return [this.colorUniform1, this.colorUniform2, this.colorUniform3, this.colorUniform4].filter(Boolean);
          }
        }, {
          key: "textureUniforms",
          get: function get() {
            return [this.textureUniform1, this.textureUniform2].filter(Boolean);
          }
        }], [{
          key: "instance",
          get: function get() {
            return this._i;
          }
        }]);
        return ColorTextureLibrary;
      }(Component), _class3._i = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "paletteColors", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "paletteTextures", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "colorUniform1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uColor1';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "colorUniform2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uColor2';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "colorUniform3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uColor3';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "colorUniform4", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uColor4';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "textureUniform1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uTex1';
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "textureUniform2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uTex2';
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "seed", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DebugPanelToggle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, setDisplayStats, systemEvent, SystemEvent, KeyCode, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      setDisplayStats = module.setDisplayStats;
      systemEvent = module.systemEvent;
      SystemEvent = module.SystemEvent;
      KeyCode = module.KeyCode;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "cfda1+1JjNMa47nVqaXXSGs", "DebugPanelToggle", undefined);
      var ccclass = _decorator.ccclass;
      var DebugPanelToggle3x = exports('DebugPanelToggle3x', (_dec = ccclass('DebugPanelToggle3x'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugPanelToggle3x, _Component);
        function DebugPanelToggle3x() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._debugVisible = false;
          return _this;
        }
        var _proto = DebugPanelToggle3x.prototype;
        _proto.start = function start() {
          // �� ��������� ��������� ������
          setDisplayStats(false);

          // ������� ������� P
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        };
        _proto.onKeyDown = function onKeyDown(event) {
          if (event.keyCode === KeyCode.KEY_P) {
            this._debugVisible = !this._debugVisible;
            setDisplayStats(this._debugVisible);
          }
        };
        _proto.onDestroy = function onDestroy() {
          systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        };
        return DebugPanelToggle3x;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalClickManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ClickMoveBinding.ts', './InteractionState.ts', './PointerIds.ts', './RotateYByKeys.ts', './TVS_SpawnLayout.ts', './TowerScrollController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Camera, Node, input, Input, geometry, PhysicsSystem, Vec3, tween, Component, ClickMoveBinding, InteractionState, MOUSE_ID, RotateYByKeys, TowerLayoutController, TowerScrollController;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Node = module.Node;
      input = module.input;
      Input = module.Input;
      geometry = module.geometry;
      PhysicsSystem = module.PhysicsSystem;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      ClickMoveBinding = module.ClickMoveBinding;
    }, function (module) {
      InteractionState = module.InteractionState;
    }, function (module) {
      MOUSE_ID = module.MOUSE_ID;
    }, function (module) {
      RotateYByKeys = module.RotateYByKeys;
    }, function (module) {
      TowerLayoutController = module.TowerLayoutController;
    }, function (module) {
      TowerScrollController = module.TowerScrollController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20;
      cclegacy._RF.push({}, "4bd86blOoRLpq75wEwnh3v5", "GlobalClickManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      function yawFromVecXZ(v) {
        return Math.atan2(v.x, v.z) * 180 / Math.PI;
      }
      function wrapDeg(delta) {
        var d = (delta + 180) % 360;
        if (d < 0) d += 360;
        return d - 180;
      }
      var State = /*#__PURE__*/function (State) {
        State["Idle"] = "Idle";
        State["Aligning"] = "Aligning";
        State["SlideOut"] = "SlideOut";
        State["LockedOut"] = "LockedOut";
        State["SlideIn"] = "SlideIn";
        return State;
      }(State || {});
      var GlobalClickManager3D = exports('GlobalClickManager3D', (_dec = ccclass('GlobalClickManager3D'), _dec2 = property({
        type: Camera
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: RotateYByKeys
      }), _dec5 = property({
        type: TowerLayoutController
      }), _dec6 = property({
        type: TowerScrollController
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        tooltip: 'Мировое расстояние выезда (ед.), одинаковое для всех уровней'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GlobalClickManager3D, _Component);
        function GlobalClickManager3D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // refs
          _initializerDefineProperty(_this, "sceneCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotatingRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotator", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layoutCtrl", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollCtrl", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bloor", _descriptor6, _assertThisInitialized(_this));
          // timings
          _initializerDefineProperty(_this, "heightCenterDuration", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "heightNudgeDuration", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotateDuration", _descriptor9, _assertThisInitialized(_this));
          // bias per level group
          _initializerDefineProperty(_this, "levelBiasTop", _descriptor10, _assertThisInitialized(_this));
          // уровни 0..1
          _initializerDefineProperty(_this, "levelBiasRest", _descriptor11, _assertThisInitialized(_this));
          // уровни ≥2
          // slide (компенсируем скейл)
          _initializerDefineProperty(_this, "openWorldDistance", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slideEasing", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slideDuration", _descriptor14, _assertThisInitialized(_this));
          // поворот корня по слоту
          _initializerDefineProperty(_this, "faceYawLocalDeg", _descriptor15, _assertThisInitialized(_this));
          // 0=лицо по +Z, 90=по +X
          _initializerDefineProperty(_this, "invertPieceAxis", _descriptor16, _assertThisInitialized(_this));
          // +180°
          _initializerDefineProperty(_this, "slotPhaseShift", _descriptor17, _assertThisInitialized(_this));
          // поворот МОДЕЛИ при открытии/закрытии
          _initializerDefineProperty(_this, "modelRotateDeg", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "modelRotateDuration", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "modelRotateEasing", _descriptor20, _assertThisInitialized(_this));
          // state
          _this.fsm = State.Idle;
          _this.clickedLevel = 0;
          _this.clickedSlot = 0;
          _this.currentPiece = null;
          _this.currentBinding = null;
          _this.baseLocalX = new Map();
          // для target
          _this.modelBaseYaw = new Map();
          // для model
          _this.rotateTween = null;
          _this.modelTween = null;
          return _this;
        }
        var _proto = GlobalClickManager3D.prototype;
        // input
        _proto.onEnable = function onEnable() {
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (!this.sceneCamera) return;
          if (this.fsm === State.LockedOut) {
            void this.closeAndInsert();
            return;
          }
          if (InteractionState.inGesture && InteractionState.source === 'mouse') return;
          var _InteractionState$try = InteractionState.tryEndGesture(e.getID(), 'touch'),
            ended = _InteractionState$try.ended,
            wasDragged = _InteractionState$try.wasDragged;
          if (!ended || wasDragged) return;
          var p = e.getLocation();
          void this.onClick(p.x, p.y);
        };
        _proto.onTouchCancel = function onTouchCancel(e) {
          InteractionState.tryEndGesture(e.getID(), 'touch');
        };
        _proto.onMouseUp = function onMouseUp(e) {
          if (!this.sceneCamera || e.getButton() !== 0) return;
          if (this.fsm === State.LockedOut) {
            void this.closeAndInsert();
            return;
          }
          if (InteractionState.inGesture && InteractionState.source === 'touch') return;
          var res = InteractionState.tryEndGesture(MOUSE_ID, 'mouse');
          if (res.wasDragged || InteractionState.consumeRecentDrag()) return;
          var p = e.getLocation();
          void this.onClick(p.x, p.y);
        }

        // click flow
        ;

        _proto.onClick = /*#__PURE__*/
        function () {
          var _onClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(x, y) {
            var _picked$binding$model;
            var picked, model, L, S, bias, step, targetHeight, resolved, owner, b;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(!this.sceneCamera || !this.rotatingRoot || !this.layoutCtrl || !this.scrollCtrl)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  if (!(this.fsm !== State.Idle)) {
                    _context.next = 4;
                    break;
                  }
                  return _context.abrupt("return");
                case 4:
                  picked = this.raycastToBindingNode(x, y);
                  if (picked) {
                    _context.next = 7;
                    break;
                  }
                  return _context.abrupt("return");
                case 7:
                  model = (_picked$binding$model = picked.binding.model) != null ? _picked$binding$model : picked.n;
                  L = this.layoutCtrl.getLevelForAny(model);
                  S = this.layoutCtrl.getSlotForAny(model);
                  if (!(L == null || S == null)) {
                    _context.next = 12;
                    break;
                  }
                  return _context.abrupt("return");
                case 12:
                  this.clickedLevel = L;
                  this.clickedSlot = S;
                  this.lockControls();
                  this.fsm = State.Aligning;

                  // 1) высота (с биасом)
                  bias = L <= 1 ? this.levelBiasTop : this.levelBiasRest;
                  step = this.layoutCtrl.getLevelStep();
                  targetHeight = (L + bias) * step;
                  _context.next = 21;
                  return this.scrollCtrl.scrollToHeightWithNudgeAsync(targetHeight, this.heightCenterDuration, this.heightNudgeDuration, 'quadOut', true);
                case 21:
                  _context.next = 23;
                  return this.rotateRootToBringSlotToCamera(this.clickedSlot);
                case 23:
                  // 3) берём актуальный видимый (на случай рециклинга)
                  resolved = this.layoutCtrl.findNodeByLevelSlot(this.clickedLevel, this.clickedSlot);
                  owner = resolved != null ? resolved : picked.n;
                  b = owner.getComponent(ClickMoveBinding) || owner.getComponentInChildren(ClickMoveBinding) || picked.binding;
                  this.currentPiece = owner;
                  this.currentBinding = b;

                  // 4) выезд (компенсация скейла) + включение бортика + поворот модели
                  _context.next = 30;
                  return this.slideOutWithScaleComp();
                case 30:
                  // включаем “бортик” сразу после начала открытия (можно перенести выше — по вкусу)
                  this.setRimActive(true);
                  _context.next = 33;
                  return this.rotateModelOpen();
                case 33:
                  this.bloor.active = true;
                  this.fsm = State.LockedOut;
                case 35:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onClick(_x, _x2) {
            return _onClick.apply(this, arguments);
          }
          return onClick;
        }();
        _proto.raycastToBindingNode = function raycastToBindingNode(sx, sy) {
          var ray = new geometry.Ray();
          this.sceneCamera.screenPointToRay(sx, sy, ray);
          if (!PhysicsSystem.instance.raycastClosest(ray)) return null;
          var n = PhysicsSystem.instance.raycastClosestResult.collider.node;
          var binding = null;
          while (n && !binding) {
            binding = n.getComponent(ClickMoveBinding) || null;
            if (!binding) n = n.parent;
          }
          return n && binding ? {
            n: n,
            binding: binding
          } : null;
        }

        // ==== поворот корня по слоту ====
        ;

        _proto.rotateRootToBringSlotToCamera = function rotateRootToBringSlotToCamera(slotIndex) {
          var _this2 = this;
          return new Promise(function (resolve) {
            var _this2$rotator;
            if (!_this2.rotatingRoot || !_this2.sceneCamera || !_this2.layoutCtrl) {
              resolve();
              return;
            }

            // yaw камеры относительно корня
            var root = _this2.rotatingRoot;
            var rootPos = root.worldPosition;
            var camPos = _this2.sceneCamera.node.worldPosition;
            var toCam = new Vec3(camPos.x - rootPos.x, 0, camPos.z - rootPos.z);
            if (toCam.length() < 1e-4) {
              resolve();
              return;
            }
            toCam.normalize();
            var camYaw = yawFromVecXZ(toCam);
            var stepDeg = _this2.layoutCtrl.spawn.angleStep;
            var per = Math.max(1, _this2.layoutCtrl.spawn.objectsPerLevel);
            var sShift = ((slotIndex + _this2.slotPhaseShift) % per + per) % per;
            var faceLocal = _this2.faceYawLocalDeg + (_this2.invertPieceAxis ? 180 : 0);
            var targetRootYaw = camYaw - (sShift * stepDeg + faceLocal);

            // нормализация старта и короткой дельты
            var e0 = root.eulerAngles;
            var startYaw = (e0.y % 360 + 360) % 360;
            var delta = wrapDeg(targetRootYaw - startYaw);
            if (Math.abs(delta) < 0.05 || _this2.rotateDuration <= 0) {
              root.setRotationFromEuler(e0.x, startYaw + delta, e0.z);
              resolve();
              return;
            }
            (_this2$rotator = _this2.rotator) == null || _this2$rotator.stopInertia();
            if (_this2.rotateTween) {
              _this2.rotateTween.stop();
              _this2.rotateTween = null;
            }
            var drv = {
              t: 0
            };
            _this2.rotateTween = tween(drv).to(_this2.rotateDuration, {
              t: 1
            }, {
              easing: 'quadOut',
              onUpdate: function onUpdate() {
                var y = startYaw + delta * drv.t;
                root.setRotationFromEuler(e0.x, y, e0.z);
              }
            }).call(function () {
              _this2.rotateTween = null;
              resolve();
            }).start();
          });
        }

        // ==== выезд с компенсацией скейла ====
        ;

        _proto.slideOutWithScaleComp = /*#__PURE__*/
        function () {
          var _slideOutWithScaleComp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this$currentBinding$, _parent$worldScale$x;
            var target, parent, sx, localDx, baseX, toX;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this.currentPiece || !this.currentBinding)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  target = (_this$currentBinding$ = this.currentBinding.target) != null ? _this$currentBinding$ : this.currentPiece; // мир.смещение = openWorldDistance → локальное ΔX = world / scaleX(parentToWorld)
                  parent = target.parent;
                  sx = (_parent$worldScale$x = parent == null ? void 0 : parent.worldScale.x) != null ? _parent$worldScale$x : 1; // у нас скейл равномерен → x=y=z
                  localDx = this.openWorldDistance / Math.max(1e-6, sx);
                  if (!this.baseLocalX.has(target)) this.baseLocalX.set(target, target.position.x);
                  baseX = this.baseLocalX.get(target);
                  toX = baseX + localDx;
                  _context2.next = 11;
                  return this.tweenLocalX(target, toX, this.slideDuration, this.slideEasing);
                case 11:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function slideOutWithScaleComp() {
            return _slideOutWithScaleComp.apply(this, arguments);
          }
          return slideOutWithScaleComp;
        }();
        _proto.setRimActive = function setRimActive(active) {
          var _this$currentBinding;
          var rim = (_this$currentBinding = this.currentBinding) == null ? void 0 : _this$currentBinding.rim;
          if (rim && rim.active !== active) rim.active = active;
        };
        _proto.setRimActiveFor = function setRimActiveFor(binding, active) {
          var rim = binding == null ? void 0 : binding.rim;
          if (rim && rim.active !== active) rim.active = active;
        };
        _proto.closeAndInsert = /*#__PURE__*/function () {
          var _closeAndInsert = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this$currentBinding$2, _this$baseLocalX$get, target, baseX;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(this.fsm !== State.LockedOut)) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return");
                case 2:
                  this.fsm = State.SlideIn;
                  this.bloor.active = false;
                  // 1) вернуть модель в базовый угол
                  _context3.next = 6;
                  return this.rotateModelClose();
                case 6:
                  // 2) выключить “бортик”
                  this.setRimActive(false);

                  // 3) задвинуть назад
                  if (!(this.currentPiece && this.currentBinding)) {
                    _context3.next = 12;
                    break;
                  }
                  target = (_this$currentBinding$2 = this.currentBinding.target) != null ? _this$currentBinding$2 : this.currentPiece;
                  baseX = (_this$baseLocalX$get = this.baseLocalX.get(target)) != null ? _this$baseLocalX$get : target.position.x;
                  _context3.next = 12;
                  return this.tweenLocalX(target, baseX, this.slideDuration, this.slideEasing);
                case 12:
                  this.unlockControls();
                  this.currentPiece = null;
                  this.currentBinding = null;
                  this.fsm = State.Idle;
                case 16:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function closeAndInsert() {
            return _closeAndInsert.apply(this, arguments);
          }
          return closeAndInsert;
        }();
        _proto.tweenLocalX = function tweenLocalX(node, toX, duration, easing) {
          return new Promise(function (resolve) {
            var startX = node.position.x;
            if (Math.abs(toX - startX) < 1e-4 || duration <= 0) {
              var p = node.position.clone();
              p.x = toX;
              node.setPosition(p);
              resolve();
              return;
            }
            var start = node.position.clone();
            var drv = {
              t: 0
            };
            tween(drv).to(duration, {
              t: 1
            }, {
              easing: easing,
              onUpdate: function onUpdate() {
                var p = node.position.clone();
                p.x = start.x + (toX - start.x) * drv.t;
                node.setPosition(p);
              }
            }).call(function () {
              return resolve();
            }).start();
          });
        }

        // ==== поворот МОДЕЛИ на +90° и обратно ====
        ;

        _proto.rotateModelOpen = /*#__PURE__*/
        function () {
          var _rotateModelOpen = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var model, base;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (this.currentBinding) {
                    _context4.next = 2;
                    break;
                  }
                  return _context4.abrupt("return");
                case 2:
                  model = this.currentBinding.model;
                  if (model) {
                    _context4.next = 5;
                    break;
                  }
                  return _context4.abrupt("return");
                case 5:
                  if (!this.modelBaseYaw.has(model)) this.modelBaseYaw.set(model, model.eulerAngles.y);
                  base = this.modelBaseYaw.get(model);
                  _context4.next = 9;
                  return this.rotateModelTo(model, base + this.modelRotateDeg, this.modelRotateDuration, this.modelRotateEasing);
                case 9:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function rotateModelOpen() {
            return _rotateModelOpen.apply(this, arguments);
          }
          return rotateModelOpen;
        }();
        _proto.rotateModelClose = /*#__PURE__*/function () {
          var _rotateModelClose = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var _this$modelBaseYaw$ge;
            var model, base;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (this.currentBinding) {
                    _context5.next = 2;
                    break;
                  }
                  return _context5.abrupt("return");
                case 2:
                  model = this.currentBinding.model;
                  if (model) {
                    _context5.next = 5;
                    break;
                  }
                  return _context5.abrupt("return");
                case 5:
                  base = (_this$modelBaseYaw$ge = this.modelBaseYaw.get(model)) != null ? _this$modelBaseYaw$ge : model.eulerAngles.y;
                  _context5.next = 8;
                  return this.rotateModelTo(model, base, this.modelRotateDuration, this.modelRotateEasing);
                case 8:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function rotateModelClose() {
            return _rotateModelClose.apply(this, arguments);
          }
          return rotateModelClose;
        }();
        _proto.rotateModelTo = function rotateModelTo(model, targetYaw, duration, easing) {
          var _this3 = this;
          return new Promise(function (resolve) {
            var e0 = model.eulerAngles;
            var startYaw = (e0.y % 360 + 360) % 360;
            var delta = wrapDeg(targetYaw - startYaw);
            if (Math.abs(delta) < 0.05 || duration <= 0) {
              model.setRotationFromEuler(e0.x, startYaw + delta, e0.z);
              resolve();
              return;
            }
            if (_this3.modelTween) {
              _this3.modelTween.stop();
              _this3.modelTween = null;
            }
            var drv = {
              t: 0
            };
            _this3.modelTween = tween(drv).to(duration, {
              t: 1
            }, {
              easing: easing,
              onUpdate: function onUpdate() {
                var y = startYaw + delta * drv.t;
                model.setRotationFromEuler(e0.x, y, e0.z);
              }
            }).call(function () {
              _this3.modelTween = null;
              resolve();
            }).start();
          });
        }

        // utils
        ;

        _proto.lockControls = function lockControls() {
          var _this$rotator, _this$scrollCtrl;
          (_this$rotator = this.rotator) == null || _this$rotator.stopInertia();
          if (this.rotator) this.rotator.enabled = false;
          (_this$scrollCtrl = this.scrollCtrl) == null || _this$scrollCtrl.setInputEnabled(true); // пусть колесо/клавиши не мешают, но твин рулит
          InteractionState.hardReset == null || InteractionState.hardReset();
        };
        _proto.unlockControls = function unlockControls() {
          var _this$scrollCtrl2;
          if (this.rotator) this.rotator.enabled = true;
          (_this$scrollCtrl2 = this.scrollCtrl) == null || _this$scrollCtrl2.setInputEnabled(true);
          InteractionState.hardReset == null || InteractionState.hardReset();
        };
        return GlobalClickManager3D;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sceneCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rotatingRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rotator", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "layoutCtrl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scrollCtrl", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bloor", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "heightCenterDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.35;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "heightNudgeDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.10;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "rotateDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.35;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "levelBiasTop", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -3;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "levelBiasRest", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -4;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "openWorldDistance", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.6;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "slideEasing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'quadOut';
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "slideDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "faceYawLocalDeg", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "invertPieceAxis", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "slotPhaseShift", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "modelRotateDeg", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 90;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "modelRotateDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "modelRotateEasing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'quadOut';
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InteractionState.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "85bc8piAeJIyrMBDWo80N4k", "InteractionState", undefined);
      var InteractionState = exports('InteractionState', /*#__PURE__*/function () {
        function InteractionState() {}
        /** Подсмотреть, был ли недавно drag (без поглощения флага) */
        InteractionState.peekRecentDrag = function peekRecentDrag(windowMs) {
          if (windowMs === void 0) {
            windowMs = InteractionState.DRAG_LATCH_MS;
          }
          if (!this.lastEndWasDragged) return false;
          return Date.now() - this.lastEndAtMs <= windowMs;
        }
        /** Узнать и поглотить флаг "недавний drag", чтобы следующий обработчик его не увидел */;
        InteractionState.consumeRecentDrag = function consumeRecentDrag(windowMs) {
          if (windowMs === void 0) {
            windowMs = InteractionState.DRAG_LATCH_MS;
          }
          var ok = this.peekRecentDrag(windowMs);
          if (ok) {
            this.lastEndWasDragged = false;
            this.lastEndAtMs = 0;
          }
          return ok;
        };
        InteractionState.beginGesture = function beginGesture(id, source) {
          if (this.inGesture) return; // уже кто-то ведёт жест — игнор
          this.inGesture = true;
          this.ended = false; // жест начался
          this.activeId = id;
          this.source = source;
          this.draggedInGesture = false;
          this.isRotating = false;
          // сбрасываем latch при старте нового жеста
          this.lastEndWasDragged = false;
          this.lastEndAtMs = 0;
        };
        InteractionState.markDrag = function markDrag(id) {
          if (!this.inGesture || this.ended) return;
          if (this.activeId !== id) return;
          this.draggedInGesture = true;
          this.isRotating = true;
        }

        /**
         * Идемпотентное завершение жеста:
         * - Если жеста уже нет, возвращаем ended:true и пробрасываем wasDragged по "лячу" недавнего драга.
         * - Если это наш жест — завершаем строго и лочим флаг "недавний drag" на DRAG_LATCH_MS.
         * - Если частично совпало (id или source) — мягко завершаем (лечит рассинхроны).
         */;
        InteractionState.tryEndGesture = function tryEndGesture(id, source) {
          // 0) Жеста нет — сообщаем "уже завершено", но учитываем недавний drag
          if (!this.inGesture) {
            return {
              ended: true,
              wasDragged: this.peekRecentDrag()
            };
          }

          // 1) Строгое совпадение: наш id и наш source
          if (this.activeId === id && this.source === source) {
            var wasDragged = this.draggedInGesture;
            this._finalizeWithLatch(wasDragged);
            return {
              ended: true,
              wasDragged: wasDragged
            };
          }

          // 2) Мягкое завершение при частичном совпадении (на случай рассинхрона)
          if (this.source === source || this.activeId === id) {
            var _wasDragged = this.draggedInGesture;
            this._finalizeWithLatch(_wasDragged);
            return {
              ended: true,
              wasDragged: _wasDragged
            };
          }

          // 3) Совсем чужой вызов — игнор
          return {
            ended: false,
            wasDragged: false
          };
        }

        /** Жёсткий сброс до покоя (зови при старте сцены/компонента) */;
        InteractionState.hardReset = function hardReset() {
          this.inGesture = false;
          this.activeId = null;
          this.source = null;
          this.draggedInGesture = false;
          this.isRotating = false;
          this.ended = true;
          // сбросим latch тоже
          this.lastEndWasDragged = false;
          this.lastEndAtMs = 0;
        };
        InteractionState._finalizeWithLatch = function _finalizeWithLatch(wasDragged) {
          this.inGesture = false;
          this.ended = true;
          this.activeId = null;
          this.source = null;
          this.draggedInGesture = false;
          this.isRotating = false;

          // зафиксируем "недавний drag" для обработчиков, которые сработают следом
          this.lastEndWasDragged = !!wasDragged;
          this.lastEndAtMs = Date.now();
        };
        return InteractionState;
      }());
      InteractionState.inGesture = false;
      InteractionState.activeId = null;
      InteractionState.source = null;
      InteractionState.draggedInGesture = false;
      InteractionState.isRotating = false;
      // Состояние покоя по умолчанию
      InteractionState.ended = true;
      // === Latch: "недавно был drag" (для гонок между end и обработкой клика)
      InteractionState.lastEndWasDragged = false;
      InteractionState.lastEndAtMs = 0;
      /** Сколько времени считаем событие "недавним" */
      InteractionState.DRAG_LATCH_MS = 160;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./ArcTextMesh.ts', './AddCake.ts', './AutoScaleCameraPosition.ts', './CakeApiExample.ts', './ClickMoveBinding.ts', './ColorLibrary.ts', './GlobalClickManager.ts', './InteractionState.ts', './PointerIds.ts', './RotateYByKeys.ts', './StartApp.ts', './TVS_SpawnLayout.ts', './TowerScrollController.ts', './DebugPanelToggle.ts', './PieceSpawner.ts', './TowerQueriesTester.ts', './cake.types.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PieceSpawner.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ColorLibrary.ts', './ClickMoveBinding.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Prefab, instantiate, Vec3, Component, ColorTextureLibrary, ClickMoveBinding;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      ColorTextureLibrary = module.ColorTextureLibrary;
    }, function (module) {
      ClickMoveBinding = module.ClickMoveBinding;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "7c11fA6KKdNXKI0ygDDYDbj", "PieceSpawner", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode,
        menu = _decorator.menu;
      var PieceSpawner = exports('PieceSpawner', (_dec = ccclass('PieceSpawner'), _dec2 = executeInEditMode(), _dec3 = menu('Custom/Piece Spawner'), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: ColorTextureLibrary,
        tooltip: 'Библиотека цветов/текстур'
      }), _dec6 = property({
        tooltip: 'Индекс материала в MeshRenderer'
      }), _dec7 = property({
        group: {
          name: 'Editor'
        }
      }), _dec8 = property({
        group: {
          name: 'Editor'
        }
      }), _dec9 = property({
        group: {
          name: 'Editor'
        }
      }), _dec10 = property({
        visible: true,
        group: {
          name: 'Editor'
        }
      }), _dec11 = property({
        visible: true,
        group: {
          name: 'Editor'
        }
      }), _dec12 = property({
        visible: true,
        group: {
          name: 'Editor'
        }
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PieceSpawner, _Component);
        function PieceSpawner() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "prefab", _descriptor, _assertThisInitialized(_this));
          // 👇 Добавляем явную ссылку на библиотеку цветов (перетащить в инспекторе)
          _initializerDefineProperty(_this, "colorLib", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "totalObjects", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "objectsPerLevel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "angleStep", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseScale", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelScaleFactor", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseHeight", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelPadding", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "materialIndex", _descriptor10, _assertThisInitialized(_this));
          // ==== Псевдо-кнопки в инспекторе ====
          _initializerDefineProperty(_this, "_spawnNow", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_clearNow", _descriptor12, _assertThisInitialized(_this));
          // необязательно, но удобно: перекрасить без пересоздания
          _initializerDefineProperty(_this, "_recolorNow", _descriptor13, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PieceSpawner.prototype;
        // ==== конец блока псевдо-кнопок ====
        _proto.start = function start() {
          this.spawnObjects();
        };
        _proto.clearSpawned = function clearSpawned() {
          this.node.removeAllChildren();
        };
        _proto.levelYOffset = function levelYOffset(level) {
          if (level <= 0) return 0;
          var H0 = this.baseHeight * this.baseScale;
          var f = this.levelScaleFactor;
          var sumHeights = Math.abs(1 - f) < 1e-6 ? level * H0 : H0 * (1 - Math.pow(f, level)) / (1 - f);
          return sumHeights + level * this.levelPadding;
        };
        _proto.getLib = function getLib() {
          var _ref, _this$colorLib;
          return (_ref = (_this$colorLib = this.colorLib) != null ? _this$colorLib : ColorTextureLibrary.instance) != null ? _ref : null;
        };
        _proto.spawnObjects = function spawnObjects() {
          if (!this.prefab) {
            console.warn('Prefab не назначен!');
            return;
          }
          for (var i = 0; i < this.totalObjects; i++) {
            var level = Math.floor(i / this.objectsPerLevel);
            var scale = this.baseScale * Math.pow(this.levelScaleFactor, level);
            var obj = instantiate(this.prefab);
            obj.name = "Piece_" + i;
            obj.setParent(this.node);
            var y = this.levelYOffset(level);
            obj.setPosition(new Vec3(0, y, 0));
            obj.setRotationFromEuler(new Vec3(0, i * this.angleStep, 0));
            obj.setScale(scale, scale, scale);
            this.applyColorToNode(obj);
          }
        };
        _proto.applyColorsToChildren = function applyColorsToChildren() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.node.children), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            this.applyColorToNode(child);
          }
        };
        _proto.applyColorToNode = function applyColorToNode(n) {
          var binding = n.getComponent(ClickMoveBinding);
          var lib = this.getLib();
          if (!(binding != null && binding.meshRenderer) || !lib) return;

          // важно для редактора: использовать материал-инстанс, чтобы не трогать shared material
          var mr = binding.meshRenderer;
          // getMaterialInstance создаёт инстанс для пер-объектных правок
          mr.getMaterialInstance(this.materialIndex);
          lib.applyRandomSet(mr, this.materialIndex);
        };
        _createClass(PieceSpawner, [{
          key: "SpawnInEditor",
          get: function get() {
            return this._spawnNow;
          },
          set: function set(v) {
            if (!v) return;
            this.clearSpawned();
            this.spawnObjects();
            this._spawnNow = false;
          }
        }, {
          key: "ClearSpawned",
          get: function get() {
            return this._clearNow;
          },
          set: function set(v) {
            if (!v) return;
            this.clearSpawned();
            this._clearNow = false;
          }
        }, {
          key: "RecolorInEditor",
          get: function get() {
            return this._recolorNow;
          },
          set: function set(v) {
            if (!v) return;
            this.applyColorsToChildren();
            this._recolorNow = false;
          }
        }]);
        return PieceSpawner;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "colorLib", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "totalObjects", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 24;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "objectsPerLevel", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "angleStep", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 45;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "baseScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "levelScaleFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.9;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "baseHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "levelPadding", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "materialIndex", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_spawnNow", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_clearNow", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_recolorNow", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "SpawnInEditor", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "SpawnInEditor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "ClearSpawned", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "ClearSpawned"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "RecolorInEditor", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "RecolorInEditor"), _class2.prototype)), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PointerIds.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "13922PSQAhJcJjhZ5FF88EN", "PointerIds", undefined);
      // PointerIds.ts
      var MOUSE_ID = exports('MOUSE_ID', -1); // ������ �������� ������
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RotateYByKeys.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './InteractionState.ts', './PointerIds.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, input, Input, KeyCode, Component, InteractionState, MOUSE_ID;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      Component = module.Component;
    }, function (module) {
      InteractionState = module.InteractionState;
    }, function (module) {
      MOUSE_ID = module.MOUSE_ID;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "717452jV8ZDv7JZnElpm+X0", "RotateYByKeys", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RotateYByKeys = exports('RotateYByKeys', (_dec = ccclass('RotateYByKeys'), _dec2 = property({
        tooltip: 'Скорость вращения от клавиш (град/сек)'
      }), _dec3 = property({
        tooltip: 'Чувствительность драга: градусов на 1 пиксель'
      }), _dec4 = property({
        tooltip: 'Порог пикселей, после которого считаем жест drag'
      }), _dec5 = property({
        tooltip: 'Мёртвая зона по углу: пока |Δугол| меньше — не вращаем'
      }), _dec6 = property({
        tooltip: 'Плавность вращения (сек) — и разгон, и отпускание'
      }), _dec7 = property({
        tooltip: 'Инвертировать направление вращения'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RotateYByKeys, _Component);
        function RotateYByKeys() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rotateSpeed", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "degPerPixel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragThreshold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startMoveOffsetDeg", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "angularSmoothTime", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "invert", _descriptor6, _assertThisInitialized(_this));
          // --- клавиатура
          _this.keyDir = 0;
          _this.kbAccumDeg = 0;
          _this.kbActive = false;
          // --- тач
          _this.activeTouchId = null;
          _this.touchStartX = null;
          _this.touchLastX = null;
          _this.touchDragging = false;
          _this.touchAccumDeg = 0;
          _this.touchActive = false;
          _this.touchClaimed = false;
          // --- мышь
          _this.mouseHeld = false;
          _this.mouseStartX = null;
          _this.mouseLastX = null;
          _this.mouseDragging = false;
          _this.mouseAccumDeg = 0;
          _this.mouseActive = false;
          _this.mouseClaimed = false;
          // --- инерция
          _this.angVel = 0;
          // град/сек
          _this.pendingDegFromPointer = 0;
          return _this;
        }
        var _proto = RotateYByKeys.prototype;
        // градусы за кадр из поинтера
        _proto._resetInteractionIfStuck = function _resetInteractionIfStuck() {
          InteractionState.hardReset();
        }

        /** Остановить инерцию и сбросить накопленный ввод указателя (для автоповорота). */;
        _proto.stopInertia = function stopInertia() {
          this.angVel = 0;
          this.pendingDegFromPointer = 0;
          this.keyDir = 0;
          this.kbAccumDeg = 0;
          this.kbActive = false;
          this.mouseHeld = false;
          this.mouseDragging = false;
          this.mouseAccumDeg = 0;
          this.mouseActive = false;
          this.mouseClaimed = false;
          this.touchDragging = false;
          this.touchAccumDeg = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        };
        _proto.onEnable = function onEnable() {
          this._resetInteractionIfStuck();
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        }

        // === клавиатура
        ;

        _proto.onKeyDown = function onKeyDown(e) {
          if (e.keyCode === KeyCode.KEY_A) this.keyDir = -1;else if (e.keyCode === KeyCode.KEY_D) this.keyDir = 1;
        };
        _proto.onKeyUp = function onKeyUp(e) {
          var wasDir = e.keyCode === KeyCode.KEY_A && this.keyDir === -1 || e.keyCode === KeyCode.KEY_D && this.keyDir === 1;
          if (wasDir) {
            this.keyDir = 0;
            this.kbAccumDeg = 0;
            this.kbActive = false;
          }
        }

        // === тач (ленивый захват)
        ;

        _proto.onTouchStart = function onTouchStart(e) {
          if (InteractionState.inGesture && InteractionState.source === 'touch') return;
          if (this.activeTouchId !== null) return;
          var id = e.getID();
          this.activeTouchId = id;
          var x = e.getLocationX();
          this.touchStartX = x;
          this.touchLastX = x;
          this.touchDragging = false;
          this.touchAccumDeg = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        };
        _proto.onTouchMove = function onTouchMove(e) {
          var id = e.getID();
          if (this.activeTouchId !== id || this.touchLastX === null || this.touchStartX === null) return;
          if (InteractionState.inGesture && InteractionState.source === 'touch' && !this.touchClaimed) return;
          var x = e.getLocationX();
          var dxIncPx = x - this.touchLastX;
          var totalPx = x - this.touchStartX;
          this.touchLastX = x;
          if (!this.touchDragging && Math.abs(totalPx) >= this.dragThreshold) this.touchDragging = true;
          if (dxIncPx === 0) return;
          var sign = this.invert ? -1 : 1;
          var dxIncDeg = dxIncPx * this.degPerPixel * sign;
          if (!this.touchActive) {
            this.touchAccumDeg += dxIncDeg;
            if (this.touchDragging && Math.abs(this.touchAccumDeg) >= this.startMoveOffsetDeg) {
              if (!InteractionState.inGesture) {
                this.touchActive = true;
                InteractionState.beginGesture(id, 'touch');
                this.touchClaimed = true;
                InteractionState.markDrag(id);
              } else {
                return;
              }
            } else {
              return;
            }
          }
          if (this.touchClaimed) {
            this.pendingDegFromPointer += dxIncDeg;
          }
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (this.activeTouchId !== e.getID()) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(e.getID(), 'touch');
          this.activeTouchId = null;
          this.touchStartX = this.touchLastX = null;
          this.touchDragging = false;
          this.touchAccumDeg = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        };
        _proto.onTouchCancel = function onTouchCancel(e) {
          if (this.activeTouchId !== e.getID()) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(e.getID(), 'touch');
          this.activeTouchId = null;
          this.touchStartX = this.touchLastX = null;
          this.touchDragging = false;
          this.touchAccumDeg = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        }

        // === мышь (ленивый захват)
        ;

        _proto.onMouseDown = function onMouseDown(e) {
          if (e.getButton() !== 0) return;
          this.mouseHeld = true;
          var x = e.getLocationX();
          this.mouseStartX = x;
          this.mouseLastX = x;
          this.mouseDragging = false;
          this.mouseAccumDeg = 0;
          this.mouseActive = false;
          this.mouseClaimed = false;
        };
        _proto.onMouseMove = function onMouseMove(e) {
          if (!this.mouseHeld || this.mouseLastX === null || this.mouseStartX === null) return;
          var x = e.getLocationX();
          var dxIncPx = x - this.mouseLastX;
          var totalPx = x - this.mouseStartX;
          this.mouseLastX = x;
          if (!this.mouseDragging && Math.abs(totalPx) >= this.dragThreshold) this.mouseDragging = true;
          if (dxIncPx === 0) return;
          var sign = this.invert ? -1 : 1;
          var dxIncDeg = dxIncPx * this.degPerPixel * sign;
          if (!this.mouseActive) {
            this.mouseAccumDeg += dxIncDeg;
            if (this.mouseDragging && Math.abs(this.mouseAccumDeg) >= this.startMoveOffsetDeg) {
              this.mouseActive = true;
              if (!InteractionState.inGesture) {
                InteractionState.beginGesture(MOUSE_ID, 'mouse');
                this.mouseClaimed = true;
              }
              InteractionState.markDrag(MOUSE_ID);
            } else {
              return;
            }
          }
          this.pendingDegFromPointer += dxIncDeg;
        };
        _proto.onMouseUp = function onMouseUp(e) {
          if (e.getButton() !== 0) return;
          if (this.mouseClaimed) InteractionState.tryEndGesture(MOUSE_ID, 'mouse');
          this.mouseHeld = false;
          this.mouseStartX = this.mouseLastX = null;
          this.mouseDragging = false;
          this.mouseAccumDeg = 0;
          this.mouseActive = false;
          this.mouseClaimed = false;
        }

        // === апдейт / инерция
        ;

        _proto.update = function update(dt) {
          var sign = this.invert ? -1 : 1;
          if (this.keyDir !== 0) {
            if (!this.kbActive) {
              this.kbAccumDeg += Math.abs(this.rotateSpeed * dt);
              if (this.kbAccumDeg >= this.startMoveOffsetDeg) this.kbActive = true;
            }
          } else {
            this.kbAccumDeg = 0;
            this.kbActive = false;
          }
          var keyboardTargetVel = this.keyDir !== 0 && this.kbActive ? this.rotateSpeed * this.keyDir * sign : 0;
          var pointerTargetVel = this.pendingDegFromPointer / Math.max(dt, 1e-5);
          this.pendingDegFromPointer = 0;
          var targetVel = keyboardTargetVel + pointerTargetVel;
          var k = this.angularSmoothTime > 0 ? 1 - Math.exp(-dt / this.angularSmoothTime) : 1;
          this.angVel += (targetVel - this.angVel) * k;
          if (this.angVel !== 0) {
            var euler = this.node.eulerAngles;
            euler.y += this.angVel * dt;
            this.node.setRotationFromEuler(euler);
          }
          var localActive = this.mouseActive || this.touchActive || this.keyDir !== 0 && this.kbActive;
          if (!InteractionState.inGesture && !localActive && InteractionState.isRotating) {
            InteractionState.isRotating = false;
          }
          if (!localActive && Math.abs(this.angVel) < 0.05) this.angVel = 0;
        };
        return RotateYByKeys;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 90;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "degPerPixel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dragThreshold", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "startMoveOffsetDeg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "angularSmoothTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.15;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "invert", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StartApp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, game, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      game = module.game;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "03b4cr8mr5ANqGQ5koPtIAX", "StartApp", undefined);
      var ccclass = _decorator.ccclass;
      var UncapFPS = exports('UncapFPS', (_dec = ccclass('UncapFPS'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UncapFPS, _Component);
        function UncapFPS() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = UncapFPS.prototype;
        _proto.start = function start() {
          // ������ 240 fps (������� "��������")
          // ������ ���������� �������� �� ����������� ��������� ������� �������
          game.setFrameRate(240);
        };
        return UncapFPS;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TowerQueriesTester.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TVS_SpawnLayout.ts', './GlobalClickManager.ts', './ClickMoveBinding.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, TowerLayoutController, GlobalClickManager3D, ClickMoveBinding;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      TowerLayoutController = module.TowerLayoutController;
    }, function (module) {
      GlobalClickManager3D = module.GlobalClickManager3D;
    }, function (module) {
      ClickMoveBinding = module.ClickMoveBinding;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "3f79avZs1VNjqUdXTzvv1Oa", "TowerQueriesTester", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var OpenPieceBridge = exports('OpenPieceBridge', (_dec = ccclass('OpenPieceBridge'), _dec2 = property({
        type: TowerLayoutController
      }), _dec3 = property({
        type: GlobalClickManager3D
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(OpenPieceBridge, _Component);
        function OpenPieceBridge() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "layoutCtrl", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickMgr", _descriptor2, _assertThisInitialized(_this));
          // Разрешённые origin родителя (оставь пустым Set — принимать от любого на свой риск)
          _this.allowedParents = new Set([
            // 'https://taduar2001.github.io',
          ]);
          _this.lastBusy = null;
          // ===== message handler =====
          _this.onMessage = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
            var data, _this$layoutCtrl$getP, _this$layoutCtrl, count, ok, _data$payload$userId, _data$payload, userId, _ok, _ok2;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(_this.allowedParents.size && !_this.allowedParents.has(e.origin))) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  data = e.data || {};
                  _context.t0 = data.type;
                  _context.next = _context.t0 === 'QUERY_BUSY' ? 6 : _context.t0 === 'QUERY_INFO' ? 8 : _context.t0 === 'OPEN_RANDOM' ? 11 : _context.t0 === 'OPEN_BY_USER' ? 16 : _context.t0 === 'CLOSE_OPENED' ? 22 : 27;
                  break;
                case 6:
                  _this.reply(e, 'BUSY_STATE', {
                    busy: _this.isBusy()
                  });
                  return _context.abrupt("break", 27);
                case 8:
                  count = (_this$layoutCtrl$getP = (_this$layoutCtrl = _this.layoutCtrl) == null || _this$layoutCtrl.getPiecesCount == null ? void 0 : _this$layoutCtrl.getPiecesCount()) != null ? _this$layoutCtrl$getP : 0;
                  _this.reply(e, 'INFO', {
                    piecesCount: count
                  });
                  return _context.abrupt("break", 27);
                case 11:
                  _context.next = 13;
                  return _this.openRandom();
                case 13:
                  ok = _context.sent;
                  _this.reply(e, 'OPEN_RESULT', {
                    ok: ok,
                    mode: 'random'
                  });
                  return _context.abrupt("break", 27);
                case 16:
                  userId = (_data$payload$userId = data == null || (_data$payload = data.payload) == null ? void 0 : _data$payload.userId) != null ? _data$payload$userId : '';
                  _context.next = 19;
                  return _this.openByUserId(userId);
                case 19:
                  _ok = _context.sent;
                  _this.reply(e, 'OPEN_RESULT', {
                    ok: _ok,
                    mode: 'byUser',
                    userId: userId
                  });
                  return _context.abrupt("break", 27);
                case 22:
                  _context.next = 24;
                  return _this.closeOpened();
                case 24:
                  _ok2 = _context.sent;
                  _this.reply(e, 'CLOSE_RESULT', {
                    ok: _ok2
                  });
                  return _context.abrupt("break", 27);
                case 27:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return _this;
        }
        var _proto = OpenPieceBridge.prototype;
        // чтобы отсылать BUSY_STATE только при изменении
        _proto.onEnable = function onEnable() {
          this.safePostToParent({
            type: 'IFRAME_READY'
          });
          window.addEventListener('message', this.onMessage);
        };
        _proto.onDisable = function onDisable() {
          window.removeEventListener('message', this.onMessage);
        }

        // === notify parent on BUSY changes ===
        ;

        _proto.update = function update() {
          var busy = this.isBusy();
          if (busy !== this.lastBusy) {
            this.lastBusy = busy;
            this.safePostToParent({
              type: 'BUSY_STATE',
              payload: {
                busy: busy
              }
            });
          }
        }

        // ===== postMessage helpers =====
        ;

        _proto.safePostToParent = function safePostToParent(msg, targetOrigin) {
          if (targetOrigin === void 0) {
            targetOrigin = '*';
          }
          try {
            var _window$parent;
            (_window$parent = window.parent) == null || _window$parent.postMessage(msg, targetOrigin);
          } catch (_unused) {}
        };
        _proto.reply = function reply(e, type, payload) {
          this.safePostToParent({
            type: type,
            payload: payload
          }, e.origin || '*');
        };
        // ===== state helpers =====
        _proto.isBusy = function isBusy() {
          var cm = this.clickMgr;
          return !cm || cm.fsm !== 'Idle';
        }

        // ===== actions =====
        ;

        _proto.openRandom = /*#__PURE__*/
        function () {
          var _openRandom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var lc, cm, seed, rnd;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  lc = this.layoutCtrl;
                  cm = this.clickMgr;
                  if (!(!lc || !cm || !cm.scrollCtrl || !cm.rotatingRoot || !cm.sceneCamera)) {
                    _context2.next = 4;
                    break;
                  }
                  return _context2.abrupt("return", false);
                case 4:
                  if (!(cm.fsm !== 'Idle')) {
                    _context2.next = 6;
                    break;
                  }
                  return _context2.abrupt("return", false);
                case 6:
                  seed = Math.random() * 0xFFFFFFFF >>> 0;
                  rnd = lc.scrollToRandomPiece({
                    duration: cm.heightCenterDuration,
                    easing: 'quadOut',
                    clamp: true,
                    seed: seed
                  });
                  if (rnd) {
                    _context2.next = 10;
                    break;
                  }
                  return _context2.abrupt("return", false);
                case 10:
                  _context2.next = 12;
                  return this.openAt(rnd.level, rnd.slot);
                case 12:
                  return _context2.abrupt("return", _context2.sent);
                case 13:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function openRandom() {
            return _openRandom.apply(this, arguments);
          }
          return openRandom;
        }();
        _proto.openByUserId = /*#__PURE__*/function () {
          var _openByUserId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(userId) {
            var lc, cm, q, hit;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  lc = this.layoutCtrl;
                  cm = this.clickMgr;
                  if (!(!lc || !cm || !cm.scrollCtrl || !cm.rotatingRoot || !cm.sceneCamera)) {
                    _context3.next = 4;
                    break;
                  }
                  return _context3.abrupt("return", false);
                case 4:
                  if (!(cm.fsm !== 'Idle')) {
                    _context3.next = 6;
                    break;
                  }
                  return _context3.abrupt("return", false);
                case 6:
                  q = (userId != null ? userId : '').trim();
                  if (q) {
                    _context3.next = 9;
                    break;
                  }
                  return _context3.abrupt("return", false);
                case 9:
                  hit = lc.findLevelSlotByUserId(q);
                  if (hit) {
                    _context3.next = 13;
                    break;
                  }
                  console.warn('[OpenPieceBridge] user_id не найден:', q);
                  return _context3.abrupt("return", false);
                case 13:
                  lc.scrollToLevel(hit.level, {
                    duration: cm.heightCenterDuration,
                    easing: 'quadOut',
                    clamp: true
                  });
                  _context3.next = 16;
                  return this.openAt(hit.level, hit.slot);
                case 16:
                  return _context3.abrupt("return", _context3.sent);
                case 17:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function openByUserId(_x2) {
            return _openByUserId.apply(this, arguments);
          }
          return openByUserId;
        }();
        _proto.openAt = /*#__PURE__*/function () {
          var _openAt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(level, slot) {
            var lc, cm, bias, step, targetHeight, owner, binding;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  lc = this.layoutCtrl;
                  cm = this.clickMgr;
                  _context4.prev = 2;
                  cm.lockControls == null || cm.lockControls();
                  cm.clickedLevel = level;
                  cm.clickedSlot = slot;
                  cm.fsm = 'Aligning';

                  // 1) центрирование по высоте
                  bias = level <= 1 ? cm.levelBiasTop : cm.levelBiasRest;
                  step = lc.getLevelStep();
                  targetHeight = (level + bias) * step;
                  _context4.next = 12;
                  return cm.scrollCtrl.scrollToHeightWithNudgeAsync(targetHeight, cm.heightCenterDuration, cm.heightNudgeDuration, 'quadOut', true);
                case 12:
                  _context4.next = 14;
                  return cm.rotateRootToBringSlotToCamera == null ? void 0 : cm.rotateRootToBringSlotToCamera(slot);
                case 14:
                  // 3) актуальный узел + биндинг
                  owner = lc.findNodeByLevelSlot(level, slot);
                  if (owner) {
                    _context4.next = 19;
                    break;
                  }
                  cm.unlockControls == null || cm.unlockControls();
                  cm.fsm = 'Idle';
                  return _context4.abrupt("return", false);
                case 19:
                  binding = owner.getComponent(ClickMoveBinding) || owner.getComponentInChildren(ClickMoveBinding);
                  cm.currentPiece = owner;
                  cm.currentBinding = binding;

                  // 4) выезд + бортик + поворот модели
                  _context4.next = 24;
                  return cm.slideOutWithScaleComp == null ? void 0 : cm.slideOutWithScaleComp();
                case 24:
                  cm.setRimActive == null || cm.setRimActive(true);
                  _context4.next = 27;
                  return cm.rotateModelOpen == null ? void 0 : cm.rotateModelOpen();
                case 27:
                  cm.fsm = 'LockedOut';
                  return _context4.abrupt("return", true);
                case 31:
                  _context4.prev = 31;
                  _context4.t0 = _context4["catch"](2);
                  console.warn('[OpenPieceBridge] ошибка открытия:', _context4.t0);
                  try {
                    cm.unlockControls == null || cm.unlockControls();
                  } catch (_unused2) {}
                  cm.fsm = 'Idle';
                  return _context4.abrupt("return", false);
                case 37:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this, [[2, 31]]);
          }));
          function openAt(_x3, _x4) {
            return _openAt.apply(this, arguments);
          }
          return openAt;
        }();
        _proto.closeOpened = /*#__PURE__*/function () {
          var _closeOpened = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var cm;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  cm = this.clickMgr;
                  if (cm) {
                    _context5.next = 3;
                    break;
                  }
                  return _context5.abrupt("return", false);
                case 3:
                  if (!(cm.fsm === 'LockedOut')) {
                    _context5.next = 7;
                    break;
                  }
                  _context5.next = 6;
                  return cm.closeAndInsert == null ? void 0 : cm.closeAndInsert();
                case 6:
                  return _context5.abrupt("return", true);
                case 7:
                  return _context5.abrupt("return", false);
                case 8:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function closeOpened() {
            return _closeOpened.apply(this, arguments);
          }
          return closeOpened;
        }();
        return OpenPieceBridge;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "layoutCtrl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickMgr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TowerScrollController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './InteractionState.ts', './PointerIds.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, EventTarget, input, Input, tween, KeyCode, Component, InteractionState, MOUSE_ID$1;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      input = module.input;
      Input = module.Input;
      tween = module.tween;
      KeyCode = module.KeyCode;
      Component = module.Component;
    }, function (module) {
      InteractionState = module.InteractionState;
    }, function (module) {
      MOUSE_ID$1 = module.MOUSE_ID;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _dec17, _dec18, _class4, _class5, _descriptor16;
      cclegacy._RF.push({}, "10ce5Y/EABEKJf4+gRbbg26", "TowerScrollController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // fallback, ���� ��� PointerIds
      var MOUSE_ID = MOUSE_ID$1;

      /** ������ ������� */
      var TVS_Scroll = exports('TVS_Scroll', (_dec = ccclass('TVS_Scroll'), _dec2 = property({
        tooltip: '��������� offset (��.)'
      }), _dec3 = property({
        tooltip: '���. offset'
      }), _dec4 = property({
        tooltip: '����. offset'
      }), _dec5 = property({
        tooltip: '��. offset �� ������� �����'
      }), _dec6 = property({
        tooltip: '��. offset �� ��� ������� (120 �����)'
      }), _dec7 = property({
        tooltip: '����� ��������, ����� �������� ������� drag � ����������� ����'
      }), _dec8 = property({
        tooltip: '�������� ����������� �����'
      }), _dec9 = property({
        tooltip: '����. ������ (1/���): ������ � ������� ���������������'
      }), _dec10 = property({
        tooltip: '����� ��������� (��./���)'
      }), _dec11 = property({
        tooltip: '���� ������ �� ������ (� ��������)'
      }), _dec12 = property({
        tooltip: '������������ �������� �������/������ (��./���)'
      }), _dec13 = property({
        tooltip: 'Deadzone ��� ������ (��. offset)'
      }), _dec14 = property({
        tooltip: '����� deadzone, ���� ������� ������ (��)'
      }), _dec15 = property({
        tooltip: '��������� ��� ��������� W/S (��./���^2)'
      }), _dec16 = property({
        tooltip: '����. �������� �� W/S'
      }), _dec(_class = (_class2 = function TVS_Scroll() {
        _initializerDefineProperty(this, "startOffset", _descriptor, this);
        _initializerDefineProperty(this, "minOffset", _descriptor2, this);
        _initializerDefineProperty(this, "maxOffset", _descriptor3, this);
        _initializerDefineProperty(this, "unitsPerPixel", _descriptor4, this);
        _initializerDefineProperty(this, "unitsPerWheelTick", _descriptor5, this);
        _initializerDefineProperty(this, "dragThreshold", _descriptor6, this);
        _initializerDefineProperty(this, "enableInertia", _descriptor7, this);
        _initializerDefineProperty(this, "friction", _descriptor8, this);
        _initializerDefineProperty(this, "stopVelocity", _descriptor9, this);
        _initializerDefineProperty(this, "wheelKick", _descriptor10, this);
        _initializerDefineProperty(this, "maxInertiaSpeed", _descriptor11, this);
        // ������: deadzone
        _initializerDefineProperty(this, "wheelDeadzoneUnits", _descriptor12, this);
        _initializerDefineProperty(this, "wheelDeadzoneResetMs", _descriptor13, this);
        // ������� W/S
        _initializerDefineProperty(this, "keyAccel", _descriptor14, this);
        _initializerDefineProperty(this, "keyMaxSpeed", _descriptor15, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startOffset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "minOffset", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1e12;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxOffset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1e12;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "unitsPerPixel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.02;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "unitsPerWheelTick", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "dragThreshold", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "enableInertia", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "friction", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2.0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "stopVelocity", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.002;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "wheelKick", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20.0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "maxInertiaSpeed", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "wheelDeadzoneUnits", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "wheelDeadzoneResetMs", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 180;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "keyAccel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 120;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "keyMaxSpeed", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      })), _class2)) || _class));

      /**
       * TowerScrollController � �������� ������ �� ����/�������/�������� � �������� offset.
       * ������ �������:
       *  - 'offset-changed': (offset:number)=>void
       *  - 'scroll-start'
       *  - 'scroll-end'
       */
      var TowerScrollController = exports('TowerScrollController', (_dec17 = ccclass('TowerScrollController'), _dec18 = property({
        type: TVS_Scroll
      }), _dec17(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TowerScrollController, _Component);
        function TowerScrollController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scroll", _descriptor16, _assertThisInitialized(_this));
          /** ���� ������� */
          _this.events = new EventTarget();
          // === ��������� ===
          _this._offset = 0;
          _this.velocity = 0;
          // ��./���
          _this.inertiaActive = false;
          // ���������� ���������� ������� �����
          _this._inputEnabled = true;
          // mouse
          _this.mouseHeld = false;
          _this.mouseStartY = null;
          _this.mouseLastY = null;
          _this.mouseDragging = false;
          _this.mouseActive = false;
          _this.mouseClaimed = false;
          // touch
          _this.touchId = null;
          _this.touchStartY = null;
          _this.touchLastY = null;
          _this.touchDragging = false;
          _this.touchActive = false;
          _this.touchClaimed = false;
          // ������� ����� �����
          _this.moveSamples = [];
          _this.maxSamples = 6;
          // ������
          _this.wheelAccumUnits = 0;
          _this.wheelDeadzoneLastTs = 0;
          // ����������
          _this.keyHeldW = false;
          _this.keyHeldS = false;
          // tween
          _this.scrollTween = null;
          _this._tweenDriver = null;
          _this._pendingResolve = null;
          return _this;
        }
        var _proto = TowerScrollController.prototype;
        // ===== lifecycle =====
        _proto.onEnable = function onEnable() {
          InteractionState.hardReset();
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
          input.on(Input.EventType.MOUSE_WHEEL, this.onWheel, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
          input.off(Input.EventType.MOUSE_WHEEL, this.onWheel, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        };
        _proto.start = function start() {
          this.setOffset(this.clamp(this.scroll.startOffset, this.scroll.minOffset, this.scroll.maxOffset), true);
        };
        _proto.update = function update(dt) {
          // ���� ������ ������������� � ������ ����� �������
          if (!this._inputEnabled) {
            this.inertiaActive = false;
            this.velocity = 0;
            return;
          }
          var interacting = this.mouseHeld || this.mouseDragging || this.mouseActive || this.touchId !== null || this.touchDragging || this.touchActive;
          if (interacting) {
            this.inertiaActive = false;
            return;
          }

          // �������
          var inputAccel = 0;
          if (this.keyHeldW) inputAccel -= this.scroll.keyAccel;
          if (this.keyHeldS) inputAccel += this.scroll.keyAccel;
          if (inputAccel !== 0) {
            this.velocity += inputAccel * dt;
            var vmax = Math.min(this.scroll.keyMaxSpeed, this.scroll.maxInertiaSpeed);
            this.velocity = this.clamp(this.velocity, -vmax, vmax);
            this.inertiaActive = true;
            // ����� ������� � ����� ������� ������� �������
            this.events.emit('scroll-start');
          }
          if (!this.inertiaActive && Math.abs(this.velocity) < this.scroll.stopVelocity) return;
          var prev = this._offset;
          var next = this._offset + this.velocity * dt;
          next = this.clamp(next, this.scroll.minOffset, this.scroll.maxOffset);
          if (next <= this.scroll.minOffset && this.velocity < 0) this.velocity = 0;
          if (next >= this.scroll.maxOffset && this.velocity > 0) this.velocity = 0;

          // ������
          var decay = Math.exp(-this.scroll.friction * dt);
          this.velocity *= decay;
          if (inputAccel === 0 && Math.abs(this.velocity) < this.scroll.stopVelocity) {
            this.velocity = 0;
            if (this.inertiaActive) {
              this.inertiaActive = false;
              this.events.emit('scroll-end');
            }
          }
          if (next !== prev) this.setOffset(next, true);
        }

        // ===== ��������� ������ =====
        /** ���������� ��������� offset (� �������). */;
        _proto.setOffset = function setOffset(height, emit) {
          if (emit === void 0) {
            emit = true;
          }
          var clamped = this.clamp(height, this.scroll.minOffset, this.scroll.maxOffset);
          if (clamped === this._offset) return;
          this._offset = clamped;
          if (emit) this.events.emit('offset-changed', this._offset);
        }

        /** �������������/�������������� ���������������� ����. ��� ����� � ����� ������� � ������������� �����. */;
        _proto.setInputEnabled = function setInputEnabled(enabled) {
          if (this._inputEnabled === enabled) return;
          this._inputEnabled = enabled;
          if (!enabled) this.stopAll();
        }

        /** ��������� ����������: �������, �����, �����. */;
        _proto.stopAll = function stopAll() {
          this.inertiaActive = false;
          this.velocity = 0;
          if (this.scrollTween) {
            this.scrollTween.stop();
            this.scrollTween = null;
          }
          this._tweenDriver = null;
          if (this._pendingResolve) {
            this._pendingResolve();
            this._pendingResolve = null;
          }
          // ����� ������
          this.mouseHeld = false;
          this.mouseDragging = false;
          this.mouseActive = false;
          this.mouseClaimed = false;
          this.touchId = null;
          this.touchDragging = false;
          this.touchActive = false;
          this.touchClaimed = false;
          InteractionState.hardReset == null || InteractionState.hardReset();
        }

        /** ������ � ���������� ������ (� ��� �� ��������, ��� offset). */;
        _proto.scrollToHeight = function scrollToHeight(height, opts) {
          var _this2 = this;
          if (opts === void 0) {
            opts = {};
          }
          var _opts = opts,
            _opts$duration = _opts.duration,
            duration = _opts$duration === void 0 ? 0 : _opts$duration,
            _opts$easing = _opts.easing,
            easing = _opts$easing === void 0 ? 'quadOut' : _opts$easing,
            _opts$clamp = _opts.clamp,
            doClamp = _opts$clamp === void 0 ? true : _opts$clamp;
          this.inertiaActive = false;
          this.velocity = 0;
          if (this.scrollTween) {
            this.scrollTween.stop();
            this.scrollTween = null;
          }
          var target = doClamp ? this.clamp(height, this.scroll.minOffset, this.scroll.maxOffset) : height;
          if (duration <= 0) {
            this._offset = target;
            this.events.emit('offset-changed', this._offset);
            this.events.emit('scroll-end');
            return;
          }
          var easeFn = typeof easing === 'function' ? easing : this._getEase(easing);
          this._tweenDriver = {
            value: this._offset
          };
          this.events.emit('scroll-start');
          this.scrollTween = tween(this._tweenDriver).to(duration, {
            value: target
          }, {
            progress: function progress(start, end, _current, t) {
              var et = easeFn(Math.max(0, Math.min(1, t)));
              return start + (end - start) * et;
            },
            onUpdate: function onUpdate() {
              _this2._offset = doClamp ? _this2.clamp(_this2._tweenDriver.value, _this2.scroll.minOffset, _this2.scroll.maxOffset) : _this2._tweenDriver.value;
              _this2.events.emit('offset-changed', _this2._offset);
            }
          }).call(function () {
            _this2.scrollTween = null;
            _this2._tweenDriver = null;
            _this2.events.emit('scroll-end');
          }).start();
        }

        /** Promise-������ scrollToHeight. */;
        _proto.scrollToHeightAsync = function scrollToHeightAsync(height, opts) {
          var _this3 = this;
          if (opts === void 0) {
            opts = {};
          }
          return new Promise(function (resolve) {
            // ���� ��� ���� ������ ������ � ��������� ���, ����� �� �������
            if (_this3._pendingResolve) {
              _this3._pendingResolve();
              _this3._pendingResolve = null;
            }
            var _opts2 = opts,
              _opts2$duration = _opts2.duration,
              duration = _opts2$duration === void 0 ? 0 : _opts2$duration,
              _opts2$easing = _opts2.easing,
              easing = _opts2$easing === void 0 ? 'quadOut' : _opts2$easing,
              _opts2$clamp = _opts2.clamp,
              doClamp = _opts2$clamp === void 0 ? true : _opts2$clamp;
            _this3.inertiaActive = false;
            _this3.velocity = 0;
            if (_this3.scrollTween) {
              _this3.scrollTween.stop();
              _this3.scrollTween = null;
            }
            var target = doClamp ? _this3.clamp(height, _this3.scroll.minOffset, _this3.scroll.maxOffset) : height;
            if (duration <= 0) {
              _this3._offset = target;
              _this3.events.emit('offset-changed', _this3._offset);
              _this3.events.emit('scroll-end');
              resolve();
              return;
            }
            var easeFn = typeof easing === 'function' ? easing : _this3._getEase(easing);
            _this3._tweenDriver = {
              value: _this3._offset
            };
            _this3.events.emit('scroll-start');
            _this3._pendingResolve = resolve;
            _this3.scrollTween = tween(_this3._tweenDriver).to(duration, {
              value: target
            }, {
              progress: function progress(start, end, _current, t) {
                var et = easeFn(Math.max(0, Math.min(1, t)));
                return start + (end - start) * et;
              },
              onUpdate: function onUpdate() {
                _this3._offset = doClamp ? _this3.clamp(_this3._tweenDriver.value, _this3.scroll.minOffset, _this3.scroll.maxOffset) : _this3._tweenDriver.value;
                _this3.events.emit('offset-changed', _this3._offset);
              }
            }).call(function () {
              _this3.scrollTween = null;
              _this3._tweenDriver = null;
              _this3.events.emit('scroll-end');
              var r = _this3._pendingResolve;
              _this3._pendingResolve = null;
              r == null || r();
            }).start();
          });
        }

        /** ��� �����: �������� ������ + �������� ����� ��� ������� ���������. */;
        _proto.scrollToHeightWithNudgeAsync = /*#__PURE__*/
        function () {
          var _scrollToHeightWithNudgeAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(height, mainDuration, nudgeDuration, easing, clamp) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (mainDuration === void 0) {
                    mainDuration = 0.35;
                  }
                  if (nudgeDuration === void 0) {
                    nudgeDuration = 0.1;
                  }
                  if (easing === void 0) {
                    easing = 'quadOut';
                  }
                  if (clamp === void 0) {
                    clamp = true;
                  }
                  _context.next = 6;
                  return this.scrollToHeightAsync(height, {
                    duration: mainDuration,
                    easing: easing,
                    clamp: clamp
                  });
                case 6:
                  if (!(nudgeDuration > 0.01)) {
                    _context.next = 9;
                    break;
                  }
                  _context.next = 9;
                  return this.scrollToHeightAsync(height, {
                    duration: nudgeDuration,
                    easing: easing,
                    clamp: clamp
                  });
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function scrollToHeightWithNudgeAsync(_x, _x2, _x3, _x4, _x5) {
            return _scrollToHeightWithNudgeAsync.apply(this, arguments);
          }
          return scrollToHeightWithNudgeAsync;
        }();
        _proto.scrollByHeight = function scrollByHeight(dHeight, opts) {
          if (opts === void 0) {
            opts = {};
          }
          this.scrollToHeight(this._offset + dHeight, opts);
        };
        _proto.scrollByHeightAsync = function scrollByHeightAsync(dHeight, opts) {
          if (opts === void 0) {
            opts = {};
          }
          return this.scrollToHeightAsync(this._offset + dHeight, opts);
        };
        _proto.stopScrollTween = function stopScrollTween() {
          if (this.scrollTween) {
            this.scrollTween.stop();
            this.scrollTween = null;
          }
          if (this._pendingResolve) {
            this._pendingResolve();
            this._pendingResolve = null;
          }
          this._tweenDriver = null;
          this.events.emit('scroll-end');
        }

        // ===== gestures =====
        ;

        _proto.onMouseDown = function onMouseDown(e) {
          if (!this._inputEnabled) return;
          if (e.getButton() !== 0) return;
          if (InteractionState.inGesture && InteractionState.source === 'mouse') return;
          this.mouseHeld = true;
          var y = e.getLocationY();
          this.mouseStartY = y;
          this.mouseLastY = y;
          this.mouseDragging = false;
          this.mouseActive = false;
          this.mouseClaimed = false;
          this.inertiaActive = false;
          this.velocity = 0;
          this.moveSamples.length = 0;
          this.pushSample(y);
        };
        _proto.onMouseMove = function onMouseMove(e) {
          if (!this._inputEnabled) return;
          if (!this.mouseHeld || this.mouseLastY === null || this.mouseStartY === null) return;
          var y = e.getLocationY();
          var dy = y - this.mouseLastY;
          var total = y - this.mouseStartY;
          this.mouseLastY = y;
          this.pushSample(y);
          if (!this.mouseDragging) {
            if (Math.abs(total) >= this.scroll.dragThreshold) this.mouseDragging = true;else return;
          }
          if (dy === 0) return;
          if (!this.mouseActive) {
            this.mouseActive = true;
            if (!InteractionState.inGesture) {
              InteractionState.beginGesture(MOUSE_ID, 'mouse');
              this.mouseClaimed = true;
              this.events.emit('scroll-start');
            } else {
              return;
            }
            InteractionState.markDrag(MOUSE_ID);
          }
          if (this.mouseClaimed) this.applyDeltaUnits(dy * this.scroll.unitsPerPixel);
        };
        _proto.onMouseUp = function onMouseUp(e) {
          if (!this._inputEnabled) return;
          if (e.getButton() !== 0) return;
          if (this.mouseClaimed) InteractionState.tryEndGesture(MOUSE_ID, 'mouse');
          this.mouseHeld = false;
          this.mouseStartY = this.mouseLastY = null;
          this.mouseDragging = false;
          this.mouseActive = false;
          this.mouseClaimed = false;
          if (this.moveSamples.length >= 2) this.startInertiaFromSamples();else this.events.emit('scroll-end');
        };
        _proto.onWheel = function onWheel(e) {
          if (!this._inputEnabled) return;
          var delta = -e.getScrollY();
          if (delta === 0) return;
          var stepUnits = delta / 120 * this.scroll.unitsPerWheelTick;
          var now = this.nowMs();
          if (now - this.wheelDeadzoneLastTs > this.scroll.wheelDeadzoneResetMs) this.wheelAccumUnits = 0;
          this.wheelDeadzoneLastTs = now;
          this.wheelAccumUnits += stepUnits;
          var absAccum = Math.abs(this.wheelAccumUnits);
          var dz = Math.max(0, this.scroll.wheelDeadzoneUnits);
          if (absAccum < dz) return;
          var move = this.wheelAccumUnits - Math.sign(this.wheelAccumUnits) * dz;
          this.wheelAccumUnits = 0;
          var kick = this.clamp(move * this.scroll.wheelKick, -this.scroll.maxInertiaSpeed, this.scroll.maxInertiaSpeed);
          this.velocity = this.clamp(this.velocity + kick, -this.scroll.maxInertiaSpeed, this.scroll.maxInertiaSpeed);
          this.inertiaActive = Math.abs(this.velocity) >= this.scroll.stopVelocity;
          this.events.emit('scroll-start');
        };
        _proto.onTouchStart = function onTouchStart(e) {
          if (!this._inputEnabled) return;
          if (InteractionState.inGesture && InteractionState.source === 'touch') return;
          if (this.touchId !== null) return;
          var id = e.getID();
          this.touchId = id;
          var y = e.getLocationY();
          this.touchStartY = y;
          this.touchLastY = y;
          this.touchDragging = false;
          this.touchActive = false;
          this.touchClaimed = false;
          this.inertiaActive = false;
          this.velocity = 0;
          this.moveSamples.length = 0;
          this.pushSample(y);
        };
        _proto.onTouchMove = function onTouchMove(e) {
          if (!this._inputEnabled) return;
          var id = e.getID();
          if (this.touchId !== id || this.touchLastY === null || this.touchStartY === null) return;
          if (InteractionState.inGesture && InteractionState.source === 'touch' && !this.touchClaimed) return;
          var y = e.getLocationY();
          var dy = y - this.touchLastY;
          var total = y - this.touchStartY;
          this.touchLastY = y;
          this.pushSample(y);
          if (!this.touchDragging) {
            if (Math.abs(total) >= this.scroll.dragThreshold) this.touchDragging = true;else return;
          }
          if (dy === 0) return;
          if (!this.touchActive) {
            if (!InteractionState.inGesture) {
              this.touchActive = true;
              InteractionState.beginGesture(id, 'touch');
              this.touchClaimed = true;
              this.events.emit('scroll-start');
              InteractionState.markDrag(id);
            } else {
              return;
            }
          }
          if (this.touchClaimed) this.applyDeltaUnits(dy * this.scroll.unitsPerPixel);
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (!this._inputEnabled) return;
          var id = e.getID();
          if (this.touchId !== id) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(id, 'touch');
          this.touchId = null;
          this.touchStartY = this.touchLastY = null;
          this.touchDragging = false;
          this.touchActive = false;
          this.touchClaimed = false;
          if (this.moveSamples.length >= 2) this.startInertiaFromSamples();else this.events.emit('scroll-end');
        };
        _proto.onTouchCancel = function onTouchCancel(e) {
          if (!this._inputEnabled) return;
          var id = e.getID();
          if (this.touchId !== id) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(id, 'touch');
          this.touchId = null;
          this.touchStartY = this.touchLastY = null;
          this.touchDragging = false;
          this.touchActive = false;
          this.touchClaimed = false;
          if (this.moveSamples.length >= 2) this.startInertiaFromSamples();else this.events.emit('scroll-end');
        }

        // helpers
        ;

        _proto.nowMs = function nowMs() {
          var _ref, _globalThis$performan;
          // @ts-ignore
          return (_ref = (_globalThis$performan = globalThis.performance) == null || _globalThis$performan.now == null ? void 0 : _globalThis$performan.now()) != null ? _ref : Date.now();
        };
        _proto.pushSample = function pushSample(y) {
          var t = this.nowMs();
          this.moveSamples.push({
            t: t,
            y: y
          });
          if (this.moveSamples.length > this.maxSamples) this.moveSamples.shift();
          var last = this.moveSamples[this.moveSamples.length - 1];
          while (this.moveSamples.length > 1 && last.t - this.moveSamples[0].t > 200) {
            this.moveSamples.shift();
          }
        };
        _proto.startInertiaFromSamples = function startInertiaFromSamples() {
          if (!this.scroll.enableInertia) {
            this.moveSamples.length = 0;
            this.events.emit('scroll-end');
            return;
          }
          if (this.moveSamples.length >= 2) {
            var a = this.moveSamples[0];
            var b = this.moveSamples[this.moveSamples.length - 1];
            var dtSec = Math.max(0.001, (b.t - a.t) / 1000);
            var vPxPerSec = (b.y - a.y) / dtSec;
            var vUnitsPerSec = vPxPerSec * this.scroll.unitsPerPixel;
            this.velocity = this.clamp(vUnitsPerSec, -this.scroll.maxInertiaSpeed, this.scroll.maxInertiaSpeed);
            this.inertiaActive = Math.abs(this.velocity) >= this.scroll.stopVelocity;
            if (!this.inertiaActive) this.events.emit('scroll-end');
          }
          this.moveSamples.length = 0;
        };
        _proto.applyDeltaUnits = function applyDeltaUnits(dUnits) {
          var prev = this._offset;
          var next = this.clamp(prev + dUnits, this.scroll.minOffset, this.scroll.maxOffset);
          if (next !== prev) this.setOffset(next, true);
        };
        _proto.clamp = function clamp(v, a, b) {
          return Math.min(b, Math.max(a, v));
        };
        _proto._getEase = function _getEase(name) {
          switch (name) {
            case 'linear':
              return function (t) {
                return t;
              };
            case 'quadIn':
              return function (t) {
                return t * t;
              };
            case 'quadOut':
              return function (t) {
                return 1 - (1 - t) * (1 - t);
              };
            case 'quadInOut':
              return function (t) {
                return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
              };
            case 'cubicIn':
              return function (t) {
                return t * t * t;
              };
            case 'cubicOut':
              return function (t) {
                return 1 - Math.pow(1 - t, 3);
              };
            case 'cubicInOut':
              return function (t) {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
              };
            case 'quartIn':
              return function (t) {
                return t * t * t * t;
              };
            case 'quartOut':
              return function (t) {
                return 1 - Math.pow(1 - t, 4);
              };
            case 'quartInOut':
              return function (t) {
                return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
              };
            default:
              return function (t) {
                return 1 - (1 - t) * (1 - t);
              };
            // quadOut
          }
        }

        // �������
        ;

        _proto.onKeyDown = function onKeyDown(e) {
          if (!this._inputEnabled) return;
          if (e.keyCode === KeyCode.KEY_W) this.keyHeldW = true;
          if (e.keyCode === KeyCode.KEY_S) this.keyHeldS = true;
        };
        _proto.onKeyUp = function onKeyUp(e) {
          if (!this._inputEnabled) return;
          if (e.keyCode === KeyCode.KEY_W) this.keyHeldW = false;
          if (e.keyCode === KeyCode.KEY_S) this.keyHeldS = false;
        };
        _createClass(TowerScrollController, [{
          key: "offset",
          get:
          // ��.
          function get() {
            return this._offset;
          }
        }, {
          key: "inputEnabled",
          get: function get() {
            return this._inputEnabled;
          }
        }, {
          key: "isBusy",
          get:
          // ������� ����
          function get() {
            return !!this.scrollTween || this.inertiaActive || Math.abs(this.velocity) > this.scroll.stopVelocity;
          }
        }]);
        return TowerScrollController;
      }(Component), _descriptor16 = _applyDecoratedDescriptor(_class5.prototype, "scroll", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new TVS_Scroll();
        }
      }), _class5)) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TVS_SpawnLayout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ClickMoveBinding.ts', './ColorLibrary.ts', './TowerScrollController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Label, instantiate, Vec3, Component, ClickMoveBinding, ColorTextureLibrary, TowerScrollController;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Label = module.Label;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      ClickMoveBinding = module.ClickMoveBinding;
    }, function (module) {
      ColorTextureLibrary = module.ColorTextureLibrary;
    }, function (module) {
      TowerScrollController = module.TowerScrollController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _dec23, _dec24, _dec25, _class4, _class5, _descriptor25, _descriptor26;
      cclegacy._RF.push({}, "368ffNUv4lFSZtXbbDm9TB3", "TVS_SpawnLayout", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** ===== API-модель ===== */

      /** ===== Конфиг спавна/раскладки ===== */
      var TVS_SpawnLayout = exports('TVS_SpawnLayout', (_dec = ccclass('TVS_SpawnLayout'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        tooltip: 'Базовый масштаб геометрии префаба (Node.scale = 1 → это baseScale префаба)'
      }), _dec4 = property({
        tooltip: 'Базовая геометрическая высота куска (до масштабов префаба и Node.scale)'
      }), _dec5 = property({
        tooltip: 'Целевой экранный масштаб «базового» куска'
      }), _dec6 = property({
        tooltip: 'Визуальный зазор между уровнями (в ед.: baseHeight * Node.scale)'
      }), _dec7 = property({
        tooltip: 'Якорь Y (локально) — центр окна'
      }), _dec8 = property({
        tooltip: 'Интенсивность градиента масштаба (0..1). 0 — одинаковые; 1 — максимум.'
      }), _dec9 = property({
        tooltip: 'Коэф. по слоям r: r<1 — вниз мельче; r>1 — вниз крупнее.'
      }), _dec10 = property({
        tooltip: 'Включить кламп масштаба каждого куска'
      }), _dec11 = property({
        tooltip: 'Минимальный Node.scale'
      }), _dec12 = property({
        tooltip: 'Максимальный Node.scale'
      }), _dec13 = property({
        tooltip: 'Индекс материала внутри MeshRenderer'
      }), _dec14 = property({
        tooltip: 'Фолбэк: число наборов в библиотеке, если она сама не сообщает'
      }), _dec15 = property({
        type: Label,
        tooltip: 'Куда выводить глобальный счётчик пройденных кусочков'
      }), _dec16 = property({
        tooltip: 'Сколько всего кусочков хотим показать (набираются случайно из API-результатов)'
      }), _dec17 = property({
        tooltip: 'Seed для выбора/перемешивания кусков (стабильный рандом)'
      }), _dec18 = property({
        tooltip: 'Случайный «набор» (цвета/текстуры) на кусок по gidx через библиотеку'
      }), _dec19 = property({
        tooltip: 'Seed для вычисления индекса набора из gidx'
      }), _dec20 = property({
        tooltip: 'Доп. уровни прокрутки ПОСЛЕ последнего уровня (пустое пространство внизу)'
      }), _dec21 = property({
        tooltip: 'Если true — последний неполный уровень будет прижат к верху окна'
      }), _dec22 = property({
        tooltip: 'Делать неполный уровень в НАЧАЛЕ башни (сверху)'
      }), _dec(_class = (_class2 = function TVS_SpawnLayout() {
        _initializerDefineProperty(this, "prefab", _descriptor, this);
        _initializerDefineProperty(this, "objectsPerLevel", _descriptor2, this);
        _initializerDefineProperty(this, "visibleLevels", _descriptor3, this);
        _initializerDefineProperty(this, "angleStep", _descriptor4, this);
        _initializerDefineProperty(this, "baseScale", _descriptor5, this);
        _initializerDefineProperty(this, "baseHeight", _descriptor6, this);
        _initializerDefineProperty(this, "targetVisualScale", _descriptor7, this);
        _initializerDefineProperty(this, "levelPaddingVisual", _descriptor8, this);
        _initializerDefineProperty(this, "anchorY", _descriptor9, this);
        _initializerDefineProperty(this, "scaleInWindow", _descriptor10, this);
        _initializerDefineProperty(this, "r", _descriptor11, this);
        _initializerDefineProperty(this, "enableScaleClamp", _descriptor12, this);
        _initializerDefineProperty(this, "minScale", _descriptor13, this);
        _initializerDefineProperty(this, "maxScale", _descriptor14, this);
        _initializerDefineProperty(this, "materialIndex", _descriptor15, this);
        _initializerDefineProperty(this, "colorSetsFallback", _descriptor16, this);
        _initializerDefineProperty(this, "counterLabel", _descriptor17, this);
        /** ===== Настройки данных/цветов/прокрутки ===== */
        _initializerDefineProperty(this, "targetPieces", _descriptor18, this);
        _initializerDefineProperty(this, "rngSeed", _descriptor19, this);
        _initializerDefineProperty(this, "randomizeColors", _descriptor20, this);
        _initializerDefineProperty(this, "rngSeedColors", _descriptor21, this);
        _initializerDefineProperty(this, "padAfterLevels", _descriptor22, this);
        _initializerDefineProperty(this, "endPartialAtTop", _descriptor23, this);
        _initializerDefineProperty(this, "partialAtTop", _descriptor24, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "objectsPerLevel", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "visibleLevels", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "angleStep", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 45;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "baseScale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "baseHeight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "targetVisualScale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.6;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "levelPaddingVisual", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "anchorY", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "scaleInWindow", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "r", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.9;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "enableScaleClamp", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "minScale", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.4;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "maxScale", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.8;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "materialIndex", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "colorSetsFallback", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 256;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "counterLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "targetPieces", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1000;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "rngSeed", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 123456789;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "randomizeColors", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "rngSeedColors", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 987654321;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "padAfterLevels", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "endPartialAtTop", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "partialAtTop", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));

      /** ===== Контроллер башни + интеграция API ===== */
      var TowerLayoutController = exports('TowerLayoutController', (_dec23 = ccclass('TowerLayoutController'), _dec24 = property({
        type: TVS_SpawnLayout
      }), _dec25 = property({
        type: TowerScrollController,
        tooltip: 'Ссылка на контроллер скролла'
      }), _dec23(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TowerLayoutController, _Component);
        function TowerLayoutController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spawn", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollCtrl", _descriptor26, _assertThisInitialized(_this));
          // внутреннее
          _this.pool = [];
          _this.lastKeyByNode = new Map();
          _this.nodeLevelInfo = new Map();
          _this.lastTopBase = Number.NaN;
          _this.passedPieces = 0;
          // данные
          _this.cakesSource = [];
          _this.cakesExpanded = [];
          return _this;
        }
        var _proto = TowerLayoutController.prototype;
        _proto.getLib = function getLib() {
          // импорт гарантирован, но инстанс может быть не создан
          var lib = ColorTextureLibrary == null ? void 0 : ColorTextureLibrary.instance;
          return lib != null ? lib : null;
        }

        /* ========================== Жизненный цикл ========================== */;
        _proto.onLoad = function onLoad() {
          if (!this.scrollCtrl) console.warn('[TowerLayoutController] scrollCtrl не назначен в инспекторе');
          if (!this.getLib()) {
            console.warn('[TowerLayoutController] ColorTextureLibrary.instance не найден. ' + 'Добавь компонент ColorTextureLibrary на любой узел (он сам станет persist).');
          }
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this,
            _this$scrollCtrl;
          this.buildPool();
          var initOff = this.scrollCtrl ? this.scrollCtrl.offset : 0;
          this.layoutByOffset(initOff);
          this.initApiData().then(function () {
            _this2.rebuildExpandedCakes();
            var cur = _this2.scrollCtrl ? _this2.scrollCtrl.offset : 0;
            var max = _this2.getMaxScrollableOffset();
            var clamped = Math.min(cur, max);
            if (_this2.scrollCtrl && cur !== clamped) {
              _this2.scrollCtrl.scrollToHeight(clamped, {
                duration: 0
              });
            }
            _this2.layoutByOffset(clamped);
          });
          (_this$scrollCtrl = this.scrollCtrl) == null || _this$scrollCtrl.events.on('offset-changed', this._onOffsetChanged, this);
        };
        _proto.onDisable = function onDisable() {
          var _this$scrollCtrl2;
          (_this$scrollCtrl2 = this.scrollCtrl) == null || _this$scrollCtrl2.events.off('offset-changed', this._onOffsetChanged, this);
        };
        _proto.getHeadPad = function getHeadPad(per, total) {
          if (!this.spawn.partialAtTop) return 0;
          if (per <= 0 || total <= 0) return 0;
          var rem = total % per;
          return rem === 0 ? 0 : per - rem;
        };
        _proto._onOffsetChanged = function _onOffsetChanged(offset) {
          var max = this.getMaxScrollableOffset();
          var clamped = Math.min(offset, max);
          if (clamped !== offset && this.scrollCtrl) {
            this.scrollCtrl.scrollToHeight(clamped, {
              duration: 0
            });
          }
          this.layoutByOffset(clamped);
        }

        /* ========================== Публичные API ========================== */;
        _proto.getLevelStep = function getLevelStep() {
          return Math.max(1e-6, this.levelStepConst());
        };
        _proto.getNodeLevel = function getNodeLevel(node) {
          var info = this.nodeLevelInfo.get(node);
          return info ? info.level : null;
        };
        _proto.findMappedAncestor = function findMappedAncestor(node) {
          var cur = node;
          while (cur) {
            if (this.nodeLevelInfo.has(cur)) return cur;
            cur = cur.parent;
          }
          return null;
        };
        _proto.getLevelForAny = function getLevelForAny(node) {
          var owner = this.findMappedAncestor(node);
          if (!owner) return null;
          var info = this.nodeLevelInfo.get(owner);
          return info.level;
        };
        _proto.getSlotForAny = function getSlotForAny(node) {
          var owner = this.findMappedAncestor(node);
          if (!owner) return null;
          var info = this.nodeLevelInfo.get(owner);
          return info ? info.slot : null;
        }

        /** Найти активную ноду по абсолютному уровню и слоту. */;
        _proto.findNodeByLevelSlot = function findNodeByLevelSlot(level, slot) {
          for (var _iterator = _createForOfIteratorHelperLoose(this.nodeLevelInfo), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              n = _step$value[0],
              info = _step$value[1];
            if (!n.activeInHierarchy) continue;
            if (info.level === level && info.slot === slot) return n;
          }
          return null;
        };
        _proto.scrollToLevel = function scrollToLevel(level, opts) {
          var _this$scrollCtrl3;
          var step = this.getLevelStep();
          (_this$scrollCtrl3 = this.scrollCtrl) == null || _this$scrollCtrl3.scrollToHeight(level * step, opts != null ? opts : {});
        };
        _proto.scrollToNodeLevel = function scrollToNodeLevel(node, opts) {
          var L = this.getNodeLevel(node);
          if (L == null) {
            console.warn('[TowerLayout] scrollToNodeLevel: node has no tracked level (not visible yet?)', node == null ? void 0 : node.name);
            return false;
          }
          this.scrollToLevel(L, opts);
          return true;
        };
        _proto.scrollToNodeOrAncestorLevel = function scrollToNodeOrAncestorLevel(node, opts) {
          var owner = this.findMappedAncestor(node);
          if (!owner) return false;
          return this.scrollToNodeLevel(owner, opts);
        }

        /** Максимальный оффсет скролла, учитывая «воздух» внизу (padAfterLevels) */;
        _proto.getMaxScrollableOffset = function getMaxScrollableOffset() {
          var vis = Math.max(1, this.spawn.visibleLevels);
          var totalLevels = this.getTotalLevels();
          if (totalLevels === 0) return 0;
          var pad = Math.max(0, this.spawn.padAfterLevels);
          var maxTopBase = Math.max(0, totalLevels - vis + pad);
          return (maxTopBase + 1) * this.getLevelStep();
        }

        /* ========================== Интеграция API ========================== */;
        _proto.initApiData = /*#__PURE__*/
        function () {
          var _initApiData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this3 = this;
            var response, text, raw, rawItems;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return fetch('https://api.demo-stage.ru/cake/list', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({})
                  });
                case 3:
                  response = _context.sent;
                  if (response.ok) {
                    _context.next = 11;
                    break;
                  }
                  _context.next = 7;
                  return this.safeReadText(response);
                case 7:
                  text = _context.sent;
                  console.error('[API] Ошибка запроса:', response.status, text);
                  this.cakesSource = [];
                  return _context.abrupt("return");
                case 11:
                  _context.next = 13;
                  return response.json();
                case 13:
                  raw = _context.sent;
                  console.log('[API] Сырой ответ:', raw);
                  rawItems = Array.isArray(raw == null ? void 0 : raw.cakes) ? raw.cakes : [];
                  if (!(rawItems.length === 0)) {
                    _context.next = 20;
                    break;
                  }
                  console.warn('[API] Пустой список cakes. Ключи:', raw && typeof raw === 'object' ? Object.keys(raw) : []);
                  this.cakesSource = [];
                  return _context.abrupt("return");
                case 20:
                  this.cakesSource = rawItems.map(function (it, idx) {
                    var _it$hex_color;
                    var n = _this3.normalizeCakePiece(it);
                    if (!n.user_id) console.warn("[API item " + idx + "] user_id \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442/\u043D\u0435 UUID. uniq_id=", it == null ? void 0 : it.uniq_id);
                    if (!n.hex_color) console.warn("[API item " + idx + "] hex_color \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442/\u043D\u0435 HEX. raw=", (_it$hex_color = it == null ? void 0 : it.hex_color) != null ? _it$hex_color : it == null ? void 0 : it.color);
                    return n;
                  });
                  console.log('[API] Нормализовано (источник):', this.cakesSource.length, this.cakesSource);
                  _context.next = 28;
                  break;
                case 24:
                  _context.prev = 24;
                  _context.t0 = _context["catch"](0);
                  console.error('[API] Ошибка соединения:', _context.t0);
                  this.cakesSource = [];
                case 28:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[0, 24]]);
          }));
          function initApiData() {
            return _initApiData.apply(this, arguments);
          }
          return initApiData;
        }() /** Собираем расширенный массив на targetPieces, случайно из источника, но стабильно по seed */;
        _proto.rebuildExpandedCakes = function rebuildExpandedCakes() {
          var want = Math.max(0, Math.floor(this.spawn.targetPieces));
          var src = this.cakesSource.filter(Boolean);
          if (want === 0 || src.length === 0) {
            this.cakesExpanded = [];
            console.warn('[API] Нет данных для расширения: targetPieces=', want, ' src=', src.length);
            return;
          }
          var rng = this.mulberry32(this.spawn.rngSeed >>> 0);
          var pick = function pick() {
            return src[Math.floor(rng() * src.length)];
          };
          var out = new Array(want);
          for (var i = 0; i < want; i++) out[i] = pick();
          this.fisherYatesShuffle(out, rng);
          this.cakesExpanded = out;
          console.log('[API] Expanded cakes:', this.cakesExpanded.length);
        }

        /* ========================== Доступ к данным ========================== */;
        _proto.getPieceFor = function getPieceFor(level, slot) {
          if (!this.cakesExpanded || this.cakesExpanded.length === 0) return null;
          var per = Math.max(1, this.spawn.objectsPerLevel);
          var total = this.cakesExpanded.length;
          var headPad = this.getHeadPad(per, total);
          // смещаем глобальный индекс так, чтобы первый уровень начинался с headPad пустых слотов
          var dataIndex = level * per + slot - headPad;
          return dataIndex >= 0 && dataIndex < total ? this.cakesExpanded[dataIndex] : null;
        };
        _proto.getTotalPieces = function getTotalPieces() {
          return Array.isArray(this.cakesExpanded) ? this.cakesExpanded.length : 0;
        };
        _proto.getTotalLevels = function getTotalLevels() {
          var per = Math.max(1, this.spawn.objectsPerLevel);
          var total = this.getTotalPieces();
          var headPad = this.getHeadPad(per, total);
          // считаем уровни по «подпаденному» началу, чтобы первый мог быть неполным
          return Math.ceil((headPad + total) / per);
        };
        _proto.globalIndexOf = function globalIndexOf(level, slot) {
          var per = Math.max(1, this.spawn.objectsPerLevel);
          return level * per + slot;
        }

        /* ========================== Раскладка/отрисовка ========================== */;
        _proto.levelStepConst = function levelStepConst() {
          var basePiece = this.spawn.targetVisualScale / Math.max(1e-6, this.spawn.baseScale);
          var baseVisualHeight = this.spawn.baseHeight * this.spawn.baseScale * basePiece;
          return baseVisualHeight + this.spawn.levelPaddingVisual;
        };
        _proto.layoutByOffset = function layoutByOffset(offset) {
          var _this4 = this;
          var stepConst = Math.max(1e-6, this.levelStepConst());
          var depthRaw = offset / stepConst;
          var vis = Math.max(1, this.spawn.visibleLevels);
          var per = Math.max(1, this.spawn.objectsPerLevel);
          var totalLevels = this.getTotalLevels();

          // опционально: «неполный конец» наверх окна
          var depthAdjust = 0;
          if (this.spawn.endPartialAtTop && totalLevels > 0) {
            var lastLevelCount = this.getTotalPieces() % per || per;
            // если есть неполный последний уровень — сдвинем окно так, чтобы он выпадал на верхнюю позицию
            if (lastLevelCount < per) {
              // сдвиг в долях уровня: сколько слотов пусто
              depthAdjust = 0; // визуально мы всё равно выключаем пустые слоты; сдвиг по Y можно донастроить при необходимости
            }
          }

          var clampWhenData = totalLevels > 0;
          var pad = Math.max(0, this.spawn.padAfterLevels);
          var maxTopBase = Math.max(0, totalLevels - vis + pad);
          var depth = clampWhenData ? Math.min(depthRaw + depthAdjust, maxTopBase) : depthRaw + depthAdjust;
          var topBase = Math.max(0, Math.floor(depth));
          var frac = depth - topBase;
          var newPassed = topBase * per;
          if (newPassed !== this.passedPieces) {
            this.passedPieces = newPassed;
            if (this.spawn.counterLabel) this.spawn.counterLabel.string = "" + this.passedPieces;
          }
          this.lastTopBase = topBase;
          var basePiece = this.spawn.targetVisualScale / Math.max(1e-6, this.spawn.baseScale);
          var sGrad = this.spawn.scaleInWindow;
          var rSafe = Math.max(1e-6, this.spawn.r);
          var desiredScaleAtRel = function desiredScaleAtRel(rel) {
            return basePiece * Math.pow(rSafe, -rel * sGrad);
          };
          var clampScale = function clampScale(x) {
            if (!_this4.spawn.enableScaleClamp) return x;
            var lo = Math.min(_this4.spawn.minScale, _this4.spawn.maxScale);
            var hi = Math.max(_this4.spawn.minScale, _this4.spawn.maxScale);
            return Math.min(hi, Math.max(lo, x));
          };
          var relTop = topBase - depth;
          var topScale = clampScale(desiredScaleAtRel(relTop));
          var topVisualHeight = this.spawn.baseHeight * this.spawn.baseScale * topScale;
          var accY = -frac * (topVisualHeight + this.spawn.levelPaddingVisual);
          var idx = 0;
          for (var L = 0; L < vis; L++) {
            var abs = topBase + L;

            // за пределами данных — гасим оставшиеся уровни
            if (clampWhenData && abs >= totalLevels) {
              for (; L < vis; L++) {
                for (var j = 0; j < per; j++, idx++) {
                  var n = this.pool[idx];
                  if (n) {
                    n.active = false;
                    this.nodeLevelInfo["delete"](n);
                  }
                }
              }
              break;
            }
            var rel = abs - depth;
            var pieceS = clampScale(desiredScaleAtRel(rel));
            var yTop = this.spawn.anchorY - accY;
            for (var _j = 0; _j < per; _j++) {
              var _n = this.pool[idx];
              if (!this.spawn.prefab) return;
              if (!_n) {
                _n = instantiate(this.spawn.prefab);
                _n.setParent(this.node);
                _n.active = true;
                this.pool[idx] = _n;
              }

              // данные для этого слота
              var gidx = this.globalIndexOf(abs, _j);
              var piece = this.getPieceFor(abs, _j);

              // нет данных — выключаем
              if (!piece) {
                _n.active = false;
                this.nodeLevelInfo["delete"](_n);
                _n.__boundIndex = undefined;
                idx++;
                continue;
              }

              // поменялся глобальный индекс? → перебиндить контент
              var prevIdx = _n.__boundIndex;
              var needRebind = prevIdx !== gidx;

              // === ЦВЕТ/ТЕКСТУРЫ ЧЕРЕЗ БИБЛИОТЕКУ ===
              this.applyLibrarySetForIndex(_n, gidx, piece);

              // позиция/поворот/скейл
              _n.active = true;
              _n.setPosition(new Vec3(0, yTop, 0));
              _n.setRotationFromEuler(new Vec3(0, _j * this.spawn.angleStep, 0));
              _n.setScale(pieceS, pieceS, pieceS);

              // тексты/метаданные — обновляем при смене индекса
              if (needRebind) {
                this.applyPieceToNode(_n, piece);
              }
              _n.__boundIndex = gidx;
              this.nodeLevelInfo.set(_n, {
                level: abs,
                slot: _j
              });
              idx++;
            }
            var visualHeight = this.spawn.baseHeight * this.spawn.baseScale * pieceS;
            accY += visualHeight + this.spawn.levelPaddingVisual;
          }

          // выключаем лишние и чистим карту уровней
          for (; idx < this.pool.length; idx++) {
            var _n2 = this.pool[idx];
            if (_n2) {
              _n2.active = false;
              this.nodeLevelInfo["delete"](_n2);
            }
          }
        };
        _proto.buildPool = function buildPool() {
          if (!this.spawn.prefab) {
            console.warn('TowerLayoutController: prefab не назначен');
            return;
          }
          var need = Math.max(1, this.spawn.visibleLevels) * Math.max(1, this.spawn.objectsPerLevel);
          if (this.pool.length === 0) {
            for (var i = 0; i < need; i++) {
              var n = instantiate(this.spawn.prefab);
              n.setParent(this.node);
              n.active = true;
              this.pool.push(n);
            }
          }
        }

        /* ========================== Цвета/наборы через библиотеку ========================== */

        /** Применить набор из ColorTextureLibrary, стабильный по gidx (и опционально hex_color) */;
        _proto.applyLibrarySetForIndex = function applyLibrarySetForIndex(root, gidx, piece) {
          var _piece$hex_color;
          var lib = this.getLib();
          if (!lib) return; // просто выходим, без ошибок

          var count = typeof lib.getSetsCount === 'function' ? lib.getSetsCount() : this.spawn.colorSetsFallback;

          // индекс набора — стабильно по gidx
          var baseKey = this.spawn.randomizeColors ? (this.spawn.rngSeedColors ^ gidx) >>> 0 : this.hash32str(((_piece$hex_color = piece.hex_color) != null ? _piece$hex_color : 'NOHEX') + '#' + gidx);
          var setIndex = count <= 0 ? 0 : baseKey % count;
          var bindings = root.getComponentsInChildren(ClickMoveBinding);
          var k = 0;
          for (var _iterator2 = _createForOfIteratorHelperLoose(bindings), _step2; !(_step2 = _iterator2()).done;) {
            var b = _step2.value;
            var mr = b == null ? void 0 : b.meshRenderer;
            if (!mr) continue;
            var idx = (setIndex + k++) % Math.max(1, count);
            lib.applySetByIndex(mr, this.spawn.materialIndex, idx);
          }
          this.lastKeyByNode.set(root, "SET#" + setIndex);
        };
        _proto.hash32str = function hash32str(s) {
          var h = 2166136261 >>> 0;
          for (var i = 0; i < s.length; i++) {
            h ^= s.charCodeAt(i);
            h = Math.imul(h, 16777619);
          }
          return h >>> 0;
        };
        _proto.getSetsCount = function getSetsCount() {
          var _lib$getSetsCount;
          var lib = ColorTextureLibrary == null ? void 0 : ColorTextureLibrary.instance;
          return (_lib$getSetsCount = lib == null || lib.getSetsCount == null ? void 0 : lib.getSetsCount()) != null ? _lib$getSetsCount : this.spawn.colorSetsFallback;
        }

        /* ========================== Тексты в префаб ========================== */;
        _proto.applyPieceToNode = function applyPieceToNode(root, piece) {
          root.__piece = piece != null ? piece : null;
          if (!piece) return;

          // передаём данные сразу в ClickMoveBinding
          var bindings = root.getComponentsInChildren(ClickMoveBinding);
          for (var _iterator3 = _createForOfIteratorHelperLoose(bindings), _step3; !(_step3 = _iterator3()).done;) {
            var b = _step3.value;
            b.updateFromApi({
              title: piece.title,
              name: piece.name
            });
          }
        };
        _proto.setLabelByChildName = function setLabelByChildName(root, childName, text) {
          var found = this.findChildCaseInsensitive(root, childName);
          if (!found) return;
          var lbl = found.getComponent(Label);
          if (lbl) lbl.string = text != null ? text : '';
        };
        _proto.findChildCaseInsensitive = function findChildCaseInsensitive(root, name) {
          var target = name.toLowerCase();
          var stack = [root];
          while (stack.length) {
            var n = stack.pop();
            if (n.name.toLowerCase() === target) return n;
            stack.push.apply(stack, n.children);
          }
          return null;
        }

        /* ========================== Нормализация / RNG ========================== */;
        _proto.safeReadText = /*#__PURE__*/
        function () {
          var _safeReadText = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resp) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return resp.text();
                case 3:
                  return _context2.abrupt("return", _context2.sent);
                case 6:
                  _context2.prev = 6;
                  _context2.t0 = _context2["catch"](0);
                  return _context2.abrupt("return", '');
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[0, 6]]);
          }));
          function safeReadText(_x) {
            return _safeReadText.apply(this, arguments);
          }
          return safeReadText;
        }();
        _proto.strOrNull = function strOrNull(v) {
          if (typeof v === 'string') {
            var s = v.trim();
            return s.length ? s : null;
          }
          return null;
        };
        _proto.numOrNull = function numOrNull(v) {
          if (typeof v === 'number' && Number.isFinite(v)) return v;
          if (typeof v === 'string') {
            var s = v.trim();
            if (s === '') return null;
            var n = Number(s);
            return Number.isFinite(n) ? n : null;
          }
          return null;
        };
        _proto.isUuidLoose = function isUuidLoose(v) {
          var s = v.trim();
          return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s);
        };
        _proto.isHexColor = function isHexColor(v) {
          return /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v.trim());
        };
        _proto.normalizeHex = function normalizeHex(v) {
          var s = (v.startsWith('#') ? v.slice(1) : v).trim().toLowerCase();
          if (s.length === 3) return '#' + s.split('').map(function (ch) {
            return ch + ch;
          }).join('').toUpperCase();
          if (s.length === 6) return '#' + s.toUpperCase();
          return s ? '#' + s.slice(0, 6).toUpperCase() : '#000000';
        };
        _proto.normalizeCakePiece = function normalizeCakePiece(raw) {
          var _raw$hex_color, _ref, _raw$greeting_text, _raw$filling_id, _raw$file;
          var user_id = this.strOrNull(raw == null ? void 0 : raw.uniq_id);
          if (user_id && !this.isUuidLoose(user_id)) {
            console.warn('[API] uniq_id не UUID → null:', user_id);
            user_id = null;
          }
          var hex_color = this.strOrNull((_raw$hex_color = raw == null ? void 0 : raw.hex_color) != null ? _raw$hex_color : raw == null ? void 0 : raw.color);
          if (hex_color && this.isHexColor(hex_color)) {
            hex_color = this.normalizeHex(hex_color);
          } else {
            hex_color = null;
          }
          return {
            user_id: user_id,
            hex_color: hex_color,
            name: this.strOrNull(raw == null ? void 0 : raw.name),
            title: this.strOrNull(raw == null ? void 0 : raw.title),
            greeting_text: this.strOrNull((_ref = (_raw$greeting_text = raw == null ? void 0 : raw.greeting_text) != null ? _raw$greeting_text : raw == null ? void 0 : raw.greetingText) != null ? _ref : raw == null ? void 0 : raw.greeting),
            filling_id: this.numOrNull((_raw$filling_id = raw == null ? void 0 : raw.filling_id) != null ? _raw$filling_id : raw == null ? void 0 : raw.fillingId),
            file: this.strOrNull((_raw$file = raw == null ? void 0 : raw.file) != null ? _raw$file : raw == null ? void 0 : raw.file_base64)
          };
        }
        /* ========================== Публичные утилиты индексации/поиска ========================== */

        /** Сколько объектов на уровне (public helper) */;
        _proto.getObjectsPerLevel = function getObjectsPerLevel() {
          return Math.max(1, this.spawn.objectsPerLevel);
        }

        /** Общее число доступных кусков (public helper) */;
        _proto.getPiecesCount = function getPiecesCount() {
          return this.getTotalPieces();
        }

        /** Маппинг: dataIndex (0..N-1) → {level, slot} с учётом headPad (partialAtTop) */;
        _proto.dataIndexToLevelSlot = function dataIndexToLevelSlot(dataIndex) {
          var per = this.getObjectsPerLevel();
          var total = this.getTotalPieces();
          if (dataIndex < 0 || dataIndex >= total) return null;
          var headPad = this.getHeadPad(per, total);
          var gidx = dataIndex + headPad;
          var level = Math.floor(gidx / per);
          var slot = gidx % per;
          return {
            level: level,
            slot: slot
          };
        }

        /** Обратный маппинг: {level, slot} → dataIndex (с учётом headPad). Возвращает -1 если нет данных. */;
        _proto.levelSlotToDataIndex = function levelSlotToDataIndex(level, slot) {
          var per = this.getObjectsPerLevel();
          var total = this.getTotalPieces();
          var headPad = this.getHeadPad(per, total);
          var gidx = level * per + slot;
          var dataIndex = gidx - headPad;
          return dataIndex >= 0 && dataIndex < total ? dataIndex : -1;
        }

        /** Достаёт piece по dataIndex (0..N-1). */;
        _proto.getPieceByDataIndex = function getPieceByDataIndex(dataIndex) {
          var idx = this.dataIndexToLevelSlot(dataIndex);
          if (!idx) return null;
          return this.getPieceFor(idx.level, idx.slot);
        }

        /** Случайный кусочек. Можно передать seed, иначе берём spawn.rngSeed. */;
        _proto.getRandomPiece = function getRandomPiece(seed) {
          var total = this.getTotalPieces();
          if (total <= 0) return null;
          var rng = this.mulberry32((seed != null ? seed : this.spawn.rngSeed) >>> 0);
          var dataIndex = Math.floor(rng() * total);
          var pos = this.dataIndexToLevelSlot(dataIndex);
          if (!pos) return null;
          var piece = this.getPieceFor(pos.level, pos.slot);
          if (!piece) return null; // на всякий
          return {
            level: pos.level,
            slot: pos.slot,
            dataIndex: dataIndex,
            piece: piece
          };
        }

        /** Поиск первого кусочка по user_id. Возвращает позицию и сам piece. */;
        _proto.findLevelSlotByUserId = function findLevelSlotByUserId(userId) {
          if (!userId) return null;
          var total = this.getTotalPieces();
          if (total <= 0) return null;

          // линейный проход по expanded массиву, чтобы сохранить стабильный порядок
          for (var di = 0; di < total; di++) {
            var p = this.cakesExpanded[di];
            if (p != null && p.user_id && p.user_id.toLowerCase() === userId.toLowerCase()) {
              var pos = this.dataIndexToLevelSlot(di);
              if (!pos) continue;
              return {
                level: pos.level,
                slot: pos.slot,
                dataIndex: di,
                piece: p
              };
            }
          }
          return null;
        }

        /** Удобный хелпер: проскроллить к кусочку по user_id. true если удалось. */;
        _proto.scrollToUserId = function scrollToUserId(userId, opts) {
          var found = this.findLevelSlotByUserId(userId);
          if (!found) {
            console.warn('[TowerLayout] Не найден кусочек с user_id=', userId);
            return false;
          }
          this.scrollToLevel(found.level, opts);
          return true;
        }

        /** Удобный хелпер: проскроллить к случайному кусочку. Возвращает info или null. */;
        _proto.scrollToRandomPiece = function scrollToRandomPiece(opts) {
          var rnd = this.getRandomPiece(opts == null ? void 0 : opts.seed);
          if (!rnd) return null;
          this.scrollToLevel(rnd.level, opts);
          return rnd;
        }

        /** PRNG: mulberry32 — быстрый и стабильный от seed */;
        _proto.mulberry32 = function mulberry32(a) {
          return function () {
            var t = a += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
          };
        };
        _proto.fisherYatesShuffle = function fisherYatesShuffle(arr, rng) {
          for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(rng() * (i + 1));
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
          }
        };
        return TowerLayoutController;
      }(Component), (_descriptor25 = _applyDecoratedDescriptor(_class5.prototype, "spawn", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new TVS_SpawnLayout();
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class5.prototype, "scrollCtrl", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class5)) || _class4));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});