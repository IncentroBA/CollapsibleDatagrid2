'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".collapsible-datagrid-preview {\r\n  background-color: white;\r\n  border: dashed 1px #ced0d3;\r\n  border-radius: 4px;\r\n  margin-bottom: 24px;\r\n  padding: 8px;\r\n}\r\n\r\n.collapsible-datagrid-preview p {margin: 0;}\r\n\r\n.widget-datagrid .btn-td-collapse svg {\r\n    fill: currentColor;\r\n    pointer-events: none;\r\n    transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);\r\n    will-change: transform;\r\n}\r\n\r\n.widget-datagrid .btn-td-collapse:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.widget-datagrid .btn-td-collapse--active svg {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.widget-datagrid .tr-collapsible {\r\n    background-color: var(--collapsible-datagrid2-background, #fafafa);\r\n    border-bottom: solid 1px var(--collapsible-datagrid2-border, #e8e8e8);\r\n    gap: var(--spacing-regular, 16px);\r\n    grid-column: 1 / -1;\r\n    padding: 15px var(--spacing-large, 24px);\r\n}\r\n\r\n.widget-datagrid .tr-collapsible:empty,\r\n.widget-datagrid .tr-collapsible--collapsed {\r\n    display: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbGxhcHNpYmxlRGF0YWdyaWRUd28uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQSxpQ0FBaUMsU0FBUyxDQUFDOztBQUUzQztJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIseURBQXlEO0lBQ3pELHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrRUFBa0U7SUFDbEUscUVBQXFFO0lBQ3JFLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsd0NBQXdDO0FBQzVDOztBQUVBOztJQUVJLGFBQWE7QUFDakIiLCJmaWxlIjoiQ29sbGFwc2libGVEYXRhZ3JpZFR3by5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sbGFwc2libGUtZGF0YWdyaWQtcHJldmlldyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBkYXNoZWQgMXB4ICNjZWQwZDM7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uY29sbGFwc2libGUtZGF0YWdyaWQtcHJldmlldyBwIHttYXJnaW46IDA7fVxyXG5cclxuLndpZGdldC1kYXRhZ3JpZCAuYnRuLXRkLWNvbGxhcHNlIHN2ZyB7XHJcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbn1cclxuXHJcbi53aWRnZXQtZGF0YWdyaWQgLmJ0bi10ZC1jb2xsYXBzZTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi53aWRnZXQtZGF0YWdyaWQgLmJ0bi10ZC1jb2xsYXBzZS0tYWN0aXZlIHN2ZyB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4ud2lkZ2V0LWRhdGFncmlkIC50ci1jb2xsYXBzaWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xsYXBzaWJsZS1kYXRhZ3JpZDItYmFja2dyb3VuZCwgI2ZhZmFmYSk7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tY29sbGFwc2libGUtZGF0YWdyaWQyLWJvcmRlciwgI2U4ZThlOCk7XHJcbiAgICBnYXA6IHZhcigtLXNwYWNpbmctcmVndWxhciwgMTZweCk7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xyXG4gICAgcGFkZGluZzogMTVweCB2YXIoLS1zcGFjaW5nLWxhcmdlLCAyNHB4KTtcclxufVxyXG5cclxuLndpZGdldC1kYXRhZ3JpZCAudHItY29sbGFwc2libGU6ZW1wdHksXHJcbi53aWRnZXQtZGF0YWdyaWQgLnRyLWNvbGxhcHNpYmxlLS1jb2xsYXBzZWQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */";
var stylesheet=".collapsible-datagrid-preview {\r\n  background-color: white;\r\n  border: dashed 1px #ced0d3;\r\n  border-radius: 4px;\r\n  margin-bottom: 24px;\r\n  padding: 8px;\r\n}\r\n\r\n.collapsible-datagrid-preview p {margin: 0;}\r\n\r\n.widget-datagrid .btn-td-collapse svg {\r\n    fill: currentColor;\r\n    pointer-events: none;\r\n    transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);\r\n    will-change: transform;\r\n}\r\n\r\n.widget-datagrid .btn-td-collapse:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.widget-datagrid .btn-td-collapse--active svg {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.widget-datagrid .tr-collapsible {\r\n    background-color: var(--collapsible-datagrid2-background, #fafafa);\r\n    border-bottom: solid 1px var(--collapsible-datagrid2-border, #e8e8e8);\r\n    gap: var(--spacing-regular, 16px);\r\n    grid-column: 1 / -1;\r\n    padding: 15px var(--spacing-large, 24px);\r\n}\r\n\r\n.widget-datagrid .tr-collapsible:empty,\r\n.widget-datagrid .tr-collapsible--collapsed {\r\n    display: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbGxhcHNpYmxlRGF0YWdyaWRUd28uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQSxpQ0FBaUMsU0FBUyxDQUFDOztBQUUzQztJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIseURBQXlEO0lBQ3pELHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrRUFBa0U7SUFDbEUscUVBQXFFO0lBQ3JFLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsd0NBQXdDO0FBQzVDOztBQUVBOztJQUVJLGFBQWE7QUFDakIiLCJmaWxlIjoiQ29sbGFwc2libGVEYXRhZ3JpZFR3by5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sbGFwc2libGUtZGF0YWdyaWQtcHJldmlldyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBkYXNoZWQgMXB4ICNjZWQwZDM7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uY29sbGFwc2libGUtZGF0YWdyaWQtcHJldmlldyBwIHttYXJnaW46IDA7fVxyXG5cclxuLndpZGdldC1kYXRhZ3JpZCAuYnRuLXRkLWNvbGxhcHNlIHN2ZyB7XHJcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbn1cclxuXHJcbi53aWRnZXQtZGF0YWdyaWQgLmJ0bi10ZC1jb2xsYXBzZTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi53aWRnZXQtZGF0YWdyaWQgLmJ0bi10ZC1jb2xsYXBzZS0tYWN0aXZlIHN2ZyB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4ud2lkZ2V0LWRhdGFncmlkIC50ci1jb2xsYXBzaWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xsYXBzaWJsZS1kYXRhZ3JpZDItYmFja2dyb3VuZCwgI2ZhZmFmYSk7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tY29sbGFwc2libGUtZGF0YWdyaWQyLWJvcmRlciwgI2U4ZThlOCk7XHJcbiAgICBnYXA6IHZhcigtLXNwYWNpbmctcmVndWxhciwgMTZweCk7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xyXG4gICAgcGFkZGluZzogMTVweCB2YXIoLS1zcGFjaW5nLWxhcmdlLCAyNHB4KTtcclxufVxyXG5cclxuLndpZGdldC1kYXRhZ3JpZCAudHItY29sbGFwc2libGU6ZW1wdHksXHJcbi53aWRnZXQtZGF0YWdyaWQgLnRyLWNvbGxhcHNpYmxlLS1jb2xsYXBzZWQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */";
styleInject(css_248z);

