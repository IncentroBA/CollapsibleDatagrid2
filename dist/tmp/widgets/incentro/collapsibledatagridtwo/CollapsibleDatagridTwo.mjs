import { useRef, useState, useEffect, createElement } from 'react';

function CollapsibleDatagridTwo({
  closeOnClick,
  contentWidgets,
  displayCompact,
  openByBoolean,
  ...rest
}) {
  const style = rest.class || "";
  const chevronRef = useRef(null);
  const collapsibleRef = useRef(null);
  const datagrid = useRef(null);
  const [chevronActive, setChevronActive] = useState(false);
  useEffect(() => {
    if (!closeOnClick || !chevronActive) return;
    function handleClickOutside(event) {
      const row = collapsibleRef.current?.closest('.tr');
      if (collapsibleRef.current && chevronRef.current && row && !collapsibleRef.current.contains(event.target) && !chevronRef.current.contains(event.target) && !row.contains(event.target)) {
        setChevronActive(false);
        openByBoolean?.setValue(false);
      }
    }
    document.addEventListener("mouseup", handleClickOutside);
    return () => document.removeEventListener("mouseup", handleClickOutside);
  }, [chevronActive, closeOnClick]);
  function toggleTrCollapse(event) {
    event.preventDefault();
    event.stopPropagation();

    // Remove the useOutsideAlerter call
    if (openByBoolean?.setValue) {
      openByBoolean.setValue(!openByBoolean.value);
    } else {
      setChevronActive(!chevronActive);
    }
  }
  useEffect(() => {
    if (collapsibleRef && collapsibleRef.current) {
      datagrid.current = chevronRef.current.closest('.widget-datagrid');
      const row = collapsibleRef.current.closest(".tr");
      row.appendChild(collapsibleRef.current);
    }
  });
  useEffect(() => {
    if (openByBoolean?.value !== undefined) {
      setChevronActive(Boolean(openByBoolean.value));
    }
  }, [openByBoolean?.value]);
  return createElement("div", null, createElement("div", {
    className: `btn-td-collapse ${style} ${chevronActive ? "btn-td-collapse--active" : ""}`,
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
    className: `tr-collapsible ${chevronActive ? "" : "tr-collapsible--collapsed"} ${displayCompact ? 'tr-collapsible--compact' : ''}`,
    ref: collapsibleRef
  }, contentWidgets));
}

