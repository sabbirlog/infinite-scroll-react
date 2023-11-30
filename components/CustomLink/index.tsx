'use client'

import { useTheme } from "@mui/material/styles"
import Link from "next/link"

import { CustomLink } from "./Type"

const CustomLink = ({ href, children, className, ...rest }: CustomLink) => {
    const theme = useTheme();

    return (
        <Link href={href}
            className={className}
            style={{
                textDecoration: 'none',
                textTransform: 'capitalize',
                color: theme.palette.primary.contrastText,
                ...rest
            }}>
            {children}
        </Link>
    )
}

export default CustomLink