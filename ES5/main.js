"use strict";

var _claseCliente = _interopRequireDefault(require("./claseCliente.js"));

var _claseImpuestos = _interopRequireDefault(require("./claseImpuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resultado = function resultado(n) {
  $("#resultado tbody").html('');
  listaC.forEach(function (item) {
    $("#resultado tbody").append("\n        <tr> \n            <th>".concat(item._nombre, "</th>\n            <th>").concat(item._impuesto.montoBrutoA, "\n            <th>").concat(item._impuesto.deduccionesF, "\n            <th>").concat(item.calcularImpuesto(), "</th> \n        </tr> \n    "));
  });
  console.log(n);
};

var listaC = [];
$("form").submit(function (e) {
  e.preventDefault();
  var mBA1 = new _claseImpuestos["default"]();
  mBA1.montoBrutoA = $('#monto-anual').val();
  mBA1.deduccionesF = $('#deducciones').val();
  var nC1 = new _claseCliente["default"]($('#nombre-cliente').val(), mBA1);
  listaC.push(nC1);
  resultado(nC1);
  $("form")[0].reset();
});