export { CollapsibleDatagridTwo };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGFwc2libGVEYXRhZ3JpZFR3by5tanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9Db2xsYXBzaWJsZURhdGFncmlkVHdvLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3VpL0NvbGxhcHNpYmxlRGF0YWdyaWRUd28uY3NzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbGxhcHNpYmxlRGF0YWdyaWRUd28oeyBjbG9zZU9uQ2xpY2ssIGNvbnRlbnRXaWRnZXRzLCBkaXNwbGF5Q29tcGFjdCwgb3BlbkJ5Qm9vbGVhbiwgLi4ucmVzdCB9KSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHJlc3QuY2xhc3MgfHwgXCJcIjtcclxuICAgIGNvbnN0IGNoZXZyb25SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBjb2xsYXBzaWJsZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGRhdGFncmlkID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2NoZXZyb25BY3RpdmUsIHNldENoZXZyb25BY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghY2xvc2VPbkNsaWNrIHx8ICFjaGV2cm9uQWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBjb2xsYXBzaWJsZVJlZi5jdXJyZW50Py5jbG9zZXN0KCcudHInKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjb2xsYXBzaWJsZVJlZi5jdXJyZW50ICYmIFxyXG4gICAgICAgICAgICBjaGV2cm9uUmVmLmN1cnJlbnQgJiYgXHJcbiAgICAgICAgICAgIHJvdyAmJiBcclxuICAgICAgICAgICAgIWNvbGxhcHNpYmxlUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiBcclxuICAgICAgICAgICAgIWNoZXZyb25SZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmIFxyXG4gICAgICAgICAgICAhcm93LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIHNldENoZXZyb25BY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgb3BlbkJ5Qm9vbGVhbj8uc2V0VmFsdWUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICB9LCBbY2hldnJvbkFjdGl2ZSwgY2xvc2VPbkNsaWNrXSk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRyQ29sbGFwc2UoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgdGhlIHVzZU91dHNpZGVBbGVydGVyIGNhbGxcclxuICAgICAgICBpZiAob3BlbkJ5Qm9vbGVhbj8uc2V0VmFsdWUpIHtcclxuICAgICAgICAgICAgb3BlbkJ5Qm9vbGVhbi5zZXRWYWx1ZSghb3BlbkJ5Qm9vbGVhbi52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q2hldnJvbkFjdGl2ZSghY2hldnJvbkFjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjb2xsYXBzaWJsZVJlZiAmJiBjb2xsYXBzaWJsZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGRhdGFncmlkLmN1cnJlbnQgPSBjaGV2cm9uUmVmLmN1cnJlbnQuY2xvc2VzdCgnLndpZGdldC1kYXRhZ3JpZCcpO1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBjb2xsYXBzaWJsZVJlZi5jdXJyZW50LmNsb3Nlc3QoXCIudHJcIik7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb2xsYXBzaWJsZVJlZi5jdXJyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBcclxuICAgICAgICBpZiAob3BlbkJ5Qm9vbGVhbj8udmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXRDaGV2cm9uQWN0aXZlKEJvb2xlYW4ob3BlbkJ5Qm9vbGVhbi52YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtvcGVuQnlCb29sZWFuPy52YWx1ZV0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYnRuLXRkLWNvbGxhcHNlICR7c3R5bGV9ICR7Y2hldnJvbkFjdGl2ZSA/IFwiYnRuLXRkLWNvbGxhcHNlLS1hY3RpdmVcIiA6IFwiXCJ9YH0gcmVmPXtjaGV2cm9uUmVmfSBvbkNsaWNrPXt0b2dnbGVUckNvbGxhcHNlfT5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjE2XCIgd2lkdGg9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguMDAwMDQgMTEuMTM2OUM4LjIxMDMzIDExLjEzNjkgOC4zODc0MSAxMS4wNTM5IDguNTQ3ODkgMTAuODkzNEwxMi40OTM1IDYuODUzNjhDMTIuNjIwOCA2LjcyMDg3IDEyLjY4NzIgNi41NjU5MiAxMi42ODcyIDYuMzc3NzdDMTIuNjg3MiA1Ljk5MDQgMTIuMzgyOSA1LjY4NjA0IDEyLjAwNjYgNS42ODYwNEMxMS44MjM5IDUuNjg2MDQgMTEuNjQ2OSA1Ljc2MzUxIDExLjUwODUgNS45MDE4Nkw4LjAwNTU3IDkuNTA0MzlMNC40OTE1OCA1LjkwMTg2QzQuMzU4NzYgNS43NjkwNCA0LjE4NzIyIDUuNjg2MDQgMy45OTM1MyA1LjY4NjA0QzMuNjE3MjMgNS42ODYwNCAzLjMxMjg3IDUuOTkwNCAzLjMxMjg3IDYuMzc3NzdDMy4zMTI4NyA2LjU2MDM4IDMuMzg0ODEgNi43MjA4NyAzLjUxMjA4IDYuODUzNjhMNy40NTc3MiAxMC44OTM0QzcuNjIzNzQgMTEuMDU5NCA3Ljc5NTI5IDExLjEzNjkgOC4wMDAwNCAxMS4xMzY5WlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdHItY29sbGFwc2libGUgJHtjaGV2cm9uQWN0aXZlID8gXCJcIiA6IFwidHItY29sbGFwc2libGUtLWNvbGxhcHNlZFwifSAke2Rpc3BsYXlDb21wYWN0ID8gJ3RyLWNvbGxhcHNpYmxlLS1jb21wYWN0JyA6ICcnfWB9IHJlZj17Y29sbGFwc2libGVSZWZ9PlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnRXaWRnZXRzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvbGxhcHNpYmxlRGF0YWdyaWRUd28iLCJjbG9zZU9uQ2xpY2siLCJjb250ZW50V2lkZ2V0cyIsImRpc3BsYXlDb21wYWN0Iiwib3BlbkJ5Qm9vbGVhbiIsInJlc3QiLCJzdHlsZSIsImNsYXNzIiwiY2hldnJvblJlZiIsInVzZVJlZiIsImNvbGxhcHNpYmxlUmVmIiwiZGF0YWdyaWQiLCJjaGV2cm9uQWN0aXZlIiwic2V0Q2hldnJvbkFjdGl2ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJyb3ciLCJjdXJyZW50IiwiY2xvc2VzdCIsImNvbnRhaW5zIiwidGFyZ2V0Iiwic2V0VmFsdWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlVHJDb2xsYXBzZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidmFsdWUiLCJhcHBlbmRDaGlsZCIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicmVmIiwib25DbGljayIsInhtbG5zIiwiaGVpZ2h0Iiwid2lkdGgiLCJ2aWV3Qm94IiwiZCJdLCJtYXBwaW5ncyI6Ijs7QUFHTyxTQUFTQSxzQkFBc0JBLENBQUM7RUFBRUMsWUFBWTtFQUFFQyxjQUFjO0VBQUVDLGNBQWM7RUFBRUMsYUFBYTtFQUFFLEdBQUdDLElBQUFBO0FBQUssQ0FBQyxFQUFFO0FBQzdHLEVBQUEsTUFBTUMsS0FBSyxHQUFHRCxJQUFJLENBQUNFLEtBQUssSUFBSSxFQUFFLENBQUE7QUFDOUIsRUFBQSxNQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUMvQixFQUFBLE1BQU1DLGNBQWMsR0FBR0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ25DLEVBQUEsTUFBTUUsUUFBUSxHQUFHRixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7RUFDN0IsTUFBTSxDQUFDRyxhQUFhLEVBQUVDLGdCQUFnQixDQUFDLEdBQUdDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUV6REMsRUFBQUEsU0FBUyxDQUFDLE1BQU07QUFDWixJQUFBLElBQUksQ0FBQ2QsWUFBWSxJQUFJLENBQUNXLGFBQWEsRUFBRSxPQUFBO0lBRXJDLFNBQVNJ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
