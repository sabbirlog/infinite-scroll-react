import Skeleton from "@mui/material/Skeleton";
import Box  from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const SkeletonCard = () => {
    return (
        <Card
            sx={{
                display: "flex",
                padding: "10px",
            }}
        >
            <Box sx={{ flexBasis: "30%", borderRadius: "10px" }}>
                <Skeleton variant="rectangular" height={140} />
            </Box>

            <CardContent sx={{ flexBasis: "70%", padding: "14px" }}>
                <Skeleton />
                <Skeleton width="60%" height={40} />
            </CardContent>
        </Card>
    )
}

export default SkeletonCard