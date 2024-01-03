import { CSSProperties, ReactNode, useState, useEffect, useRef } from "react";
import styles from "./Dropdown.module.scss";

export type DropdownProps = {
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
  classNameTitle?: string;
  classNameChildren?: string;
  styleTitle?: CSSProperties;
  styleChildren?: CSSProperties;
  style?: CSSProperties;
  onClick?: (e: boolean) => void;
  onTriggerActionOpen?: (open: Boolean) => void;
  mode?: "bubble" | "drop" | "dropOff" | "bubbleClick";
  bubblePosition?: "start" | "mid" | "end";
  animationIcon?: (open: boolean) => ReactNode;
  disable?: boolean;
  cursorNoDrop?: boolean;
  state?: boolean;
};
export const Dropdown = (DropdownProps: DropdownProps) => {
  // Define constant
  const [open, setOpen] = useState(
    DropdownProps.state ? DropdownProps.state : false
  );
  const ref = useRef<any>(null);

  //Function to create

  //Function to action
  const handleOnClickTitle = () => {
    DropdownProps.mode == "drop" && setOpen(!open);
    DropdownProps.mode == "bubbleClick" && setOpen(true);
    DropdownProps.onClick && DropdownProps.onClick(true);
  };

  //Function hook
  useEffect(() => {
    setOpen(DropdownProps.state ? true : false);
  }, [DropdownProps.state]);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  //Function to render
  const renderTitle = (title?: ReactNode) => {
    return (
      <div
        onClick={handleOnClickTitle}
        className={[
          "row",
          "justify-between",
          styles[`Title_${DropdownProps.mode}`],
          DropdownProps.classNameTitle,
        ].join(" ")}
        style={DropdownProps.styleTitle}
      >
        {title}
        {DropdownProps.mode == "drop" &&
          (DropdownProps.animationIcon ? (
            DropdownProps.animationIcon(open)
          ) : (
            <i
              className={[
                "bi bi-chevron-down",
                styles.Icon,
                open && styles.Active,
              ].join(" ")}
            />
          ))}
      </div>
    );
  };

  const renderChildrenBubble = (children: ReactNode) => {
    return (
      <div
        className={[
          styles[`Children_${DropdownProps.mode}`],
          DropdownProps.bubblePosition &&
            styles[`Bubble_${DropdownProps.bubblePosition}`],
          DropdownProps.classNameChildren,
        ].join(" ")}
        style={DropdownProps.styleChildren}
      >
        {children}
      </div>
    );
  };

  const renderChildrenBubbleClick = (children: ReactNode) => {
    return (
      <div
        className={[
          styles[`Children_${DropdownProps.mode}`],
          DropdownProps.bubblePosition &&
            styles[`Bubble_${DropdownProps.bubblePosition}`],
          DropdownProps.classNameChildren,
        ].join(" ")}
        style={
          open == true
            ? {
                opacity: "1",
                zIndex: "2",
                ...DropdownProps.styleChildren,
              }
            : {
                opacity: "0",
                zIndex: "-1",
                ...DropdownProps.styleChildren,
              }
        }
      >
        {children}
      </div>
    );
  };
  const renderChildrenDrop = (children: ReactNode) => {
    return (
      <div
        className={[
          styles[`Children_${DropdownProps.mode}`],
          open && styles.Open,
          open && styles.classNameChildren,
          DropdownProps.classNameChildren,
        ].join(" ")}
        style={DropdownProps.styleChildren}
      >
        {children}
      </div>
    );
  };
  const renderChildrenDropOff = (children: ReactNode) => {
    return <div style={DropdownProps.styleChildren}>{children}</div>;
  };

  const renderChildrenType = (mode?: string) => {
    switch (mode) {
      case "bubble":
        return renderChildrenBubble(DropdownProps.children);
      case "drop":
        return renderChildrenDrop(DropdownProps.children);
      case "dropOff":
        return renderChildrenDropOff(DropdownProps.children);
      case "bubbleClick":
        return renderChildrenBubbleClick(DropdownProps.children);
      default:
        return renderChildrenDrop(DropdownProps.children);
    }
  };

  //Main render
  return (
    <div
      className={[styles.Dropdown, styles.Bubble, DropdownProps.className].join(
        " "
      )}
      style={
        DropdownProps.cursorNoDrop
          ? { ...DropdownProps.style, cursor: "no-drop" }
          : { ...DropdownProps.style, cursor: "pointer" }
      }
      ref={ref}
    >
      <>
        {renderTitle(DropdownProps.title)}
        {DropdownProps.disable
          ? undefined
          : renderChildrenType(DropdownProps.mode)}
      </>
    </div>
  );
};

Dropdown.defaultProps = {
  action: "click",
  mode: "dropOff",
  bubblePosition: "mid",
  disable: false,
  cursorNoDrop: false,
};
