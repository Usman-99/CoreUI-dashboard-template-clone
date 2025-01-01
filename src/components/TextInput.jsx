import { TextField } from "@mui/material";
const TextInput = ({
  Label,
  Name,
  Value,
  Onchange,
  SX,
  Type,
  Multiline = false,
  Full = true,
  Req = false,
  Onblur,
  Color,
  HelperText,
  Error,
  Size="small",
  Onfocus,
  Select = false,
  children
}) => {
  return (
    <TextField
      label={Label}
      color={Color}
      autoComplete="off"
      name={Name}
      fullWidth={Full}
      type={Type}
      required={Req}
      variant="outlined"
      value={Value}
      onChange={Onchange}
      sx={SX}
      size={Size}
      multiline={Multiline}
      onBlur={Onblur}
      error={Error}
      helperText={HelperText}
      onFocus={Onfocus}
      select={Select}
 
    >
      {children}
    </TextField>
  );
};
export default TextInput;
