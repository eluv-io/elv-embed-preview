import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import CloseIcon from "../../static/icons/close.svg";
import Icon from "Components/common/Icon";

const dialogSizes = {
  "XS": "xs",
  "SM": "sm",
  "MD": "md",
  "LG": "lg"
};

const Dialog = ({
  title,
  description,
  open,
  onOpenChange,
  children,
  size="SM"
}) => {
  const Dialog = DialogPrimitive.Root;
  const DialogOverlay = DialogPrimitive.Overlay;
  const DialogContent = DialogPrimitive.Content;
  const DialogTitle = DialogPrimitive.Title;
  const DialogDescription = DialogPrimitive.Description;
  const DialogClose = DialogPrimitive.Close;

  return (
    <div className="dialog">
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogOverlay className="dialog__overlay">
          <DialogContent className={`dialog__content dialog__content--${dialogSizes[size]}`}>
            <DialogTitle className="dialog__content__body__title">{ title }</DialogTitle>
            <div className="dialog__content__body">
              {
                description &&
                <DialogDescription>{ description }</DialogDescription>
              }
              { children }
            </div>
            <DialogClose asChild>
              <button
                aria-label="Close"
                className="dialog__close-button"
              >
                <Icon icon={CloseIcon} />
              </button>
            </DialogClose>
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </div>
  );
};

export default Dialog;
