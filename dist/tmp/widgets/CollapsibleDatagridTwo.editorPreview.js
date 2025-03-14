'use strict';

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

var css_248z = ".collapsible-datagrid-preview {\r\n  border: dashed 1px #ced0d3;\r\n  border-radius: 4px;\r\n  margin-bottom: 24px;\r\n  padding: 8px;\r\n}\r\n\r\n.collapsible-datagrid-preview p {margin: 0;}\r\n\r\n.widget-datagrid .btn-td-collapse svg {\r\n    fill: currentColor;\r\n    pointer-events: none;\r\n    transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);\r\n    will-change: transform;\r\n}\r\n\r\n.widget-datagrid .btn-td-collapse:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.widget-datagrid .btn-td-collapse--active svg {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.widget-datagrid .btn-td-collapse:hover,\r\n.widget-datagrid .btn-td-collapse:focus,\r\n.widget-datagrid .btn-td-collapse--active {\r\n    color: var(--brand-primary);\r\n}\r\n\r\n.widget-datagrid .tr-collapsible {\r\n    background-color: var(--collapsible-datagrid2-background, #fafafa);\r\n    border-bottom: solid 1px var(--collapsible-datagrid2-border, #e8e8e8);\r\n    gap: var(--spacing-regular, 16px);\r\n    grid-column: 1 / -1;\r\n    padding: 15px var(--spacing-large, 24px);\r\n}\r\n\r\n.widget-datagrid .tr-collapsible:empty,\r\n.widget-datagrid .tr-collapsible--collapsed {\r\n    display: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbGxhcHNpYmxlRGF0YWdyaWRUd28uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBLGlDQUFpQyxTQUFTLENBQUM7O0FBRTNDO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix5REFBeUQ7SUFDekQsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0VBQWtFO0lBQ2xFLHFFQUFxRTtJQUNyRSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLHdDQUF3QztBQUM1Qzs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCIiwiZmlsZSI6IkNvbGxhcHNpYmxlRGF0YWdyaWRUd28uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxhcHNpYmxlLWRhdGFncmlkLXByZXZpZXcge1xyXG4gIGJvcmRlcjogZGFzaGVkIDFweCAjY2VkMGQzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLmNvbGxhcHNpYmxlLWRhdGFncmlkLXByZXZpZXcgcCB7bWFyZ2luOiAwO31cclxuXHJcbi53aWRnZXQtZGF0YWdyaWQgLmJ0bi10ZC1jb2xsYXBzZSBzdmcge1xyXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG59XHJcblxyXG4ud2lkZ2V0LWRhdGFncmlkIC5idG4tdGQtY29sbGFwc2U6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud2lkZ2V0LWRhdGFncmlkIC5idG4tdGQtY29sbGFwc2UtLWFjdGl2ZSBzdmcge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLndpZGdldC1kYXRhZ3JpZCAuYnRuLXRkLWNvbGxhcHNlOmhvdmVyLFxyXG4ud2lkZ2V0LWRhdGFncmlkIC5idG4tdGQtY29sbGFwc2U6Zm9jdXMsXHJcbi53aWRnZXQtZGF0YWdyaWQgLmJ0bi10ZC1jb2xsYXBzZS0tYWN0aXZlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5KTtcclxufVxyXG5cclxuLndpZGdldC1kYXRhZ3JpZCAudHItY29sbGFwc2libGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sbGFwc2libGUtZGF0YWdyaWQyLWJhY2tncm91bmQsICNmYWZhZmEpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWNvbGxhcHNpYmxlLWRhdGFncmlkMi1ib3JkZXIsICNlOGU4ZTgpO1xyXG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXJlZ3VsYXIsIDE2cHgpO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxuICAgIHBhZGRpbmc6IDE1cHggdmFyKC0tc3BhY2luZy1sYXJnZSwgMjRweCk7XHJcbn1cclxuXHJcbi53aWRnZXQtZGF0YWdyaWQgLnRyLWNvbGxhcHNpYmxlOmVtcHR5LFxyXG4ud2lkZ2V0LWRhdGFncmlkIC50ci1jb2xsYXBzaWJsZS0tY29sbGFwc2VkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */";
var stylesheet=".collapsible-datagrid-preview {\r\n  border: dashed 1px #ced0d3;\r\n  border-radius: 4px;\r\n  margin-bottom: 24px;\r\n  padding: 8px;\r\n}\r\n\r\n.collapsible-datagrid-preview p {margin: 0;}\r\n\r\n.widget-datagrid .btn-td-collapse svg {\r\n    fill: currentColor;\r\n    pointer-events: none;\r\n    transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);\r\n    will-change: transform;\r\n}\r\n\r\n.widget-datagrid .btn-td-collapse:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.widget-datagrid .btn-td-collapse--active svg {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.widget-datagrid .btn-td-collapse:hover,\r\n.widget-datagrid .btn-td-collapse:focus,\r\n.widget-datagrid .btn-td-collapse--active {\r\n    color: var(--brand-primary);\r\n}\r\n\r\n.widget-datagrid .tr-collapsible {\r\n    background-color: var(--collapsible-datagrid2-background, #fafafa);\r\n    border-bottom: solid 1px var(--collapsible-datagrid2-border, #e8e8e8);\r\n    gap: var(--spacing-regular, 16px);\r\n    grid-column: 1 / -1;\r\n    padding: 15px var(--spacing-large, 24px);\r\n}\r\n\r\n.widget-datagrid .tr-collapsible:empty,\r\n.widget-datagrid .tr-collapsible--collapsed {\r\n    display: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbGxhcHNpYmxlRGF0YWdyaWRUd28uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBLGlDQUFpQyxTQUFTLENBQUM7O0FBRTNDO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix5REFBeUQ7SUFDekQsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0VBQWtFO0lBQ2xFLHFFQUFxRTtJQUNyRSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLHdDQUF3QztBQUM1Qzs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCIiwiZmlsZSI6IkNvbGxhcHNpYmxlRGF0YWdyaWRUd28uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxhcHNpYmxlLWRhdGFncmlkLXByZXZpZXcge1xyXG4gIGJvcmRlcjogZGFzaGVkIDFweCAjY2VkMGQzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLmNvbGxhcHNpYmxlLWRhdGFncmlkLXByZXZpZXcgcCB7bWFyZ2luOiAwO31cclxuXHJcbi53aWRnZXQtZGF0YWdyaWQgLmJ0bi10ZC1jb2xsYXBzZSBzdmcge1xyXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG59XHJcblxyXG4ud2lkZ2V0LWRhdGFncmlkIC5idG4tdGQtY29sbGFwc2U6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud2lkZ2V0LWRhdGFncmlkIC5idG4tdGQtY29sbGFwc2UtLWFjdGl2ZSBzdmcge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLndpZGdldC1kYXRhZ3JpZCAuYnRuLXRkLWNvbGxhcHNlOmhvdmVyLFxyXG4ud2lkZ2V0LWRhdGFncmlkIC5idG4tdGQtY29sbGFwc2U6Zm9jdXMsXHJcbi53aWRnZXQtZGF0YWdyaWQgLmJ0bi10ZC1jb2xsYXBzZS0tYWN0aXZlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5KTtcclxufVxyXG5cclxuLndpZGdldC1kYXRhZ3JpZCAudHItY29sbGFwc2libGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sbGFwc2libGUtZGF0YWdyaWQyLWJhY2tncm91bmQsICNmYWZhZmEpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWNvbGxhcHNpYmxlLWRhdGFncmlkMi1ib3JkZXIsICNlOGU4ZTgpO1xyXG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXJlZ3VsYXIsIDE2cHgpO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxuICAgIHBhZGRpbmc6IDE1cHggdmFyKC0tc3BhY2luZy1sYXJnZSwgMjRweCk7XHJcbn1cclxuXHJcbi53aWRnZXQtZGF0YWdyaWQgLnRyLWNvbGxhcHNpYmxlOmVtcHR5LFxyXG4ud2lkZ2V0LWRhdGFncmlkIC50ci1jb2xsYXBzaWJsZS0tY29sbGFwc2VkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */";
styleInject(css_248z);

