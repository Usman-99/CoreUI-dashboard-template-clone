import React, { useState } from "react";
import { Typography, MenuItem, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomButton from "../components/CustomButton";
import TextInput from "../components/TextInput";
import CustomRadioControl from "../components/CustomRadioControl";
import CustomAutoComplete from "../components/CustomAutoComplete";
import CustomCheckboxControl from "../components/CustomCheckboxControl";

const PersonalInfoForm = () => {
  const buttonSX = { fontSize: "0.7rem", minHeight: "2.5rem" };
  const radioSX = { marginRight: 1, minHeight: "2.5rem ", paddingY: 1 };
  const [cnic, setCnic] = useState("");
  const [title, setTitle] = useState("Mr.");
  const [gender, setGender] = useState("Male");
  const [disable, setDisable] = useState(false);
  const [Type, setType] = useState("text");
  const capitals = [
    { label: "Islamabad", id: 1 },
    { label: "Lahore", id: 2 },
    { label: "Karachi", id: 3 },
    { label: "Quetta", id: 4 },
    { label: "Peshawar", id: 5 },
    { label: "Muzaffarabad", id: 6 },
    { label: "Gilgit", id: 7 },
  ];
  const autocompObj = [
    "Grade",
    "Unit",
    "Location",
    "Emp. Type",
    "Cost Center",
    "Cost Location",
    "Designation",
    "W. Design",
    "NTN",
  ];
  return (
    <Paper sx={{ backgroundColor: "#ECF4FC", padding: "1rem" }}>
      <Accordion defaultExpanded sx={{ backgroundColor: "#ECF4FC" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight="bold" color="primary">
            Personal Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container rowSpacing={2} columnSpacing={1}>
            {/* CNIC */}
            <Grid size={{ xs: 12, sm: 6, md: 3.3, lg: 2.6 }}>
              <TextInput
                Label="CNIC Number"
                Value={cnic}
                Onchange={(e) => setCnic(e.target.value)}
                Placeholder="99999-9999999-9"
                Type="number"
              />
            </Grid>
            <Grid
              size={{ xs: 6, sm: 1.5, md: 1, lg: 0.7 }}
              marginLeft={{ sm: 1 }}
              marginRight={{ sm: 0.5, md: 0 }}
            >
              <CustomButton
                Variant="contained"
                Text="Find"
                SX={buttonSX}
                Full={true}
              />
            </Grid>
            <Grid
              size={{ xs: 6, sm: 2.4, md: 1.3, lg: 1.1 }}
              marginRight={{ sm: 1 }}
            >
              <CustomButton
                Variant="contained"
                Full={true}
                Text="Check Employee"
                SX={{ ...buttonSX, fontSize: { xs: "0.7rem", sm: "0.55rem" } }}
              />
            </Grid>
            {/* Expiry */}
            <Grid size={{ xs: 12, sm: 6, md: 2.86, lg: 2.4 }}>
              <TextInput
                Label="Expiry Date"
                Onfocus={() => setType("date")}
                Onblur={() => setType("text")}
                Type={Type}
              />
            </Grid>
            {/* Family Number */}
            <Grid size={{ xs: 12, sm: 6, md: 3.3, lg: 2.6 }}>
              <TextInput Label="Family Number" Type="number" />
            </Grid>
            {/* Verified */}
            <CustomRadioControl
              size={{ xs: 12, sm: 6, md: 3.2, lg: 2.4 }}
              labelSx={radioSX}
              label="Verified"
              Fvalue="Yes"
              Svalue="No"
            />
            {/* Title */}
            <Grid size={{ xs: 12, sm: 6, md: 2, lg: 1 }}>
              <TextInput
                Label="Title"
                Select
                Value={title}
                Onchange={(e) => setTitle(e.target.value)}
              >
                <MenuItem value="Mr.">Mr.</MenuItem>
                <MenuItem value="Ms.">Ms.</MenuItem>
                <MenuItem value="Mrs.">Mrs.</MenuItem>
              </TextInput>
            </Grid>

            {/* Name */}
            <Grid size={{ xs: 12, sm: 6, md: 3.4, lg: 4.5 }}>
              <TextInput Label="Name" Type="text" />
            </Grid>

            {/* Father/Husband */}
            <Grid size={{ xs: 12, sm: 6, md: 3.4, lg: 4.5 }}>
              <TextInput Label="Father/Husband" />
            </Grid>
            {/* Gender */}
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <TextInput
                Label="Gender"
                Select
                Value={gender}
                Onchange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </TextInput>
            </Grid>
            {/* Birth Place */}
            <Grid size={{ xs: 12, sm: 6, md: 3.3333, lg: 3.2 }}>
              <TextInput Label="Birth Place" />
            </Grid>
            {/* Native Place */}
            <Grid size={{ xs: 12, sm: 6, md: 3.3333, lg: 3.2 }}>
              <TextInput Label="Native Place" />
            </Grid>
            {/* Date of Birth */}
            <Grid size={{ xs: 12, sm: 6, md: 3.3333, lg: 3.2 }}>
              <TextInput
                Label="Date of Birth"
                Onfocus={() => setType("date")}
                Onblur={() => setType("text")}
                Type={Type}
              />
            </Grid>

            {/* Disable */}
            <CustomRadioControl
              size={{ xs: 12, sm: 6, md: 12, lg: 2.4 }}
              OnChange={(e) => setDisable(e.target.value === "true")}
              labelSx={radioSX}
              label="Disable"
              Flabel="No"
              Slabel="Yes"
              Fvalue={false}
              Svalue={true}
              radioValue={disable}
            />
            <Grid container size={{ md: 12, lg: 6 }}>
              {/* Current Address */}
              <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                <Typography
                  fontWeight="bold"
                  color="primary"
                  marginBottom={0.9}
                >
                  Contact Information
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 8, lg: 12 }}>
                <TextInput Label="Current Address" Multiline={true} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 6 }}>
                <CustomAutoComplete options={capitals} label="City" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 6 }}>
                <TextInput Label="Postal Code" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 6 }}>
                <TextInput Label="Phone 1" />
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 6 }}>
                <TextInput Label="Phone 2" />
              </Grid>
            </Grid>
            <Grid container size={{ md: 12, lg: 6 }}>
              {/* Permanent Address */}
              <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                <CustomButton
                  Text="Same as Current Address"
                  SX={{ textDecoration: "underline" }}
                  Size="small"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 8, lg: 12 }}>
                <TextInput Label="Permanent Address" Multiline={true} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 6 }}>
                <CustomAutoComplete options={capitals} label="City" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 6 }}>
                <TextInput Label="Postal Code" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 6 }}>
                <TextInput Label="Phone 1" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 6 }}>
                <TextInput Label="Phone 2" />
              </Grid>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <hr />
            </Grid>
            {/* Cell */}
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3.5 }}>
              <TextInput Label="Cell 1" />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3.5 }}>
              <TextInput Label="Cell 2" />
            </Grid>
            {/* Mailing Address */}
            <CustomRadioControl
              size={{ xs: 12, lg: 5 }}
              labelSx={{ ...radioSX, marginLeft: { lg: 2 } }}
              label="Mailing Address"
              Fvalue="Permanent"
              Svalue="Current"
            />
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#ECF4FC" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography fontWeight="bold" color="primary">
            Company Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container rowSpacing={2} columnSpacing={1}>
            {/* Job Code */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CustomAutoComplete options={capitals} label="Job Code" />
            </Grid>

            {/* Org Unit */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CustomAutoComplete options={capitals} label="Org. Unit" />
            </Grid>

            {/* Org Unit Head Checkbox */}
            <CustomCheckboxControl
              label="Org. Unit Head"
              size={{ xs: 12, sm: 6, md: 3 }}
              justify="flex-start"
            />
            {/* Department Head Checkbox */}
            <CustomCheckboxControl
              label="Dept. Head"
              size={{ xs: 12, sm: 6, md: 3 }}
              justify="flex-start"
            />

            {autocompObj.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <CustomAutoComplete options={capitals} label={item} />
              </Grid>
            ))}
            <Grid size={{ xs: 12 }}>
              <hr />
            </Grid>
            {/* Date of Appointment */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <TextInput
                Label="Date of Appointment"
                Onfocus={() => setType("date")}
                Onblur={() => setType("text")}
                Type={Type}
              />
            </Grid>

            {/* Confirmation Applicable */}
            <CustomCheckboxControl
              label="Confirmation Applicable"
              size={{ xs: 12, sm: 6, md: 3 }}
              justify="flex-start"
            />
            {/* Probation Period */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <TextInput
                Label="Probation Period (months)"
                Type="number"
                Placeholder="Months"
              />
            </Grid>
            {/* Confirmation Due On */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <TextInput
                Label="Confirmation Due On"
                Onfocus={() => setType("date")}
                Onblur={() => setType("text")}
                Type={Type}
              />
            </Grid>
            <CustomCheckboxControl
              label="Contractual Employee"
              size={{ xs: 12, sm: 6, md: 3 }}
              justify="flex-start"
            />
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <TextInput
                Label="Retirement Date"
                Onfocus={() => setType("date")}
                Onblur={() => setType("text")}
                Type={Type}
              />
            </Grid>
            <CustomRadioControl
              size={{ xs: 12, md: 3, lg: 3 }}
              labelSx={radioSX}
              label="Expatriate Status"
              Fvalue="Yes"
              Svalue="No"
            />
            <CustomRadioControl
              size={{ xs: 12, md: 3, lg: 3 }}
              labelSx={radioSX}
              label="Zakat Exempted"
              Fvalue="Yes"
              Svalue="No"
            />
            {/* Currency */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <TextInput Label="Currency" Select Value="PAKISTANI RUPEE">
                <MenuItem value="PAKISTANI RUPEE">Pakistani Rupee</MenuItem>
              </TextInput>
            </Grid>

            {/* EOBI Information */}
            <Grid size={{ xs: 12 }}>
              <Typography
                fontWeight="bold"
                color="primary"
                marginTop={2}
                marginBottom={1}
              >
                EOBI and ESSI Information
              </Typography>
            </Grid>

            {/* EOBI Member */}
            <Grid container size={{ xs: 12 }}>
              <CustomCheckboxControl
                label="EOBI Member"
                justify="flex-start"
                size={{ xs: 12, md: 4 }}
              />
              <Grid size={{ xs: 12, md: 4 }}>
                <TextInput Label="EOBI Number" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <CustomAutoComplete options={capitals} label="Sub Office" />
              </Grid>
            </Grid>
            {/* ESSI Member */}
            <Grid container size={{ xs: 12 }}>
              <CustomCheckboxControl
                label="ESSI Member"
                size={{ xs: 12, md: 4 }}
                justify="flex-start"
              />
              <Grid size={{ xs: 12, md: 4 }}>
                <TextInput Label="ESSI Number" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <CustomAutoComplete options={capitals} label="Sub Office" />
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};

export default PersonalInfoForm;
