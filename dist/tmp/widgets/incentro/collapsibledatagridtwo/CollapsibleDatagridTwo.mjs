import { useRef, useState, useEffect, createElement } from 'react';

function CollapsibleDatagridTwo({
  closeOnClick,
  contentWidgets,
  ...rest
}) {
  const style = rest.class || "";
  const chevronRef = useRef(null);
  const collapsibleRef = useRef(null);
  const datagrid = useRef(null);
  const [isActive, setIsActive] = useState(false);
  function useOutsideAlerter(ref1, ref2) {
    function handleClickOutside(event) {
      if (ref1.current && !ref1.current.contains(event.target) && !ref2.current.contains(event.target)) {
        setTimeout(() => setIsActive(false), 20);
      }
    }
    document.addEventListener("mousedown", handleClickOutside); // Bind the event listener
    return () => document.removeEventListener("mousedown", handleClickOutside); // Unbind the event listener on clean up
  }
  function toggleTrCollapse() {
    setIsActive(!isActive);
    closeOnClick && useOutsideAlerter(collapsibleRef, chevronRef);
  }
  useEffect(() => {
    if (collapsibleRef && collapsibleRef.current) {
      datagrid.current = chevronRef.current.closest('.widget-datagrid');
      const row = collapsibleRef.current.closest(".tr");
      row.appendChild(collapsibleRef.current);
    }
  });
  return createElement("div", null, createElement("div", {
    className: `btn-td-collapse ${style} ${isActive ? "btn-td-collapse--active" : ""}`,
    ref: chevronRef,
    onClick: toggleTrCollapse
  }, createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "16",
    width: "16",
    viewBox: "0 0 16 16"
  }, createElement("path", {
    d: "M8.00004 11.1369C8.21033 11.1369 8.38741 11.0539 8.54789 10.8934L12.4935 6.85368C12.6208 6.72087 12.6872 6.56592 12.6872 6.37777C12.6872 5.9904 12.3829 5.68604 12.0066 5.68604C11.8239 5.68604 11.6469 5.76351 11.5085 5.90186L8.00557 9.50439L4.49158 5.90186C4.35876 5.76904 4.18722 5.68604 3.99353 5.68604C3.61723 5.68604 3.31287 5.9904 3.31287 6.37777C3.31287 6.56038 3.38481 6.72087 3.51208 6.85368L7.45772 10.8934C7.62374 11.0594 7.79529 11.1369 8.00004 11.1369Z"
  }))), createElement("div", {
    className: `tr-collapsible ${isActive ? "" : "tr-collapsible--collapsed"}`,
    ref: collapsibleRef
  }, contentWidgets));
  // }
}