var CollapsibleDatagridTwo = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: css_248z,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGFwc2libGVEYXRhZ3JpZFR3by5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtaW5qZWN0L2Rpc3Qvc3R5bGUtaW5qZWN0LmVzLmpzIiwiLi4vLi4vLi4vc3JjL0NvbGxhcHNpYmxlRGF0YWdyaWRUd28uZWRpdG9yUHJldmlldy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZUluamVjdDtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmV2aWV3KHsgY29udGVudFdpZGdldHMgfSkge1xyXG4gICAgY29uc3QgQ29udGVudFJlbmRlcmVyID0gY29udGVudFdpZGdldHMucmVuZGVyZXI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNpYmxlLWRhdGFncmlkLXByZXZpZXdcIj5cclxuICAgICAgICAgICAgPENvbnRlbnRSZW5kZXJlciBjYXB0aW9uPVwiUGxhY2UgY29udGVudCB3aWRnZXRzIGluc2lkZS5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2libGUtZGF0YWdyaWQtcHJldmlldy1jb250ZW50XCIgLz5cclxuICAgICAgICAgICAgPC9Db250ZW50UmVuZGVyZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlld0NzcygpIHtcclxuICAgIHJldHVybiByZXF1aXJlKFwiLi91aS9Db2xsYXBzaWJsZURhdGFncmlkVHdvLmNzc1wiKTtcclxufSJdLCJuYW1lcyI6WyJzdHlsZUluamVjdCIsImNzcyIsInJlZiIsImluc2VydEF0IiwiZG9jdW1lbnQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsInByZXZpZXciLCJjb250ZW50V2lkZ2V0cyIsIkNvbnRlbnRSZW5kZXJlciIsInJlbmRlcmVyIiwiY2xhc3NOYW1lIiwiY2FwdGlvbiIsImdldFByZXZpZXdDc3MiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVNBLFdBQVdBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQzdCLElBQUtBLEdBQUcsS0FBSyxLQUFLLENBQUMsRUFBR0EsR0FBRyxHQUFHLEVBQUUsQ0FBQTtBQUM5QixFQUFBLElBQUlDLFFBQVEsR0FBR0QsR0FBRyxDQUFDQyxRQUFRLENBQUE7QUFFM0IsRUFBQSxJQUFJLENBQUNGLEdBQUcsSUFBSSxPQUFPRyxRQUFRLEtBQUssV0FBVyxFQUFFO0FBQUUsSUFBQSxPQUFBO0FBQVEsR0FBQTtBQUV2RCxFQUFBLElBQUlDLElBQUksR0FBR0QsUUFBUSxDQUFDQyxJQUFJLElBQUlELFFBQVEsQ0FBQ0Usb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDcEUsRUFBQSxJQUFJQyxLQUFLLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0VBQzNDRCxLQUFLLENBQUNFLElBQUksR0FBRyxVQUFVLENBQUE7RUFFdkIsSUFBSU4sUUFBUSxLQUFLLEtBQUssRUFBRTtJQUN0QixJQUFJRSxJQUFJLENBQUNLLFVBQVUsRUFBRTtNQUNuQkwsSUFBSSxDQUFDTSxZQUFZLENBQUNKLEtBQUssRUFBRUYsSUFBSSxDQUFDSyxVQUFVLENBQUMsQ0FBQTtBQUMzQyxLQUFDLE1BQU07QUFDTEwsTUFBQUEsSUFBSSxDQUFDTyxXQUFXLENBQUNMLEtBQUssQ0FBQyxDQUFBO0FBQ3pCLEtBQUE7QUFDRixHQUFDLE1BQU07QUFDTEYsSUFBQUEsSUFBSSxDQUFDTyxXQUFXLENBQUNMLEtBQUssQ0FBQyxDQUFBO0FBQ3pCLEdBQUE7RUFFQSxJQUFJQSxLQUFLLENBQUNNLFVBQVUsRUFBRTtBQUNwQk4sSUFBQUEsS0FBSyxDQUFDTSxVQUFVLENBQUNDLE9BQU8sR0FBR2IsR0FBRyxDQUFBO0FBQ2hDLEdBQUMsTUFBTTtJQUNMTSxLQUFLLENBQUNLLFdBQVcsQ0FBQ1IsUUFBUSxDQUFDVyxjQUFjLENBQUNkLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDakQsR0FBQTtBQUNGOzs7Ozs7Ozs7Ozs7OztBQ3ZCTyxTQUFTZSxPQUFPQSxDQUFDO0FBQUVDLEVBQUFBLGNBQUFBO0FBQWUsQ0FBQyxFQUFFO0FBQ3hDLEVBQUEsTUFBTUMsZUFBZSxHQUFHRCxjQUFjLENBQUNFLFFBQVEsQ0FBQTtBQUUvQyxFQUFBLE9BQ0lYLG1CQUFBLENBQUEsS0FBQSxFQUFBO0FBQUtZLElBQUFBLFNBQVMsRUFBQyw4QkFBQTtHQUNYWixFQUFBQSxtQkFBQSxDQUFDVSxlQUFlLEVBQUE7QUFBQ0csSUFBQUEsT0FBTyxFQUFDLCtCQUFBO0FBQStCLEdBQUEsRUFDcERiLG1CQUFBLENBQUEsS0FBQSxFQUFBO0FBQUtZLElBQUFBLFNBQVMsRUFBQyxzQ0FBQTtHQUF3QyxDQUMxQyxDQUNoQixDQUFDLENBQUE7QUFFZCxDQUFBO0FBRU8sU0FBU0UsYUFBYUEsR0FBRztFQUM1QixPQUFPQyxVQUEwQyxDQUFBO0FBQ3JEOzs7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
