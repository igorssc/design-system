import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = (props: TextInputRootProps) => (
  <>
    <div className="py-4 px-3 w-full h-12 flex items-center gap-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  </>
);

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = (props: TextInputIconProps) => (
  <>
    <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>
  </>
);

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: TextInputInputProps) => (
  <>
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  </>
);

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
