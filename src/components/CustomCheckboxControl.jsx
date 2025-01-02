import { FormControlLabel,Checkbox } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function CustomCheckboxControl({ size, label,justify="center" }) {
  return (
    <Grid size={size} justifyContent={justify} display="flex">
      <FormControlLabel control={<Checkbox />} label={label} />
    </Grid>
  );
}
