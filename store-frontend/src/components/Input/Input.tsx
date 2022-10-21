import {
  FC,
  useEffect,
  useRef,
  useState,
  useCallback,
  ComponentType,
} from "react";
import { useField } from "@unform/core";
import { IconBaseProps } from "react-icons";
import { Flex, Input } from "@chakra-ui/react";

interface InputProps {
  name: string;
  placeholder: string;
  icon?: ComponentType<IconBaseProps>;
}

export const CustomInput: FC<InputProps> = ({
  name,
  icon: Icon,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, error, registerField, defaultValue } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Flex
      border={
        error
          ? "2px solid #c53030"
          : isFocused
          ? "2px solid #009FE8"
          : isFilled
          ? "2px solid #009FE8"
          : "2px solid #e2e8f0"
      }
      transition="0.2s all ease-in-out"
      borderRadius="md"
      width="100%"
      alignItems="center"
      padding="0 12px"
    >
      {Icon && (
        <Icon
          size={20}
          color={
            error
              ? "#c53030"
              : isFocused
              ? "#00a7f4"
              : isFilled
              ? "#00a7f4"
              : "#d8dee6"
          }
          style={{ transition: "0.2s all ease-in-out" }}
        />
      )}

      <Input
        border="none"
        focusBorderColor="none"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        placeholder={placeholder}
      />
    </Flex>
  );
};