export { CollapsibleDatagridTwo };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGFwc2libGVEYXRhZ3JpZFR3by5tanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9Db2xsYXBzaWJsZURhdGFncmlkVHdvLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3VpL0NvbGxhcHNpYmxlRGF0YWdyaWRUd28uY3NzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbGxhcHNpYmxlRGF0YWdyaWRUd28oeyBjbG9zZU9uQ2xpY2ssIGNvbnRlbnRXaWRnZXRzLCAuLi5yZXN0IH0pIHtcclxuICAgIGNvbnN0IHN0eWxlID0gcmVzdC5jbGFzcyB8fCBcIlwiO1xyXG4gICAgY29uc3QgY2hldnJvblJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGNvbGxhcHNpYmxlUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgZGF0YWdyaWQgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gdXNlT3V0c2lkZUFsZXJ0ZXIocmVmMSwgcmVmMikge1xyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xyXG4gICAgICAgICAgICBpZiAocmVmMS5jdXJyZW50ICYmICFyZWYxLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhcmVmMi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNBY3RpdmUoZmFsc2UpLCAyMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpOyAvLyBCaW5kIHRoZSBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7IC8vIFVuYmluZCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW4gdXBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlVHJDb2xsYXBzZSgpIHtcclxuICAgICAgICBzZXRJc0FjdGl2ZSghaXNBY3RpdmUpXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrICYmIHVzZU91dHNpZGVBbGVydGVyKGNvbGxhcHNpYmxlUmVmLCBjaGV2cm9uUmVmKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY29sbGFwc2libGVSZWYgJiYgY29sbGFwc2libGVSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBkYXRhZ3JpZC5jdXJyZW50ID0gY2hldnJvblJlZi5jdXJyZW50LmNsb3Nlc3QoJy53aWRnZXQtZGF0YWdyaWQnKTtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gY29sbGFwc2libGVSZWYuY3VycmVudC5jbG9zZXN0KFwiLnRyXCIpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY29sbGFwc2libGVSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BidG4tdGQtY29sbGFwc2UgJHtzdHlsZX0gJHtpc0FjdGl2ZSA/IFwiYnRuLXRkLWNvbGxhcHNlLS1hY3RpdmVcIiA6IFwiXCJ9YH0gcmVmPXtjaGV2cm9uUmVmfSBvbkNsaWNrPXt0b2dnbGVUckNvbGxhcHNlfT5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjE2XCIgd2lkdGg9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguMDAwMDQgMTEuMTM2OUM4LjIxMDMzIDExLjEzNjkgOC4zODc0MSAxMS4wNTM5IDguNTQ3ODkgMTAuODkzNEwxMi40OTM1IDYuODUzNjhDMTIuNjIwOCA2LjcyMDg3IDEyLjY4NzIgNi41NjU5MiAxMi42ODcyIDYuMzc3NzdDMTIuNjg3MiA1Ljk5MDQgMTIuMzgyOSA1LjY4NjA0IDEyLjAwNjYgNS42ODYwNEMxMS44MjM5IDUuNjg2MDQgMTEuNjQ2OSA1Ljc2MzUxIDExLjUwODUgNS45MDE4Nkw4LjAwNTU3IDkuNTA0MzlMNC40OTE1OCA1LjkwMTg2QzQuMzU4NzYgNS43NjkwNCA0LjE4NzIyIDUuNjg2MDQgMy45OTM1MyA1LjY4NjA0QzMuNjE3MjMgNS42ODYwNCAzLjMxMjg3IDUuOTkwNCAzLjMxMjg3IDYuMzc3NzdDMy4zMTI4NyA2LjU2MDM4IDMuMzg0ODEgNi43MjA4NyAzLjUxMjA4IDYuODUzNjhMNy40NTc3MiAxMC44OTM0QzcuNjIzNzQgMTEuMDU5NCA3Ljc5NTI5IDExLjEzNjkgOC4wMDAwNCAxMS4xMzY5WlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdHItY29sbGFwc2libGUgJHtpc0FjdGl2ZSA/IFwiXCIgOiBcInRyLWNvbGxhcHNpYmxlLS1jb2xsYXBzZWRcIn1gfSByZWY9e2NvbGxhcHNpYmxlUmVmfT5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50V2lkZ2V0c31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgLy8gfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDb2xsYXBzaWJsZURhdGFncmlkVHdvIiwiY2xvc2VPbkNsaWNrIiwiY29udGVudFdpZGdldHMiLCJyZXN0Iiwic3R5bGUiLCJjbGFzcyIsImNoZXZyb25SZWYiLCJ1c2VSZWYiLCJjb2xsYXBzaWJsZVJlZiIsImRhdGFncmlkIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInVzZVN0YXRlIiwidXNlT3V0c2lkZUFsZXJ0ZXIiLCJyZWYxIiwicmVmMiIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0Iiwic2V0VGltZW91dCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVUckNvbGxhcHNlIiwidXNlRWZmZWN0IiwiY2xvc2VzdCIsInJvdyIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInJlZiIsIm9uQ2xpY2siLCJ4bWxucyIsImhlaWdodCIsIndpZHRoIiwidmlld0JveCIsImQiXSwibWFwcGluZ3MiOiI7O0FBR08sU0FBU0Esc0JBQXNCQSxDQUFDO0VBQUVDLFlBQVk7RUFBRUMsY0FBYztFQUFFLEdBQUdDLElBQUFBO0FBQUssQ0FBQyxFQUFFO0FBQzlFLEVBQUEsTUFBTUMsS0FBSyxHQUFHRCxJQUFJLENBQUNFLEtBQUssSUFBSSxFQUFFLENBQUE7QUFDOUIsRUFBQSxNQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUMvQixFQUFBLE1BQU1DLGNBQWMsR0FBR0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ25DLEVBQUEsTUFBTUUsUUFBUSxHQUFHRixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7RUFDN0IsTUFBTSxDQUFDRyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7QUFFL0MsRUFBQSxTQUFTQyxpQkFBaUJBLENBQUNDLElBQUksRUFBRUMsSUFBSSxFQUFFO0lBQ25DLFNBQVNDLGtCQUFrQkEsQ0FBQ0MsS0FBSyxFQUFFO01BQy9CLElBQUlILElBQUksQ0FBQ0ksT0FBTyxJQUFJLENBQUNKLElBQUksQ0FBQ0ksT0FBTyxDQUFDQyxRQUFRLENBQUNGLEtBQUssQ0FBQ0csTUFBTSxDQUFDLElBQUksQ0FBQ0wsSUFBSSxDQUFDRyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDRyxNQUFNLENBQUMsRUFBRTtRQUM5RkMsVUFBVSxDQUFDLE1BQU1WLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtBQUM1QyxPQUFBO0FBQ0osS0FBQTtJQUVBVyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsRUFBRVAsa0JBQWtCLENBQUMsQ0FBQztJQUMzRCxPQUFPLE1BQU1NLFFBQVEsQ0FBQ0UsbUJBQW1CLENBQUMsV0FBVyxFQUFFUixrQkFBa0IsQ0FBQyxDQUFDO0FBQy9FLEdBQUE7RUFFQSxTQUFTUyxnQkFBZ0JBLEdBQUc7SUFDeEJkLFdBQVcsQ0FBQyxDQUFDRCxRQUFRLENBQUMsQ0FBQTtBQUN0QlQsSUFBQUEsWUFBWSxJQUFJWSxpQkFBaUIsQ0FBQ0wsY0FBYyxFQUFFRixVQUFVLENBQUMsQ0FBQTtBQUNqRSxHQUFBO0FBRUFvQixFQUFBQSxTQUFTLENBQUMsTUFBTTtBQUNaLElBQUEsSUFBSWxCLGNBQWMsSUFBSUEsY0FBYyxDQUFDVSxPQUFPLEVBQUU7TUFDMUNULFFBQVEsQ0FBQ1MsT0FBTyxHQUFHWixVQUFVLENBQUNZLE9BQU8sQ0FBQ1MsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUE7TUFDakUsTUFBTUMsR0FBRyxHQUFHcEIsY0FBYyxDQUFDVSxPQUFPLENBQUNTLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNqREMsTUFBQUEsR0FBRyxDQUFDQyxXQUFXLENBQUNyQixjQUFjLENBQUNVLE9BQU8sQ0FBQyxDQUFBO0FBQzNDLEtBQUE7QUFDSixHQUFDLENBQUMsQ0FBQTtFQUVGLE9BQ0lZLGFBQUEsY0FDSUEsYUFBQSxDQUFBLEtBQUEsRUFBQTtJQUFLQyxTQUFTLEVBQUcsbUJBQWtCM0IsS0FBTSxDQUFBLENBQUEsRUFBR00sUUFBUSxHQUFHLHlCQUF5QixHQUFHLEVBQUcsQ0FBRSxDQUFBO0FBQUNzQixJQUFBQSxHQUFHLEVBQUUxQixVQUFXO0FBQUMyQixJQUFBQSxPQUFPLEVBQUVSLGdCQUFBQTtBQUFpQixHQUFBLEVBQ2hJSyxhQUFBLENBQUEsS0FBQSxFQUFBO0FBQUtJLElBQUFBLEtBQUssRUFBQyw0QkFBNEI7QUFBQ0MsSUFBQUEsTUFBTSxFQUFDLElBQUk7QUFBQ0MsSUFBQUEsS0FBSyxFQUFDLElBQUk7QUFBQ0MsSUFBQUEsT0FBTyxFQUFDLFdBQUE7QUFBVyxHQUFBLEVBQzlFUCxhQUFBLENBQUEsTUFBQSxFQUFBO0FBQU1RLElBQUFBLENBQUMsRUFBQyxpZEFBQTtBQUFpZCxHQUFFLENBQzFkLENBQ0osQ0FBQyxFQUNOUixhQUFBLENBQUEsS0FBQSxFQUFBO0FBQUtDLElBQUFBLFNBQVMsRUFBRyxDQUFpQnJCLGVBQUFBLEVBQUFBLFFBQVEsR0FBRyxFQUFFLEdBQUcsMkJBQTRCLENBQUUsQ0FBQTtBQUFDc0IsSUFBQUEsR0FBRyxFQUFFeEIsY0FBQUE7R0FDakZOLEVBQUFBLGNBQ0EsQ0FDSixDQUFDLENBQUE7QUFFVjtBQUNKOzs7OyJ9