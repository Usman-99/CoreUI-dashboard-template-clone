import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const CustomRadioControl = ({
  label,size,
  Fvalue,Flabel=Fvalue,
  OnChange,
  labelSx = {},Svalue,Slabel=Svalue,radioValue
}) => {
  return (
    <Grid size={size}>
      <FormControl>
        <RadioGroup row onChange={OnChange} value={radioValue}>
          <FormLabel sx={labelSx}>
           {label}
          </FormLabel>
          <FormControlLabel
            value={Fvalue}
            control={<Radio />}
            label={Flabel}
          />
          <FormControlLabel
            value={Svalue}
            control={<Radio />}
            label={Slabel}
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};
export default CustomRadioControl;