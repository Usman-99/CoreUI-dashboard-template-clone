import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CustomAutoComplete({options,SX,label}) {
  return (
    <Autocomplete
      disablePortal
      options={options}
      sx={SX || {}} 
      renderInput={(params) => <TextField {...params} label={label} size="small"/>}
    />
  );
}
