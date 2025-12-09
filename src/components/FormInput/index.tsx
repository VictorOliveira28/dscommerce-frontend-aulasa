/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FormInput(props: any) {
  const {
    validation,
    invalid = "false",
    dirty = "false",
    onTurnDurty,
    ...inputProps
  } = props;
  function handleBlur() {
    onTurnDurty(props.name);
  }
  return (
    <input
      {...inputProps}
      onBlur={handleBlur}
      data-invalid={invalid}
      data-dirty={dirty}
    />
  );
}
