"use client";

import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import CustomLink from "../CustomLink/index";
import CustomChip from "../CustomChip/index";

import { IViewCard } from "./Type";

export default function ViewCard({
  image,
  title,
  date,
  description,
  slug,
  tags,
}: IViewCard) {
  const theme = useTheme();

  const colorByMode =
    theme.palette.mode === "dark"
      ? "linear-gradient(to right, #6b21a8, #581c87 )"
      : "linear-gradient(to right, #bbf7d0, #dcfce7 )";

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        padding: "10px",
        "&:hover": {
          "& .view-card-title": {
            backgroundSize: "100% 10px",
            transition: "background-size .5s cubic-bezier(.4,0,.2,1)",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          flexBasis: { xs: "none", sm: "40%" },
          overflow: "hidden",
          borderRadius: "10px",
          height: { xs: "230px", sm: "auto" },
        }}
      >
        <Image
          className="card-media"
        //   loader={() => image}
          src='/car-show.jpg'
          alt="open laptop image"
          fill
          sizes="100vw"
        //   quality={75}
        //   priority
        />
      </Box>
      <CardContent
        sx={{
          flexBasis: { xs: "100%", sm: "60%" },
          padding: "14px",
          paddingBottom: "14px !important",
        }}
      >
        <Stack direction="row" columnGap={1} mb={1}>
          {/* <CustomChip label="react" type="tech" /> */}
          <CustomChip label="next" type="education" />
        </Stack>
        <Typography
          sx={{
            marginBottom: "8px",
          }}
          variant="h3"
          component="h3"
        >
          <CustomLink href=''>
            <Box
              className="view-card-title"
              component="span"
              sx={{
                backgroundImage: colorByMode,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 100%",
                backgroundSize: "0 10px",
                transition: "background-size .5s cubic-bezier(.4,0,.2,1)",
              }}
              color="primary.contrastText"
            >
              {title}
            </Box>
          </CustomLink>
        </Typography>

        <Typography
          sx={{ marginBottom: "14px" }}
          variant="body2"
          // textAlign="justify"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam harum corrupti blanditiis nobis, nisi delectus eveniet, possimus odio expedita dolor, pariatur assumenda. Hic, blanditiis voluptas officiis esse earum velit cum?
          {/* {truncateText(description, 11)} */}
        </Typography>
        <Typography
          variant="body1"
          component="span"
          display="inline-block"
          color="grey.500"
        >
          {/* {fDate(date)} ({fToNow(date)}) */}
          11.5.07
        </Typography>
      </CardContent>
    </Card>
  );
}
