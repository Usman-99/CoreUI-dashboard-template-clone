import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import LinearProgress from "@mui/material/LinearProgress";
import { Typography, Box, Stack } from "@mui/material";
import Flag from "react-world-flags";
import { allAppImages } from "../constant/AppImages";

// Import Font Awesome components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faCcApplePay,
  faCcStripe,
} from "@fortawesome/free-brands-svg-icons";

// Styled table cells
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const thead = ["User", "Country", "Usage", "Payment Method", "Activity"];
const rows = [
  {
    name: "Yiorgos Avraamu",
    percent: 50,
    card: faCcVisa,
    time: "10 sec ago",
    img: allAppImages.avatar1,
    flag: "US",
  },
  {
    name: "Avram Tarasios",
    percent: 22,
    card: faCcMastercard,
    time: "5 minutes ago",
    img: allAppImages.avatar2,
    flag: "BR",
  },
  {
    name: "Quintin Ed",
    percent: 74,
    card: faCcPaypal,
    time: "1 hour ago",
    img: allAppImages.avatar3,
    flag: "IN",
  },
  {
    name: "Enéas Kwadwo",
    percent: 98,
    card: faCcApplePay,
    time: "Last month",
    img: allAppImages.avatar4,
    flag: "FR",
  },
  {
    name: "Agapetus Tadeáš",
    percent: 22,
    card: faCcStripe,
    time: "Last week",
    img: allAppImages.avatar5,
    flag: "ES",
  },
];

console.log("hello", rows);
export default function Users() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {thead.map((item, index) => (
              <StyledTableCell key={index}>{item}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((user) => (
            <StyledTableRow key={user.name}>
              {/* User Info */}
              <StyledTableCell>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar alt={user.name} src={user.img} />
                  <Box>
                    <Typography variant="subtitle2">{user.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      New | Registered: Jan 1, 2023
                    </Typography>
                  </Box>
                </Stack>
              </StyledTableCell>
              <StyledTableCell>
                <Flag code={user.flag} width="30" />
              </StyledTableCell>

              <StyledTableCell>
                <Box>
                  <Typography variant="body2">{`${user.percent}%`}</Typography>
                  <LinearProgress variant="determinate" value={user.percent} />
                  <Typography variant="caption" color="textSecondary">
                    Jun 11, 2023 - Jul 10, 2023
                  </Typography>
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{ textAlign: "center" }}>
                <FontAwesomeIcon icon={user.card} fontSize="1.5rem" />
              </StyledTableCell>
              <StyledTableCell>
                <span color="gray">Last Login</span> <br />
                {user.time}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
