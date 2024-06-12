import { CloseIcon } from "@/svgs/CloseIcon";
import React, { useCallback, useEffect } from "react";
import { DeleteIcon } from "@/svgs/icons";
import Button from "@/components/Button";
import cls from "classnames";

export const Modal = ({
  open,
  onClose,
  children,
  id = "modal-backdrop",
  title,
  className = "",
  footerClass = "pt-5",
  overlayClass = "",
  footer = null,
  onSave = () => console.log("Onsave"),
  onDelete = () => console.log("onDelete"),
}) => {
  const handleBackdropClick = useCallback(
    (event) => {
      if (event.target.id === id) {
        onClose();
      }
    },
    [id, onClose]
  );

  useEffect(() => {
    const body = document.body;
    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleBackdropClick);
      return () => {
        document.removeEventListener("mousedown", handleBackdropClick);
      };
    }
  }, [open, handleBackdropClick]);

  if (!open) return null;

  return (
    <div
      id={id}
      className={cls(
        `fixed inset-0 top-0 bg-black bg-opacity-70 z-[1111111] p-6 flex justify-center items-center ${overlayClass}`
      )}
    >
      <div
        className={cls`${className} bg-white  rounded-lg shadow-lg max-w-sm w-full min-h-[60vh] relative  `}
      >
        {/* <div
          className={`flex justify-between items-center  pb-4  ${
            id === "email-sent"
              ? "border-b-0 pl-0"
              : "border-b border-gray-100 px-3"
          } `}
        >
          <h2 className="text-[1.187rem] font-semibold leading-7 text-grey-400 ">
            {title}
          </h2>
          <button
            className="rounded-full h-[1.875rem] w-[1.875rem] flex items-center justify-center hover:bg-primary/50 border hover:text-white hover:border-primary/50 border-primary text-primary"
            onClick={onClose}
          >
            <CloseIcon className="h-4 w-4 flex " />
          </button>
        </div> */}
        <div className=" overflow-y-auto">
          <div className="">{children}</div>
        </div>
        <div className={cls`border-t mt-5 border-gray-100  pr-3${footerClass}`}>
          {footer || (
            <div className="flex justify-between items-center">
              <Button
                variant="text"
                color="warning"
                size="sm"
                className="flex gap-1 hover:ring-1 ring-warning !h-9 !text-base !font-medium !px-4"
                onClick={onDelete}
              >
                <DeleteIcon /> Delete
              </Button>
              <Button
                className="!h-9 !px-5 !text-base !font-medium"
                variant="darkContained"
                onClick={onSave}
                size="sm"
              >
                Save changes
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
