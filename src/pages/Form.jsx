import {
  Typography,
  FormControlLabel,
  Checkbox,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CustomButton from "../components/CustomButton";
import TextInput from "../components/TextInput";
import PageContainer from "../components/PageContainer";
import { useState } from "react";

const AppointmentForm = () => {
  const [Type, setType] = useState("text");
  return (
    <PageContainer width="lg">
      <Grid container rowSpacing={2} columnSpacing={2}>
        {/* Title */}
        <Grid size={{ xs: 12 }}>
          <Typography variant="h6" align="center" fontWeight="bold" margin={4}>
            Make an appointment
          </Typography>
        </Grid>

        {/* Title Field */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
          <TextInput
            Label="Title"
            Name="title"
            Value=""
            Onchange={() => {}}
            Type="text"
          />
        </Grid>

        {/* Date and Plan */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
          <TextInput
            Label="Date"
            Name="date"
            Value=""
            Onchange={() => {}}
            Onfocus={() => setType("date")}
            Onblur={() => setType("text")}
            Type={Type}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextInput
            Label="Plan"
            Name="plan"
            Value=""
            Onchange={() => {}}
            Type="text"
            Select={true}
            children={
              <>
                <MenuItem value="Basic plan">Basic plan</MenuItem>
                <MenuItem value="Premium plan">Premium plan</MenuItem>
              </>
            }
          />
        </Grid>

        {/* Pet Information */}
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle1">Pet information</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <TextInput
            Label="Name"
            Name="petName"
            Value=""
            Onchange={() => {}}
            Type="text"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
          <TextInput
            Label="Breed"
            Name="breed"
            Value=""
            Onchange={() => {}}
            Type="text"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 5, lg: 6 }}>
          <TextInput
            Label="Description"
            Name="description"
            Value=""
            Onchange={() => {}}
            Type="text"
            Multiline={true}
          />
        </Grid>

        {/* Contact Information */}
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle1">Contact information</Typography>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
          <TextInput
            Label="First name"
            Name="firstName"
            Value=""
            Onchange={() => {}}
            Type="text"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextInput
            Label="Last name"
            Name="lastName"
            Value=""
            Onchange={() => {}}
            Type="text"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextInput
            Label="Phone number"
            Name="phoneNumber"
            Value=""
            Onchange={() => {}}
            Type="tel"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextInput
            Label="Email"
            Name="email"
            Value=""
            Onchange={() => {}}
            Type="email"
          />
        </Grid>

        {/* Checkbox */}
        <Grid size={{ xs: 12 }}>
          <FormControlLabel
            control={<Checkbox name="confirmOrder" />}
            label="Call me back to confirm my order"
          />
        </Grid>

        {/* Submit Button */}
        
      </Grid>
      <Grid size={{ xs:12, sm: 12, md: 6,lg:6 }} display="flex" justifyContent="center" maxHeight="2.5rem" m={2}>
          <CustomButton
            Type="submit"
            Variant="contained"
            Color="success"
            Text="MAKE AN APPOINTMENT!"
            Onclick={() => {}}
         
          />
        </Grid>
    </PageContainer>
  );
};

export default AppointmentForm;