var CollapsibleDatagridTwo = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': css_248z,
	stylesheet: stylesheet
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(CollapsibleDatagridTwo);

function preview({
  contentWidgets
}) {
  const ContentRenderer = contentWidgets.renderer;
  return react.createElement("div", {
    className: "collapsible-datagrid-preview"
  }, react.createElement(ContentRenderer, {
    caption: "Place content widgets inside."
  }, react.createElement("div", {
    className: "collapsible-datagrid-preview-content"
  })));
}
function getPreviewCss() {
  return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGFwc2libGVEYXRhZ3JpZFR3by5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtaW5qZWN0L2Rpc3Qvc3R5bGUtaW5qZWN0LmVzLmpzIiwiLi4vLi4vLi4vc3JjL0NvbGxhcHNpYmxlRGF0YWdyaWRUd28uZWRpdG9yUHJldmlldy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZUluamVjdDtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmV2aWV3KHsgY29udGVudFdpZGdldHMgfSkge1xyXG4gICAgY29uc3QgQ29udGVudFJlbmRlcmVyID0gY29udGVudFdpZGdldHMucmVuZGVyZXI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNpYmxlLWRhdGFncmlkLXByZXZpZXdcIj5cclxuICAgICAgICAgICAgPENvbnRlbnRSZW5kZXJlciBjYXB0aW9uPVwiUGxhY2UgY29udGVudCB3aWRnZXRzIGluc2lkZS5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2libGUtZGF0YWdyaWQtcHJldmlldy1jb250ZW50XCIgLz5cclxuICAgICAgICAgICAgPC9Db250ZW50UmVuZGVyZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlld0NzcygpIHtcclxuICAgIHJldHVybiByZXF1aXJlKFwiLi91aS9Db2xsYXBzaWJsZURhdGFncmlkVHdvLmNzc1wiKTtcclxufSJdLCJuYW1lcyI6WyJzdHlsZUluamVjdCIsImNzcyIsInJlZiIsImluc2VydEF0IiwiZG9jdW1lbnQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsInByZXZpZXciLCJjb250ZW50V2lkZ2V0cyIsIkNvbnRlbnRSZW5kZXJlciIsInJlbmRlcmVyIiwiY2xhc3NOYW1lIiwiY2FwdGlvbiIsImdldFByZXZpZXdDc3MiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsU0FBU0EsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFDN0IsSUFBS0EsR0FBRyxLQUFLLEtBQUssQ0FBQyxFQUFHQSxHQUFHLEdBQUcsRUFBRSxDQUFBO0FBQzlCLEVBQUEsSUFBSUMsUUFBUSxHQUFHRCxHQUFHLENBQUNDLFFBQVEsQ0FBQTtBQUUzQixFQUFBLElBQUksQ0FBQ0YsR0FBRyxJQUFJLE9BQU9HLFFBQVEsS0FBSyxXQUFXLEVBQUU7QUFBRSxJQUFBLE9BQUE7QUFBUSxHQUFBO0FBRXZELEVBQUEsSUFBSUMsSUFBSSxHQUFHRCxRQUFRLENBQUNDLElBQUksSUFBSUQsUUFBUSxDQUFDRSxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNwRSxFQUFBLElBQUlDLEtBQUssR0FBR0gsUUFBUSxDQUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7RUFDM0NELEtBQUssQ0FBQ0UsSUFBSSxHQUFHLFVBQVUsQ0FBQTtFQUV2QixJQUFJTixRQUFRLEtBQUssS0FBSyxFQUFFO0lBQ3RCLElBQUlFLElBQUksQ0FBQ0ssVUFBVSxFQUFFO01BQ25CTCxJQUFJLENBQUNNLFlBQVksQ0FBQ0osS0FBSyxFQUFFRixJQUFJLENBQUNLLFVBQVUsQ0FBQyxDQUFBO0FBQzNDLEtBQUMsTUFBTTtBQUNMTCxNQUFBQSxJQUFJLENBQUNPLFdBQVcsQ0FBQ0wsS0FBSyxDQUFDLENBQUE7QUFDekIsS0FBQTtBQUNGLEdBQUMsTUFBTTtBQUNMRixJQUFBQSxJQUFJLENBQUNPLFdBQVcsQ0FBQ0wsS0FBSyxDQUFDLENBQUE7QUFDekIsR0FBQTtFQUVBLElBQUlBLEtBQUssQ0FBQ00sVUFBVSxFQUFFO0FBQ3BCTixJQUFBQSxLQUFLLENBQUNNLFVBQVUsQ0FBQ0MsT0FBTyxHQUFHYixHQUFHLENBQUE7QUFDaEMsR0FBQyxNQUFNO0lBQ0xNLEtBQUssQ0FBQ0ssV0FBVyxDQUFDUixRQUFRLENBQUNXLGNBQWMsQ0FBQ2QsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNqRCxHQUFBO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7O0FDdkJPLFNBQVNlLE9BQU9BLENBQUM7QUFBRUMsRUFBQUEsY0FBQUE7QUFBZSxDQUFDLEVBQUU7QUFDeEMsRUFBQSxNQUFNQyxlQUFlLEdBQUdELGNBQWMsQ0FBQ0UsUUFBUSxDQUFBO0FBRS9DLEVBQUEsT0FDSVgsbUJBQUEsQ0FBQSxLQUFBLEVBQUE7QUFBS1ksSUFBQUEsU0FBUyxFQUFDLDhCQUFBO0dBQ1haLEVBQUFBLG1CQUFBLENBQUNVLGVBQWUsRUFBQTtBQUFDRyxJQUFBQSxPQUFPLEVBQUMsK0JBQUE7QUFBK0IsR0FBQSxFQUNwRGIsbUJBQUEsQ0FBQSxLQUFBLEVBQUE7QUFBS1ksSUFBQUEsU0FBUyxFQUFDLHNDQUFBO0dBQXdDLENBQzFDLENBQ2hCLENBQUMsQ0FBQTtBQUVkLENBQUE7QUFFTyxTQUFTRSxhQUFhQSxHQUFHO0VBQzVCLE9BQU9DLFVBQTBDLENBQUE7QUFDckQ7Ozs7OyJ9
