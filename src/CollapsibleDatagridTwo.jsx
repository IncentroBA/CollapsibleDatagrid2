import "./ui/CollapsibleDatagridTwo.css";
import { createElement, useEffect, useRef, useState } from "react";

export function CollapsibleDatagridTwo({ closeOnClick, contentWidgets, ...rest }) {
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
    
    return (
        <div>
            <div className={`btn-td-collapse ${style} ${chevronActive ? "btn-td-collapse--active" : ""}`} ref={chevronRef} onClick={toggleTrCollapse}>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
                    <path d="M8.00004 11.1369C8.21033 11.1369 8.38741 11.0539 8.54789 10.8934L12.4935 6.85368C12.6208 6.72087 12.6872 6.56592 12.6872 6.37777C12.6872 5.9904 12.3829 5.68604 12.0066 5.68604C11.8239 5.68604 11.6469 5.76351 11.5085 5.90186L8.00557 9.50439L4.49158 5.90186C4.35876 5.76904 4.18722 5.68604 3.99353 5.68604C3.61723 5.68604 3.31287 5.9904 3.31287 6.37777C3.31287 6.56038 3.38481 6.72087 3.51208 6.85368L7.45772 10.8934C7.62374 11.0594 7.79529 11.1369 8.00004 11.1369Z" />
                </svg>
            </div>
            <div className={`tr-collapsible ${chevronActive ? "" : "tr-collapsible--collapsed"}`} ref={collapsibleRef}>
                {contentWidgets}
            </div>
        </div>
    );
    // }
}
