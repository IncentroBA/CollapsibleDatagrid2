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
  const [chevronActive, setChevronActive] = useState(false);
  function useOutsideAlerter(ref1, ref2) {
    function handleClickOutside(event) {
      if (ref1.current && !ref1.current.contains(event.target) && !ref2.current.contains(event.target)) {
        setChevronActive(false);
      }
    }
    document.addEventListener("mouseup", handleClickOutside); // Bind the event listener
    return () => document.removeEventListener("mouseup", handleClickOutside); // Unbind the event listener on clean up
  }
  function toggleTrCollapse() {
    if (!chevronActive) {
      closeOnClick && useOutsideAlerter(collapsibleRef, chevronRef);
    }
    setChevronActive(!chevronActive);
  }
  useEffect(() => {
    if (collapsibleRef && collapsibleRef.current) {
      datagrid.current = chevronRef.current.closest('.widget-datagrid');
      const row = collapsibleRef.current.closest(".tr");
      row.appendChild(collapsibleRef.current);
    }
  });
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
    className: `tr-collapsible ${chevronActive ? "" : "tr-collapsible--collapsed"}`,
    ref: collapsibleRef
  }, contentWidgets));
  // }
}

export { CollapsibleDatagridTwo };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGFwc2libGVEYXRhZ3JpZFR3by5tanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9Db2xsYXBzaWJsZURhdGFncmlkVHdvLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3VpL0NvbGxhcHNpYmxlRGF0YWdyaWRUd28uY3NzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbGxhcHNpYmxlRGF0YWdyaWRUd28oeyBjbG9zZU9uQ2xpY2ssIGNvbnRlbnRXaWRnZXRzLCAuLi5yZXN0IH0pIHtcclxuICAgIGNvbnN0IHN0eWxlID0gcmVzdC5jbGFzcyB8fCBcIlwiO1xyXG4gICAgY29uc3QgY2hldnJvblJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGNvbGxhcHNpYmxlUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgZGF0YWdyaWQgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbY2hldnJvbkFjdGl2ZSwgc2V0Q2hldnJvbkFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHVzZU91dHNpZGVBbGVydGVyKHJlZjEsIHJlZjIpIHtcclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHJlZjEuY3VycmVudCAmJiAhcmVmMS5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIXJlZjIuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDaGV2cm9uQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVDbGlja091dHNpZGUpOyAvLyBCaW5kIHRoZSBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVDbGlja091dHNpZGUpOyAvLyBVbmJpbmQgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIGNsZWFuIHVwXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRyQ29sbGFwc2UoKSB7XHJcbiAgICAgICAgaWYgKCFjaGV2cm9uQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGNsb3NlT25DbGljayAmJiB1c2VPdXRzaWRlQWxlcnRlcihjb2xsYXBzaWJsZVJlZiwgY2hldnJvblJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoZXZyb25BY3RpdmUoIWNoZXZyb25BY3RpdmUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjb2xsYXBzaWJsZVJlZiAmJiBjb2xsYXBzaWJsZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGRhdGFncmlkLmN1cnJlbnQgPSBjaGV2cm9uUmVmLmN1cnJlbnQuY2xvc2VzdCgnLndpZGdldC1kYXRhZ3JpZCcpO1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBjb2xsYXBzaWJsZVJlZi5jdXJyZW50LmNsb3Nlc3QoXCIudHJcIik7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb2xsYXBzaWJsZVJlZi5jdXJyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJ0bi10ZC1jb2xsYXBzZSAke3N0eWxlfSAke2NoZXZyb25BY3RpdmUgPyBcImJ0bi10ZC1jb2xsYXBzZS0tYWN0aXZlXCIgOiBcIlwifWB9IHJlZj17Y2hldnJvblJlZn0gb25DbGljaz17dG9nZ2xlVHJDb2xsYXBzZX0+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIxNlwiIHdpZHRoPVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04LjAwMDA0IDExLjEzNjlDOC4yMTAzMyAxMS4xMzY5IDguMzg3NDEgMTEuMDUzOSA4LjU0Nzg5IDEwLjg5MzRMMTIuNDkzNSA2Ljg1MzY4QzEyLjYyMDggNi43MjA4NyAxMi42ODcyIDYuNTY1OTIgMTIuNjg3MiA2LjM3Nzc3QzEyLjY4NzIgNS45OTA0IDEyLjM4MjkgNS42ODYwNCAxMi4wMDY2IDUuNjg2MDRDMTEuODIzOSA1LjY4NjA0IDExLjY0NjkgNS43NjM1MSAxMS41MDg1IDUuOTAxODZMOC4wMDU1NyA5LjUwNDM5TDQuNDkxNTggNS45MDE4NkM0LjM1ODc2IDUuNzY5MDQgNC4xODcyMiA1LjY4NjA0IDMuOTkzNTMgNS42ODYwNEMzLjYxNzIzIDUuNjg2MDQgMy4zMTI4NyA1Ljk5MDQgMy4zMTI4NyA2LjM3Nzc3QzMuMzEyODcgNi41NjAzOCAzLjM4NDgxIDYuNzIwODcgMy41MTIwOCA2Ljg1MzY4TDcuNDU3NzIgMTAuODkzNEM3LjYyMzc0IDExLjA1OTQgNy43OTUyOSAxMS4xMzY5IDguMDAwMDQgMTEuMTM2OVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRyLWNvbGxhcHNpYmxlICR7Y2hldnJvbkFjdGl2ZSA/IFwiXCIgOiBcInRyLWNvbGxhcHNpYmxlLS1jb2xsYXBzZWRcIn1gfSByZWY9e2NvbGxhcHNpYmxlUmVmfT5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50V2lkZ2V0c31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgLy8gfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDb2xsYXBzaWJsZURhdGFncmlkVHdvIiwiY2xvc2VPbkNsaWNrIiwiY29udGVudFdpZGdldHMiLCJyZXN0Iiwic3R5bGUiLCJjbGFzcyIsImNoZXZyb25SZWYiLCJ1c2VSZWYiLCJjb2xsYXBzaWJsZVJlZiIsImRhdGFncmlkIiwiY2hldnJvbkFjdGl2ZSIsInNldENoZXZyb25BY3RpdmUiLCJ1c2VTdGF0ZSIsInVzZU91dHNpZGVBbGVydGVyIiwicmVmMSIsInJlZjIiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVUckNvbGxhcHNlIiwidXNlRWZmZWN0IiwiY2xvc2VzdCIsInJvdyIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInJlZiIsIm9uQ2xpY2siLCJ4bWxucyIsImhlaWdodCIsIndpZHRoIiwidmlld0JveCIsImQiXSwibWFwcGluZ3MiOiI7O0FBR08sU0FBU0Esc0JBQXNCQSxDQUFDO0VBQUVDLFlBQVk7RUFBRUMsY0FBYztFQUFFLEdBQUdDLElBQUFBO0FBQUssQ0FBQyxFQUFFO0FBQzlFLEVBQUEsTUFBTUMsS0FBSyxHQUFHRCxJQUFJLENBQUNFLEtBQUssSUFBSSxFQUFFLENBQUE7QUFDOUIsRUFBQSxNQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUMvQixFQUFBLE1BQU1DLGNBQWMsR0FBR0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ25DLEVBQUEsTUFBTUUsUUFBUSxHQUFHRixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7RUFDN0IsTUFBTSxDQUFDRyxhQUFhLEVBQUVDLGdCQUFnQixDQUFDLEdBQUdDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FB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
